import { revalidatePath } from "next/cache";
import type { Locale } from "@/lib/i18n/config";
import type { FirestoreCourseDoc } from "@/lib/firestore/courses-types";
import { getCourseUrl, getTrainingHubUrl } from "@/lib/training/paths";

const locales: Locale[] = ["fr", "en", "ar"];

function revalidateLocalePaths() {
  for (const locale of locales) {
    revalidatePath(`/${locale}`, "layout");
    revalidatePath(`/${locale}`, "page");
    revalidatePath(`/${locale}/training`, "page");
    revalidatePath(`/${locale}/contact`, "page");
    revalidatePath(getTrainingHubUrl(locale), "page");
  }
}

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
    revalidatePath(getTrainingHubUrl(locale), "page");
  }
}

export function revalidateCoursePages(course: FirestoreCourseDoc) {
  for (const locale of locales) {
    const slug = course.slugs?.[locale];
    if (slug) {
      revalidatePath(`/${locale}/training/${slug}`, "page");
      revalidatePath(getCourseUrl(locale, slug), "page");
    }
    revalidatePath(`/${locale}/training`, "page");
    revalidatePath(getTrainingHubUrl(locale), "page");
    revalidatePath(`/${locale}`, "page");
  }
}

export function revalidatePublicContent() {
  revalidateLocalePaths();
}
