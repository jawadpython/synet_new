import type { Locale } from "@/lib/i18n/config";
import type { SectorId } from "./types";
import type { CourseCategory } from "@/lib/training/types";

export const sectorIds: SectorId[] = [
  "sme",
  "schools",
  "clinics",
  "factories",
  "government",
];

export const sectorSlugs: Record<SectorId, Record<Locale, string>> = {
  sme: { fr: "pme", en: "smes", ar: "smes" },
  schools: { fr: "ecoles", en: "schools", ar: "schools" },
  clinics: { fr: "cliniques", en: "clinics", ar: "clinics" },
  factories: { fr: "usines", en: "factories", ar: "factories" },
  government: {
    fr: "organisations-gouvernementales",
    en: "government",
    ar: "government",
  },
};

export const sectorIcons: Record<SectorId, string> = {
  sme: "building",
  schools: "school",
  clinics: "hospital",
  factories: "factory",
  government: "landmark",
};

export const sectorServiceIds: Record<SectorId, string[]> = {
  sme: ["it-support", "cybersecurity", "network-infrastructure", "web-development"],
  schools: ["network-infrastructure", "cybersecurity", "cctv", "it-support"],
  clinics: ["network-infrastructure", "cybersecurity", "cctv", "it-support"],
  factories: ["network-infrastructure", "cctv", "cybersecurity", "it-support"],
  government: ["cybersecurity", "network-infrastructure", "cloud-solutions", "it-support"],
};

export const sectorCourseCategories: Record<SectorId, CourseCategory[]> = {
  sme: ["cybersecurity", "microsoft", "corporate"],
  schools: ["networking", "linux", "cybersecurity"],
  clinics: ["cybersecurity", "networking", "microsoft"],
  factories: ["networking", "cybersecurity", "linux"],
  government: ["cybersecurity", "cloud", "microsoft"],
};

export function getSectorSlug(id: SectorId, locale: Locale): string {
  return sectorSlugs[id][locale];
}

export function resolveSectorId(locale: Locale, slug: string): SectorId | null {
  return (
    (Object.entries(sectorSlugs) as [SectorId, Record<Locale, string>][]).find(
      ([, slugs]) => slugs[locale] === slug,
    )?.[0] ?? null
  );
}

export function getSectorSlugs(locale: Locale): string[] {
  return sectorIds.map((id) => getSectorSlug(id, locale));
}
