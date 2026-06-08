import type { Locale } from "@/lib/i18n/config";

export type ServiceContentId =
  | "service-network"
  | "service-security"
  | "service-voip"
  | "service-web"
  | "service-cloud"
  | "service-support"
  | "service-cctv";

export type CourseContentId =
  | "course-networking"
  | "course-linux"
  | "course-security"
  | "course-cloud"
  | "course-sap"
  | "course-microsoft"
  | "course-corporate";

export const serviceSlugs: Record<ServiceContentId, Record<Locale, string>> = {
  "service-network": {
    fr: "infrastructure-reseau",
    en: "network-infrastructure",
    ar: "network-infrastructure",
  },
  "service-security": {
    fr: "cybersecurite",
    en: "cybersecurity",
    ar: "cybersecurity",
  },
  "service-voip": {
    fr: "voip-telephonie-ip",
    en: "voip-ip-telephony",
    ar: "voip-ip-telephony",
  },
  "service-web": {
    fr: "developpement-web",
    en: "web-development",
    ar: "web-development",
  },
  "service-cloud": {
    fr: "solutions-cloud",
    en: "cloud-solutions",
    ar: "cloud-solutions",
  },
  "service-support": {
    fr: "support-maintenance-it",
    en: "it-support-maintenance",
    ar: "it-support-maintenance",
  },
  "service-cctv": {
    fr: "videosurveillance-controle-acces",
    en: "cctv-access-control",
    ar: "cctv-access-control",
  },
};

export const courseSlugs: Record<CourseContentId, Record<Locale, string>> = {
  "course-networking": {
    fr: "formation-reseaux",
    en: "networking-training",
    ar: "networking-training",
  },
  "course-linux": {
    fr: "formation-linux",
    en: "linux-training",
    ar: "linux-training",
  },
  "course-security": {
    fr: "formation-cybersecurite",
    en: "cybersecurity-training",
    ar: "cybersecurity-training",
  },
  "course-cloud": {
    fr: "formation-cloud",
    en: "cloud-computing",
    ar: "cloud-computing",
  },
  "course-sap": {
    fr: "formation-sap",
    en: "sap-training",
    ar: "sap-training",
  },
  "course-microsoft": {
    fr: "technologies-microsoft",
    en: "microsoft-technologies",
    ar: "microsoft-technologies",
  },
  "course-corporate": {
    fr: "formation-entreprise",
    en: "corporate-training",
    ar: "corporate-training",
  },
};

export function resolveServiceContentId(
  locale: Locale,
  slug: string,
): ServiceContentId | null {
  return (
    (Object.entries(serviceSlugs) as [ServiceContentId, Record<Locale, string>][])
      .find(([, slugs]) => slugs[locale] === slug)?.[0] ?? null
  );
}

export function getServiceSlug(contentId: ServiceContentId, locale: Locale): string {
  return serviceSlugs[contentId][locale];
}

export function resolveCourseContentId(
  locale: Locale,
  slug: string,
): CourseContentId | null {
  return (
    (Object.entries(courseSlugs) as [CourseContentId, Record<Locale, string>][])
      .find(([, slugs]) => slugs[locale] === slug)?.[0] ?? null
  );
}

export function getCourseSlug(contentId: CourseContentId, locale: Locale): string {
  return courseSlugs[contentId][locale];
}
