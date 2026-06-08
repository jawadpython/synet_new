import type { Locale } from "@/lib/i18n/config";
import type { SitePagesCopy } from "./types";
import { siteFr } from "./copy/fr";
import { siteEn } from "./copy/en";
import { siteAr } from "./copy/ar";

const copies: Record<Locale, SitePagesCopy> = { fr: siteFr, en: siteEn, ar: siteAr };

export function getSiteCopy(locale: Locale): SitePagesCopy {
  return copies[locale];
}
