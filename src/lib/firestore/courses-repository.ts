import { FieldValue } from "firebase-admin/firestore";
import type { Locale } from "@/lib/i18n/config";
import { getAdminFirestore } from "@/lib/firebase/admin";
import type { Course } from "@/lib/training/types";
import { coursesAr } from "@/lib/training/courses/ar";
import { coursesEn } from "@/lib/training/courses/en";
import { coursesFr } from "@/lib/training/courses/fr";
import { courseToLocaleContent, firestoreToCourse, toAdminCourseRow } from "./courses-mapper";
import type { FirestoreCourseDoc, FirestoreSessionDoc } from "./courses-types";

function docToCourse(id: string, data: FirebaseFirestore.DocumentData): FirestoreCourseDoc {
  return data as FirestoreCourseDoc;
}

async function getSessions(courseId: string, publicOnly = false): Promise<FirestoreSessionDoc[]> {
  const db = getAdminFirestore();
  const query = db.collection("courses").doc(courseId).collection("sessions").orderBy("startDate", "asc");
  const snap = await query.get();
  return snap.docs
    .map((d) => d.data() as FirestoreSessionDoc)
    .filter((s) => (publicOnly ? s.published !== false : true));
}

export async function isCoursesCmsEnabled(): Promise<boolean> {
  try {
    const snap = await getAdminFirestore().collection("settings").doc("featureFlags").get();
    return snap.exists ? snap.data()?.cmsFromFirestore === true : false;
  } catch {
    return false;
  }
}

export async function seedCoursesFromStatic(): Promise<number> {
  const db = getAdminFirestore();
  const now = FieldValue.serverTimestamp();
  let count = 0;

  for (let i = 0; i < coursesFr.length; i++) {
    const fr = coursesFr[i];
    const en = coursesEn.find((c) => c.id === fr.id)!;
    const ar = coursesAr.find((c) => c.id === fr.id)!;
    const courseRef = db.collection("courses").doc(fr.id);

    const doc: FirestoreCourseDoc = {
      categoryId: fr.category,
      level: fr.level,
      slugs: { fr: fr.slug, en: en.slug, ar: ar.slug },
      locales: {
        fr: courseToLocaleContent(fr),
        en: courseToLocaleContent(en),
        ar: courseToLocaleContent(ar),
      },
      imageVariant: fr.imageVariant,
      featured: i < 3,
      published: true,
      sortOrder: i + 1,
    };

    await courseRef.set({ ...doc, createdAt: now, updatedAt: now }, { merge: true });

    const batch = db.batch();
    fr.sessions.forEach((session, idx) => {
      const sessionRef = courseRef.collection("sessions").doc(`session-${idx + 1}`);
      const sessionDoc: FirestoreSessionDoc = {
        startDate: session.startDate,
        endDate: session.endDate,
        format: session.format,
        spotsTotal: (session.spotsLeft ?? 10) + 2,
        spotsLeft: session.spotsLeft ?? 10,
        published: true,
      };
      batch.set(sessionRef, { ...sessionDoc, createdAt: now, updatedAt: now }, { merge: true });
    });
    await batch.commit();
    count++;
  }

  await db.collection("settings").doc("featureFlags").set(
    { cmsFromFirestore: true, updatedAt: now },
    { merge: true },
  );

  return count;
}

export async function listCoursesAdmin(): Promise<ReturnType<typeof toAdminCourseRow>[]> {
  const snap = await getAdminFirestore().collection("courses").orderBy("sortOrder", "asc").get();
  const rows = await Promise.all(
    snap.docs.map(async (doc) => {
      const sessions = await getSessions(doc.id);
      return toAdminCourseRow(doc.id, docToCourse(doc.id, doc.data()), sessions.length);
    }),
  );
  return rows;
}

export async function getCourseAdmin(courseId: string) {
  const db = getAdminFirestore();
  const doc = await db.collection("courses").doc(courseId).get();
  if (!doc.exists) return null;
  const data = doc.data();
  if (!data) return null;
  const sessionsSnap = await db
    .collection("courses")
    .doc(courseId)
    .collection("sessions")
    .orderBy("startDate", "asc")
    .get();
  return {
    id: doc.id,
    ...docToCourse(doc.id, data),
    sessions: sessionsSnap.docs.map((s) => ({ id: s.id, ...(s.data() as FirestoreSessionDoc) })),
  };
}

export async function saveCourseAdmin(
  courseId: string | null,
  payload: FirestoreCourseDoc,
  sessions: Array<FirestoreSessionDoc & { id?: string }>,
): Promise<string> {
  const db = getAdminFirestore();
  const now = FieldValue.serverTimestamp();
  const ref = courseId ? db.collection("courses").doc(courseId) : db.collection("courses").doc();
  const existing = courseId ? await ref.get() : null;
  await ref.set(
    {
      ...payload,
      updatedAt: now,
      createdAt: existing?.exists ? existing.data()?.createdAt ?? now : now,
    },
    { merge: true },
  );

  const existingSessions = await ref.collection("sessions").get();
  const batch = db.batch();
  existingSessions.docs.forEach((d) => batch.delete(d.ref));

  sessions.forEach((session, idx) => {
    const sid = session.id || `session-${idx + 1}`;
    const { id: _id, ...data } = session;
    batch.set(ref.collection("sessions").doc(sid), {
      ...data,
      updatedAt: now,
      createdAt: now,
    });
  });
  await batch.commit();
  return ref.id;
}

export async function getPublishedCourses(locale: Locale): Promise<Course[]> {
  const cms = await isCoursesCmsEnabled();
  if (!cms) return [];

  const snap = await getAdminFirestore()
    .collection("courses")
    .where("published", "==", true)
    .orderBy("sortOrder", "asc")
    .get();

  const courses: Course[] = [];
  for (const doc of snap.docs) {
    const data = docToCourse(doc.id, doc.data());
    const localeStatus = data.locales[locale]?.status;
    if (localeStatus && localeStatus !== "published") continue;
    const sessions = await getSessions(doc.id, true);
    const mapped = firestoreToCourse(doc.id, data, locale, sessions);
    if (mapped) courses.push(mapped);
  }
  return courses;
}

export async function getPublishedCourseBySlug(locale: Locale, slug: string): Promise<Course | undefined> {
  const courses = await getPublishedCourses(locale);
  return courses.find((c) => c.slug === slug);
}

export async function getPublishedCourseSlugs(locale: Locale): Promise<string[]> {
  const courses = await getPublishedCourses(locale);
  return courses.map((c) => c.slug);
}
