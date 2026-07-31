import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import type { Course } from "./types";
import { getCourses } from "./get-courses";

export type HomepageFormationLink = {
  slug: string;
  name: string;
  href: string;
};

/** Same list as the homepage Formations gallery (excludes corporate). */
export function getHomepageFormationLinks(dictionary: Dictionary): HomepageFormationLink[] {
  return dictionary.footer.trainingLinks
    .filter((item) => !item.href.includes("entreprise") && !item.href.includes("corporate"))
    .slice(0, 7)
    .map((item) => {
      const slug = item.href.split("/").filter(Boolean).at(-1) ?? "";
      return { slug, name: item.label, href: item.href };
    })
    .filter((item) => Boolean(item.slug));
}

/**
 * Courses offered on the enrollment form: homepage formations only.
 * Uses catalog data when available; otherwise a lightweight stub from the nav label.
 */
export function getHomepageCoursesForEnrollment(
  locale: Locale,
  dictionary: Dictionary,
  catalogCourses?: Course[],
): Course[] {
  const links = getHomepageFormationLinks(dictionary);
  const catalog = catalogCourses ?? getCourses(locale);

  return links.map((link) => {
    const existing = catalog.find((course) => course.slug === link.slug);
    if (existing) return existing;

    return {
      id: link.slug,
      slug: link.slug,
      category: "corporate",
      name: link.name,
      shortDescription: "",
      description: "",
      duration: "",
      level: "all-levels",
      schedule: "",
      instructor: { name: "SYNET", title: "", bio: "" },
      price: "",
      outcomes: [],
      prerequisites: [],
      sessions: [],
      imageVariant: "corporate",
    };
  });
}
