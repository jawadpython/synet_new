import { isValidLocale, type Locale } from "@/lib/i18n/config";

const aboutSegment: Record<Locale, string> = {
  fr: "a-propos",
  en: "about",
  ar: "about",
};

const sectorsSegment: Record<Locale, string> = {
  fr: "secteurs",
  en: "sectors",
  ar: "sectors",
};

const caseStudiesSegment: Record<Locale, string> = {
  fr: "realisations",
  en: "case-studies",
  ar: "case-studies",
};

const resourcesSegment: Record<Locale, string> = {
  fr: "ressources",
  en: "resources",
  ar: "resources",
};

const legalSegments = {
  mentions: { fr: "mentions-legales", en: "legal-notice", ar: "legal-notice" },
  privacy: { fr: "politique-confidentialite", en: "privacy-policy", ar: "privacy-policy" },
  terms: { fr: "conditions-utilisation", en: "terms-of-use", ar: "terms-of-use" },
} as const;

export type LegalDoc = keyof typeof legalSegments;

export function getAboutUrl(locale: Locale): string {
  return `/${locale}/${aboutSegment[locale]}`;
}

export function getContactUrl(locale: Locale): string {
  return `/${locale}/contact`;
}

export function getSectorsHubUrl(locale: Locale): string {
  return `/${locale}/${sectorsSegment[locale]}`;
}

export function getSectorUrl(locale: Locale, slug: string): string {
  return `${getSectorsHubUrl(locale)}/${slug}`;
}

export function getCaseStudiesUrl(locale: Locale): string {
  return `/${locale}/${caseStudiesSegment[locale]}`;
}

export function getResourcesHubUrl(locale: Locale): string {
  return `/${locale}/${resourcesSegment[locale]}`;
}

export function getBlogUrl(locale: Locale): string {
  return `${getResourcesHubUrl(locale)}/blog`;
}

export function getFaqUrl(locale: Locale): string {
  return `${getResourcesHubUrl(locale)}/faq`;
}

export function getLegalUrl(locale: Locale, doc: LegalDoc): string {
  return `/${locale}/${legalSegments[doc][locale]}`;
}

export function getAboutPartnersUrl(locale: Locale): string {
  return `${getAboutUrl(locale)}/partners`;
}

export function getAboutCareersUrl(locale: Locale): string {
  return `${getAboutUrl(locale)}/careers`;
}

/** Maps public localized URLs to internal /site routes for middleware rewrite. */
export function resolveSiteRewrite(pathname: string): string | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length < 2) return null;

  const locale = segments[0];
  if (!isValidLocale(locale)) return null;

  const loc = locale as Locale;
  const second = segments[1];

  if (second === "contact") {
    return `/${locale}/contact`;
  }

  if (second === aboutSegment[loc]) {
    const rest = segments.slice(2);
    if (rest[0] === "partenaires-certifications" || rest[0] === "partners") {
      return `/${locale}/about/partners`;
    }
    if (rest[0] === "carrieres" || rest[0] === "careers") {
      return `/${locale}/about/careers`;
    }
    return `/${locale}/about`;
  }

  if (second === sectorsSegment[loc]) {
    const rest = segments.slice(2);
    return `/${locale}/sectors${rest.length ? `/${rest.join("/")}` : ""}`;
  }

  if (second === caseStudiesSegment[loc]) {
    return `/${locale}/case-studies`;
  }

  if (second === resourcesSegment[loc]) {
    const rest = segments.slice(2);
    if (rest[0] === "blog") return `/${locale}/resources/blog`;
    if (rest[0] === "faq") return `/${locale}/resources/faq`;
    return `/${locale}/resources`;
  }

  for (const [doc, paths] of Object.entries(legalSegments) as [LegalDoc, Record<Locale, string>][]) {
    if (second === paths[loc]) {
      return `/${locale}/legal/${doc}`;
    }
  }

  return null;
}
