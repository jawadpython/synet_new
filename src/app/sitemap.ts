import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { getServices } from "@/lib/solutions/get-services";
import { getSolutionsHubUrl, getServiceUrl, getQuoteUrl } from "@/lib/solutions/paths";
import { getCourses } from "@/lib/training/get-courses";
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push(
      { url: locUrl(`/${locale}`), lastModified: now, changeFrequency: "weekly", priority: 1 },
      { url: locUrl(getSolutionsHubUrl(locale)), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
      { url: locUrl(getTrainingHubUrl(locale)), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
      { url: locUrl(getAboutUrl(locale)), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: locUrl(getAboutPartnersUrl(locale)), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: locUrl(getContactUrl(locale)), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: locUrl(getQuoteUrl(locale)), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: locUrl(getFaqUrl(locale)), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: locUrl(getSectorsHubUrl(locale)), lastModified: now, changeFrequency: "monthly", priority: 0.85 },
      { url: locUrl(getLegalUrl(locale, "mentions")), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
      { url: locUrl(getLegalUrl(locale, "privacy")), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
      { url: locUrl(getLegalUrl(locale, "terms")), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    );

    for (const id of sectorIds) {
      entries.push({
        url: locUrl(getSectorUrl(locale, getSectorSlug(id, locale))),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    for (const service of getServices(locale)) {
      entries.push({
        url: locUrl(getServiceUrl(locale, service.slug)),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
      });
    }

    for (const course of getCourses(locale)) {
      entries.push({
        url: locUrl(getCourseUrl(locale, course.slug)),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    }
  }

  return entries;
}
