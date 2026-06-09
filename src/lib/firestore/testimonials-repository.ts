import { FieldValue } from "firebase-admin/firestore";
import { getAdminFirestore, isFirebaseConfigured } from "@/lib/firebase/admin";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { FirestoreTestimonialDoc, PublicTestimonialItem } from "./testimonials-types";

function toPublicItem(id: string, doc: FirestoreTestimonialDoc, locale: Locale): PublicTestimonialItem | null {
  const content = doc.locales[locale];
  if (!content?.quote) return null;
  return {
    id,
    quote: content.quote,
    attribution: content.attribution,
    role: content.role,
    organization: content.organization,
    division: doc.division,
  };
}

export async function getPublishedTestimonials(locale: Locale, limit = 12): Promise<PublicTestimonialItem[]> {
  if (!isFirebaseConfigured()) return [];
  try {
    const snap = await getAdminFirestore()
      .collection("testimonials")
      .orderBy("sortOrder", "asc")
      .limit(24)
      .get();

    const items: PublicTestimonialItem[] = [];
    for (const doc of snap.docs) {
      const data = doc.data() as FirestoreTestimonialDoc;
      if (!data.published || !data.featured) continue;
      const mapped = toPublicItem(doc.id, data, locale);
      if (mapped) items.push(mapped);
      if (items.length >= limit) break;
    }
    return items;
  } catch {
    return [];
  }
}

export async function listTestimonialsAdmin() {
  const snap = await getAdminFirestore()
    .collection("testimonials")
    .orderBy("sortOrder", "asc")
    .get();

  return snap.docs.map((doc) => {
    const data = doc.data() as FirestoreTestimonialDoc;
    return {
      id: doc.id,
      division: data.division,
      featured: data.featured,
      published: data.published,
      sortOrder: data.sortOrder,
      nameFr: data.locales.fr?.attribution || data.locales.en?.attribution || doc.id,
      quoteFr: data.locales.fr?.quote?.slice(0, 80) || "",
    };
  });
}

export async function getTestimonialAdmin(id: string) {
  const doc = await getAdminFirestore().collection("testimonials").doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...(doc.data() as FirestoreTestimonialDoc) };
}

export async function saveTestimonialAdmin(id: string | null, payload: FirestoreTestimonialDoc): Promise<string> {
  const db = getAdminFirestore();
  const now = FieldValue.serverTimestamp();
  const ref = id ? db.collection("testimonials").doc(id) : db.collection("testimonials").doc();
  const existing = id ? await ref.get() : null;
  await ref.set(
    {
      ...payload,
      updatedAt: now,
      createdAt: existing?.exists ? existing.data()?.createdAt ?? now : now,
    },
    { merge: true },
  );
  return ref.id;
}

export async function seedTestimonialsFromDictionaries(): Promise<number> {
  const db = getAdminFirestore();
  const now = FieldValue.serverTimestamp();
  const frItems = getDictionary("fr").testimonials.items;
  const enItems = getDictionary("en").testimonials.items;
  const arItems = getDictionary("ar").testimonials.items;
  let count = 0;

  for (let i = 0; i < frItems.length; i++) {
    const fr = frItems[i];
    const en = enItems[i];
    const ar = arItems[i];
    const id = `testimonial-${i + 1}`;
    const doc: FirestoreTestimonialDoc = {
      division: fr.division,
      featured: true,
      published: true,
      sortOrder: i + 1,
      locales: {
        fr: {
          quote: fr.quote,
          attribution: fr.attribution,
          role: fr.role,
          organization: fr.organization,
        },
        en: en
          ? {
              quote: en.quote,
              attribution: en.attribution,
              role: en.role,
              organization: en.organization,
            }
          : undefined,
        ar: ar
          ? {
              quote: ar.quote,
              attribution: ar.attribution,
              role: ar.role,
              organization: ar.organization,
            }
          : undefined,
      },
    };
    await db.collection("testimonials").doc(id).set({ ...doc, createdAt: now, updatedAt: now }, { merge: true });
    count++;
  }
  return count;
}
