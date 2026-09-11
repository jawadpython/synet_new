import type { Locale } from "@/lib/i18n/config";
import type { Course } from "@/lib/training/types";
import type { CourseLocaleContent, FirestoreCourseDoc, FirestoreSessionDoc } from "./courses-types";

export function courseToLocaleContent(course: Course): CourseLocaleContent {
  return {
    name: course.name,
    shortDescription: course.shortDescription,
    description: course.description,
    duration: course.duration,
    schedule: course.schedule,
    price: course.price,
    priceNote: course.priceNote ?? "",
    certification: course.certification ?? "",
    outcomes: course.outcomes,
    prerequisites: course.prerequisites,
    instructorName: course.instructor.name,
    instructorTitle: course.instructor.title,
    instructorBio: course.instructor.bio,
    metaTitle: "",
    metaDescription: "",
    status: "published",
  };
}

export function firestoreToCourse(
  id: string,
  doc: FirestoreCourseDoc,
  locale: Locale,
  sessions: FirestoreSessionDoc[],
): Course | null {
  const content = doc.locales[locale];
  const slug = doc.slugs[locale];
  if (!content?.name || !slug) return null;

  return {
    id,
    slug,
    category: doc.categoryId,
    name: content.name,
    shortDescription: content.shortDescription,
    description: content.description,
    duration: content.duration,
    level: doc.level,
    schedule: content.schedule,
    instructor: {
      name: content.instructorName,
      title: content.instructorTitle,
      bio: content.instructorBio,
    },
    price: content.price,
    priceNote: content.priceNote || undefined,
    certification: content.certification || undefined,
    outcomes: content.outcomes ?? [],
    prerequisites: content.prerequisites ?? [],
    sessions: sessions.map((s) => ({
      startDate: s.startDate,
      endDate: s.endDate,
      format: s.format,
      location: s.location || undefined,
      spotsLeft: s.spotsLeft,
    })),
    imageVariant: doc.imageVariant as Course["imageVariant"],
    metaTitle: content.metaTitle || undefined,
    metaDescription: content.metaDescription || undefined,
  };
}

export type AdminCourseRow = {
  id: string;
  nameFr: string;
  priceFr: string;
  categoryId: string;
  level: string;
  published: boolean;
  featured: boolean;
  sortOrder: number;
  sessionCount: number;
  localeStatus: Record<Locale, string>;
};

export function toAdminCourseRow(
  id: string,
  doc: FirestoreCourseDoc,
  sessionCount: number,
): AdminCourseRow {
  return {
    id,
    nameFr: doc.locales.fr?.name || doc.locales.en?.name || id,
    priceFr: doc.locales.fr?.price || doc.locales.en?.price || "",
    categoryId: doc.categoryId,
    level: doc.level,
    published: doc.published,
    featured: doc.featured,
    sortOrder: doc.sortOrder,
    sessionCount,
    localeStatus: {
      fr: doc.locales.fr?.status ?? "draft",
      en: doc.locales.en?.status ?? "draft",
      ar: doc.locales.ar?.status ?? "draft",
    },
  };
}
