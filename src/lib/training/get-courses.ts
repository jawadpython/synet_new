import type { Locale } from "@/lib/i18n/config";
import { coursesAr } from "./courses/ar";
import { coursesEn } from "./courses/en";
import { coursesFr } from "./courses/fr";
import { applyCoursePricing } from "./pricing";
import type { Course, CourseCategory, CourseFilters, CourseLevel } from "./types";

const courseCatalog: Record<Locale, Course[]> = {
  fr: coursesFr,
  en: coursesEn,
  ar: coursesAr,
};

export function getCourses(locale: Locale): Course[] {
  return courseCatalog[locale].map(applyCoursePricing);
}

export function getCourseBySlug(locale: Locale, slug: string): Course | undefined {
  return getCourses(locale).find((course) => course.slug === slug);
}

export function getCoursesByCategories(locale: Locale, categories: CourseCategory[]): Course[] {
  if (categories.length === 0) return [];
  return getCourses(locale).filter((course) => categories.includes(course.category));
}

export function getCourseSlugs(locale: Locale): string[] {
  return getCourses(locale).map((course) => course.slug);
}

export function getCategories(locale: Locale): CourseCategory[] {
  const courses = getCourses(locale);
  return [...new Set(courses.map((c) => c.category))];
}

function normalizeQuery(value: string): string {
  return value.trim().toLowerCase();
}

export function filterCourses(courses: Course[], filters: CourseFilters): Course[] {
  let result = [...courses];

  if (filters.query) {
    const q = normalizeQuery(filters.query);
    result = result.filter(
      (course) =>
        course.name.toLowerCase().includes(q) ||
        course.shortDescription.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.instructor.name.toLowerCase().includes(q),
    );
  }

  if (filters.category && filters.category !== "all") {
    result = result.filter((course) => course.category === filters.category);
  }

  if (filters.level && filters.level !== "all") {
    result = result.filter(
      (course) => course.level === filters.level || course.level === "all-levels",
    );
  }

  return result;
}

export function getLevelsInCatalog(courses: Course[]): CourseLevel[] {
  const levels = new Set<CourseLevel>();
  courses.forEach((c) => levels.add(c.level));
  return [...levels];
}
