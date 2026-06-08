import type { Locale } from "@/lib/i18n/config";
import {
  courseSlugs,
  resolveCourseContentId,
  resolveServiceContentId,
  serviceSlugs,
} from "./content-registry";

const aboutSegment: Record<Locale, string> = { fr: "a-propos", en: "about", ar: "about" };
const solutionsSegment: Record<Locale, string> = {
  fr: "solutions-entreprise",
  en: "business-solutions",
  ar: "business-solutions",
};
const trainingSegment: Record<Locale, string> = {
  fr: "centre-formation",
  en: "training-center",
  ar: "training-center",
};
const quoteSegment: Record<Locale, string> = {
  fr: "demande-devis",
  en: "request-quote",
  ar: "request-quote",
};
const enrollSegment: Record<Locale, string> = {
  fr: "inscription-formation",
  en: "training-enrollment",
  ar: "training-enrollment",
};
const sectorsSegment: Record<Locale, string> = { fr: "secteurs", en: "sectors", ar: "sectors" };
const caseStudiesSegment: Record<Locale, string> = {
  fr: "realisations",
  en: "case-studies",
  ar: "case-studies",
};
const resourcesSegment: Record<Locale, string> = { fr: "ressources", en: "resources", ar: "resources" };

function detectLocale(pathname: string): Locale | null {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "fr" || seg === "en" || seg === "ar") return seg;
  return null;
}

export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const sourceLocale = detectLocale(pathname);
  if (!sourceLocale || segments.length === 0) return `/${targetLocale}`;

  const rest = segments.slice(1);
  const second = rest[0];

  if (rest.length === 0) return `/${targetLocale}`;

  if (second === "contact") return `/${targetLocale}/contact`;

  if (Object.values(aboutSegment).includes(second)) {
    if (rest[1] === "partenaires-certifications" || rest[1] === "partners") {
      return `/${targetLocale}/${aboutSegment[targetLocale]}/partners`;
    }
    if (rest[1] === "carrieres" || rest[1] === "careers") {
      return `/${targetLocale}/${aboutSegment[targetLocale]}/careers`;
    }
    return `/${targetLocale}/${aboutSegment[targetLocale]}`;
  }

  if (Object.values(solutionsSegment).includes(second)) {
    const slug = rest[1];
    if (!slug) return `/${targetLocale}/${solutionsSegment[targetLocale]}`;
    const contentId = resolveServiceContentId(sourceLocale, slug);
    if (!contentId) return `/${targetLocale}`;
    return `/${targetLocale}/${solutionsSegment[targetLocale]}/${serviceSlugs[contentId][targetLocale]}`;
  }

  if (Object.values(trainingSegment).includes(second)) {
    const slug = rest[1];
    if (!slug) return `/${targetLocale}/${trainingSegment[targetLocale]}`;
    const contentId = resolveCourseContentId(sourceLocale, slug);
    if (!contentId) return `/${targetLocale}`;
    return `/${targetLocale}/${trainingSegment[targetLocale]}/${courseSlugs[contentId][targetLocale]}`;
  }

  if (Object.values(quoteSegment).includes(second)) {
    const qs = pathname.includes("?") ? pathname.slice(pathname.indexOf("?")) : "";
    return `/${targetLocale}/${quoteSegment[targetLocale]}${qs}`;
  }

  if (Object.values(enrollSegment).includes(second)) {
    const qs = pathname.includes("?") ? pathname.slice(pathname.indexOf("?")) : "";
    return `/${targetLocale}/${enrollSegment[targetLocale]}${qs}`;
  }

  if (Object.values(sectorsSegment).includes(second)) {
    const slug = rest[1];
    return slug
      ? `/${targetLocale}/${sectorsSegment[targetLocale]}/${slug}`
      : `/${targetLocale}/${sectorsSegment[targetLocale]}`;
  }

  if (Object.values(caseStudiesSegment).includes(second)) {
    return `/${targetLocale}/${caseStudiesSegment[targetLocale]}`;
  }

  if (Object.values(resourcesSegment).includes(second)) {
    if (rest[1] === "blog") return `/${targetLocale}/${resourcesSegment[targetLocale]}/blog`;
    if (rest[1] === "faq") return `/${targetLocale}/${resourcesSegment[targetLocale]}/faq`;
    return `/${targetLocale}/${resourcesSegment[targetLocale]}`;
  }

  const legalFr = ["mentions-legales", "politique-confidentialite", "conditions-utilisation"];
  const legalEn = ["legal-notice", "privacy-policy", "terms-of-use"];
  const legalMap: Record<string, Record<Locale, string>> = {
    mentions: { fr: "mentions-legales", en: "legal-notice", ar: "legal-notice" },
    privacy: { fr: "politique-confidentialite", en: "privacy-policy", ar: "privacy-policy" },
    terms: { fr: "conditions-utilisation", en: "terms-of-use", ar: "terms-of-use" },
  };
  if (legalFr.includes(second) || legalEn.includes(second)) {
    const doc = (Object.entries(legalMap) as [keyof typeof legalMap, Record<Locale, string>][]).find(
      ([, paths]) => paths[sourceLocale] === second,
    )?.[0];
    if (doc) return `/${targetLocale}/${legalMap[doc][targetLocale]}`;
  }

  if (second === "contact") return `/${targetLocale}/contact`;

  return `/${targetLocale}`;
}
