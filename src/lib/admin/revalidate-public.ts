import { revalidatePath } from "next/cache";
import type { Locale } from "@/lib/i18n/config";
import type { FirestoreCourseDoc } from "@/lib/firestore/courses-types";

const locales: Locale[] = ["fr", "en", "ar"];

export function revalidateSiteLayouts() {
  for (const locale of locales) {
    revalidatePath(`/${locale}`, "layout");
  }
}

export function revalidateHomepages() {
  for (const locale of locales) {
    revalidatePath(`/${locale}`, "page");
  }
}

export function revalidateTrainingHubs() {
  for (const locale of locales) {
    revalidatePath(`/${locale}/training`, "page");
  }
}

export function revalidateCoursePages(course: FirestoreCourseDoc) {
  for (const locale of locales) {
    const slug = course.slugs?.[locale];
    if (slug) {
      revalidatePath(`/${locale}/training/${slug}`, "page");
    }
    revalidatePath(`/${locale}/training`, "page");
    revalidatePath(`/${locale}`, "page");
  }
}

export function revalidatePublicContent() {
  revalidateSiteLayouts();
  revalidateHomepages();
  revalidateTrainingHubs();
}
