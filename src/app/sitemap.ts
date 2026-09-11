import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/lib/i18n/config";
import { getServiceById, getServices } from "@/lib/solutions/get-services";
import { getSolutionsHubUrl, getServiceUrl, getQuoteUrl } from "@/lib/solutions/paths";
import { getCourses } from "@/lib/training/get-courses";
import { getCoursesServer } from "@/lib/training/get-courses-server";
import { getTrainingHubUrl, getCourseUrl } from "@/lib/training/paths";
import {
  getAboutUrl,
  getAboutPartnersUrl,
  getContactUrl,
  getFaqUrl,
  getLegalUrl,
  getSectorsHubUrl,
  getSectorUrl,
} from "@/lib/site/paths";
import { getSectorSlug, sectorIds } from "@/lib/site/sectors";
import { siteUrl } from "@/lib/seo";

function locUrl(path: string): string {
  return `${siteUrl}${path}`;
}

function languageAlternates(pathForLocale: (locale: Locale) => string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = locUrl(pathForLocale(locale));
  }
  languages["x-default"] = locUrl(pathForLocale("fr"));
  return languages;
}

function localizedEntry(
  pathForLocale: (locale: Locale) => string,
  locale: Locale,
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>,
  priority: number,
  lastModified: Date,
): MetadataRoute.Sitemap[number] {
  return {
    url: locUrl(pathForLocale(locale)),
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: languageAlternates(pathForLocale),
    },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  const staticPages: {
    pathForLocale: (locale: Locale) => string;
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
    priority: number;
  }[] = [
    { pathForLocale: (locale) => `/${locale}`, changeFrequency: "weekly", priority: 1 },
    { pathForLocale: getSolutionsHubUrl, changeFrequency: "weekly", priority: 0.9 },
    { pathForLocale: getTrainingHubUrl, changeFrequency: "weekly", priority: 0.9 },
    { pathForLocale: getSectorsHubUrl, changeFrequency: "monthly", priority: 0.85 },
    { pathForLocale: getAboutUrl, changeFrequency: "monthly", priority: 0.8 },
    { pathForLocale: getContactUrl, changeFrequency: "monthly", priority: 0.8 },
    { pathForLocale: getQuoteUrl, changeFrequency: "monthly", priority: 0.8 },
    { pathForLocale: getAboutPartnersUrl, changeFrequency: "monthly", priority: 0.7 },
    { pathForLocale: getFaqUrl, changeFrequency: "monthly", priority: 0.7 },
    { pathForLocale: (locale) => getLegalUrl(locale, "mentions"), changeFrequency: "yearly", priority: 0.3 },
    { pathForLocale: (locale) => getLegalUrl(locale, "privacy"), changeFrequency: "yearly", priority: 0.3 },
    { pathForLocale: (locale) => getLegalUrl(locale, "terms"), changeFrequency: "yearly", priority: 0.3 },
  ];

  for (const page of staticPages) {
    for (const locale of locales) {
      entries.push(
        localizedEntry(page.pathForLocale, locale, page.changeFrequency, page.priority, now),
      );
    }
  }

  for (const id of sectorIds) {
    const pathForLocale = (locale: Locale) => getSectorUrl(locale, getSectorSlug(id, locale));
    for (const locale of locales) {
      entries.push(localizedEntry(pathForLocale, locale, "monthly", 0.8, now));
    }
  }

  for (const service of getServices("fr")) {
    const pathForLocale = (locale: Locale) => {
      const localized = getServiceById(locale, service.id);
      return getServiceUrl(locale, localized?.slug ?? service.slug);
    };
    for (const locale of locales) {
      entries.push(localizedEntry(pathForLocale, locale, "monthly", 0.85, now));
    }
  }

  const coursesByLocale: Record<Locale, Awaited<ReturnType<typeof getCoursesServer>>> = {
    fr: [],
    en: [],
    ar: [],
  };
  try {
    const [fr, en, ar] = await Promise.all([
      getCoursesServer("fr"),
      getCoursesServer("en"),
      getCoursesServer("ar"),
    ]);
    coursesByLocale.fr = fr;
    coursesByLocale.en = en;
    coursesByLocale.ar = ar;
  } catch {
    coursesByLocale.fr = getCourses("fr");
    coursesByLocale.en = getCourses("en");
    coursesByLocale.ar = getCourses("ar");
  }

  const courseIds = [...new Set(coursesByLocale.fr.map((course) => course.id))];
  for (const id of courseIds) {
    const pathForLocale = (locale: Locale) => {
      const localized = coursesByLocale[locale].find((item) => item.id === id);
      const fallback = coursesByLocale.fr.find((item) => item.id === id);
      return getCourseUrl(locale, localized?.slug ?? fallback?.slug ?? id);
    };
    for (const locale of locales) {
      if (!coursesByLocale[locale].some((item) => item.id === id)) continue;
      entries.push(localizedEntry(pathForLocale, locale, "weekly", 0.85, now));
    }
  }

  return entries;
}
