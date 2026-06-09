import { getAdminFirestore, isFirebaseConfigured } from "@/lib/firebase/admin";
import type { Locale } from "@/lib/i18n/config";
import type { SiteContactInfo } from "@/lib/site/contact-info";

export type GlobalsLocaleInfo = Partial<SiteContactInfo>;

export type GlobalsDoc = {
  siteName?: string;
  locales?: Partial<Record<Locale, GlobalsLocaleInfo>>;
};

export async function getGlobalsDoc(): Promise<GlobalsDoc | null> {
  if (!isFirebaseConfigured()) return null;
  try {
    const snap = await getAdminFirestore().collection("settings").doc("globals").get();
    if (!snap.exists) return null;
    return snap.data() as GlobalsDoc;
  } catch {
    return null;
  }
}

export async function getLocaleContactFromFirestore(locale: Locale): Promise<GlobalsLocaleInfo | null> {
  const globals = await getGlobalsDoc();
  return globals?.locales?.[locale] ?? null;
}
