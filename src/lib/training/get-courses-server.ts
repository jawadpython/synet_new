import type { Locale } from "@/lib/i18n/config";
import {
  getPublishedCourseBySlug,
  getPublishedCourseSlugs,
  getPublishedCourses,
  isCoursesCmsEnabled,
} from "@/lib/firestore/courses-repository";
import type { Dictionary } from "@/lib/i18n/types";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getAdminFirestore } from "@/lib/firebase/admin";
import { firestoreToCourse } from "@/lib/firestore/courses-mapper";
import type { FirestoreCourseDoc } from "@/lib/firestore/courses-types";
import { formatDateRange } from "./format";
import type { Course, CourseCategory } from "./types";
import {
  filterCourses,
  getCourseBySlug,
  getCourseSlugs,
  getCourses,
  getLevelsInCatalog,
} from "./get-courses";

export type FeaturedCourseCard = {
  slug: string;
  tag: string;
  title: string;
  meta: string;
  nextSession: string;
  imageVariant: "network" | "security" | "linux" | "cloud" | "sap" | "microsoft" | "corporate";
};

export async function getCoursesServer(locale: Locale): Promise<Course[]> {
  try {
    const fromFirestore = await getPublishedCourses(locale);
    if (fromFirestore.length > 0) return fromFirestore;
  } catch (error) {
    console.warn("[courses] Firestore fallback to static:", error);
  }
  return getCourses(locale);
}

export async function getCourseBySlugServer(locale: Locale, slug: string): Promise<Course | undefined> {
  try {
    const fromFirestore = await getPublishedCourseBySlug(locale, slug);
    if (fromFirestore) return fromFirestore;
  } catch (error) {
    console.warn("[courses] Firestore slug fallback:", error);
  }
  return getCourseBySlug(locale, slug);
}

export async function getCourseSlugsServer(locale: Locale): Promise<string[]> {
  try {
    const slugs = await getPublishedCourseSlugs(locale);
    if (slugs.length > 0) return slugs;
  } catch {
    /* static fallback */
  }
  return getCourseSlugs(locale);
}

export async function getCategoriesServer(locale: Locale): Promise<CourseCategory[]> {
  const courses = await getCoursesServer(locale);
  return [...new Set(courses.map((c) => c.category))];
}

function courseToFeaturedCard(course: Course, locale: Locale, dictionary: Dictionary): FeaturedCourseCard {
  const categories = dictionary.trainingPages.categories;
  const levels = dictionary.trainingPages.levels;
  const session = course.sessions[0];
  const nextSession = session
    ? `${dictionary.trainingPages.card.nextSession} : ${formatDateRange(locale, session.startDate, session.endDate)}`
    : dictionary.featuredCourses.courses[0]?.nextSession ?? "";

  return {
    slug: course.slug,
    tag: (categories[course.category] ?? course.category).toUpperCase(),
    title: course.name,
    meta: `${course.duration} · ${levels[course.level] ?? course.level}`,
    nextSession,
    imageVariant: course.imageVariant,
  };
}

export async function getFeaturedCoursesServer(
  locale: Locale,
  limit = 3,
): Promise<FeaturedCourseCard[]> {
  const dictionary = getDictionary(locale);
  try {
    const cms = await isCoursesCmsEnabled();
    if (cms) {
      const snap = await getAdminFirestore()
        .collection("courses")
        .where("published", "==", true)
        .orderBy("sortOrder", "asc")
        .get();

      const featured: Course[] = [];
      for (const doc of snap.docs) {
        const data = doc.data() as FirestoreCourseDoc;
        if (!data.featured) continue;
        const sessionsSnap = await getAdminFirestore()
          .collection("courses")
          .doc(doc.id)
          .collection("sessions")
          .orderBy("startDate", "asc")
          .get();
        const sessions = sessionsSnap.docs
          .map((s) => s.data())
          .filter((s) => s.published !== false);
        const mapped = firestoreToCourse(doc.id, data, locale, sessions as never);
        if (mapped) featured.push(mapped);
        if (featured.length >= limit) break;
      }
      if (featured.length > 0) {
        return featured.map((course) => courseToFeaturedCard(course, locale, dictionary));
      }
    }
  } catch (error) {
    console.warn("[courses] featured fallback:", error);
  }

  const courses = await getCoursesServer(locale);
  const staticFeatured = dictionary.featuredCourses.courses;
  return staticFeatured.map((card) => {
    const live = courses.find((c) => c.slug === card.slug);
    if (!live) return card;
    return courseToFeaturedCard(live, locale, dictionary);
  });
}

export { filterCourses, getLevelsInCatalog };
