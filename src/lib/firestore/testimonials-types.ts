import type { Locale } from "@/lib/i18n/config";

export type TestimonialLocaleContent = {
  quote: string;
  attribution: string;
  role: string;
  organization?: string;
};

export type FirestoreTestimonialDoc = {
  division: "business" | "training";
  locales: Partial<Record<Locale, TestimonialLocaleContent>>;
  featured: boolean;
  published: boolean;
  sortOrder: number;
};

export type PublicTestimonialItem = {
  id: string;
  quote: string;
  attribution: string;
  role: string;
  organization?: string;
  division: "business" | "training";
};
