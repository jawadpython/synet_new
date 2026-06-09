import type { Locale } from "@/lib/i18n/config";
import type { CourseCategory, CourseLevel } from "@/lib/training/types";

export type CourseLocaleContent = {
  name: string;
  shortDescription: string;
  description: string;
  duration: string;
  schedule: string;
  price: string;
  priceNote?: string;
  certification?: string;
  outcomes: string[];
  prerequisites: string[];
  instructorName: string;
  instructorTitle: string;
  instructorBio: string;
  metaTitle?: string;
  metaDescription?: string;
  status: "draft" | "review" | "published";
};

export type FirestoreCourseDoc = {
  categoryId: CourseCategory;
  level: CourseLevel;
  slugs: Record<Locale, string>;
  locales: Record<Locale, CourseLocaleContent>;
  imageVariant: string;
  featured: boolean;
  published: boolean;
  sortOrder: number;
};

export type FirestoreSessionDoc = {
  startDate: string;
  endDate: string;
  format: string;
  location?: string;
  spotsTotal: number;
  spotsLeft: number;
  published: boolean;
};

export const emptyLocaleContent = (): CourseLocaleContent => ({
  name: "",
  shortDescription: "",
  description: "",
  duration: "",
  schedule: "",
  price: "",
  outcomes: [],
  prerequisites: [],
  instructorName: "",
  instructorTitle: "",
  instructorBio: "",
  status: "draft",
});
