import { getLocaleContactFromFirestore } from "@/lib/firestore/globals-repository";
import type { Locale } from "@/lib/i18n/config";
import { mergeContactInfo, type SiteContactInfo } from "./contact-info";

export async function getContactInfoServer(
  locale: Locale,
  fallback: SiteContactInfo,
): Promise<SiteContactInfo> {
  try {
    const fromFirestore = await getLocaleContactFromFirestore(locale);
    return mergeContactInfo(fallback, fromFirestore);
  } catch {
    return fallback;
  }
}
