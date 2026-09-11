import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { SiteContactInfo } from "@/lib/site/contact-info";
import {
  CASABLANCA_MAP_SEARCH,
  CITY,
  COUNTRY_CODE,
  COUNTRY_NAME,
  GEO,
  GEO_REGION,
  PHONE_E164,
  REGION,
  streetAddressForSchema,
} from "@/lib/site/nap";
import type { Course } from "@/lib/training/types";
import type { Service } from "@/lib/solutions/types";
import { normalizePriceTiers } from "@/lib/training/pricing";
import { getCourseThumbnailVisual } from "@/lib/site/training-visuals";

const CANONICAL_SITE_URL = "https://www.synet.ma";

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv && !fromEnv.includes(".vercel.app")) {
    return fromEnv;
  }
  return CANONICAL_SITE_URL;
}

export const siteUrl = resolveSiteUrl();

export function localeToOg(locale: Locale): string {
  return locale === "fr" ? "fr_FR" : locale === "en" ? "en_US" : "ar_MA";
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildLanguageAlternates(pathForLocale: (locale: Locale) => string) {
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = absoluteUrl(pathForLocale(loc));
  }
  languages["x-default"] = absoluteUrl(pathForLocale("fr"));
  return languages;
}

type PageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  pathForLocale: (locale: Locale) => string;
  keywords?: string[];
  index?: boolean;
  image?: string;
};

export function buildPageMetadata({
  locale,
  title,
  description,
  pathForLocale,
  keywords,
  index = true,
  image,
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(pathForLocale(locale));
  const languages = buildLanguageAlternates(pathForLocale);
  const ogImage = absoluteUrl(image || "/images/brand/logo-horizontal.png");

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "SYNET",
      locale: localeToOg(locale),
      type: "website",
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index,
      follow: true,
    },
    other: {
      "geo.region": GEO_REGION,
      "geo.placename": CITY,
      ICBM: `${GEO.latitude}, ${GEO.longitude}`,
    },
  };
}

export function buildHomeMetadata(locale: Locale, dictionary: Dictionary): Metadata {
  return buildPageMetadata({
    locale,
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    pathForLocale: (loc) => `/${loc}`,
    image: "/images/networking.webp",
  });
}

function schemaPostalAddress(contactInfo: SiteContactInfo) {
  const streetAddress = streetAddressForSchema(contactInfo.address);
  return {
    "@type": "PostalAddress",
    ...(streetAddress ? { streetAddress } : {}),
    addressLocality: CITY,
    addressRegion: REGION,
    addressCountry: COUNTRY_CODE,
  };
}

const areaServed = [
  { "@type": "City", name: CITY },
  { "@type": "AdministrativeArea", name: REGION },
  { "@type": "Country", name: COUNTRY_NAME },
];

export function organizationJsonLd(
  locale: Locale,
  dictionary: Dictionary,
  contactInfo: SiteContactInfo,
) {
  const telephone = PHONE_E164;
  const pageUrl = absoluteUrl(`/${locale}`);

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization", "ProfessionalService"],
    "@id": `${pageUrl}#localbusiness`,
    name: "SYNET",
    alternateName: "SYNET Casablanca",
    url: pageUrl,
    logo: absoluteUrl("/images/brand/logo-horizontal.png"),
    image: absoluteUrl("/images/brand/logo-horizontal.png"),
    description: dictionary.metadata.description,
    email: contactInfo.email,
    telephone,
    address: schemaPostalAddress(contactInfo),
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    hasMap: CASABLANCA_MAP_SEARCH,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
    areaServed,
    availableLanguage: ["French", "English", "Arabic"],
    knowsAbout: [
      "IT training Casablanca",
      "CCNA",
      "Linux",
      "Cybersecurity",
      "Cloud computing",
      "SAP",
      "Microsoft Windows Server",
      "Network infrastructure",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      areaServed: COUNTRY_CODE,
      availableLanguage: ["French", "English", "Arabic"],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(service: Service, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: absoluteUrl(url),
    provider: {
      "@type": "LocalBusiness",
      name: "SYNET",
      telephone: PHONE_E164,
      address: {
        "@type": "PostalAddress",
        addressLocality: CITY,
        addressRegion: REGION,
        addressCountry: COUNTRY_CODE,
      },
    },
    areaServed,
  };
}

function parsePriceAmount(price: string): string {
  const digits = price.replace(/[^\d]/g, "");
  return digits || "0";
}

export function courseListJsonLd(courses: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: course.name,
      url: absoluteUrl(course.url),
    })),
  };
}

export function courseJsonLd(course: Course, url: string, locale: Locale = "fr") {
  const tiers = normalizePriceTiers(course.priceTiers, course.category);
  const tierNames =
    locale === "ar"
      ? ["المستوى 1", "المستوى 2", "المستوى 3"]
      : locale === "en"
        ? ["Level 1", "Level 2", "Level 3"]
        : ["Niveau 1", "Niveau 2", "Niveau 3"];
  const place = {
    "@type": "Place",
    name: "SYNET Casablanca",
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY,
      addressRegion: REGION,
      addressCountry: COUNTRY_CODE,
    },
  };
  const sessions = course.sessions.length > 0 ? course.sessions : [{ startDate: "", endDate: "", format: "Présentiel" }];

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: absoluteUrl(url),
    inLanguage: locale,
    image: absoluteUrl(getCourseThumbnailVisual(course.imageVariant).src),
    contentLocation: {
      "@type": "City",
      name: CITY,
    },
    provider: {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      name: "SYNET",
      telephone: PHONE_E164,
      url: absoluteUrl("/fr"),
      address: {
        "@type": "PostalAddress",
        addressLocality: CITY,
        addressRegion: REGION,
        addressCountry: COUNTRY_CODE,
      },
      areaServed,
    },
    offers: tiers.map((tier, index) => ({
      "@type": "Offer",
      name: tierNames[index],
      price: parsePriceAmount(tier.price),
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(url),
    })),
    hasCourseInstance: sessions.slice(0, 3).map((session) => ({
      "@type": "CourseInstance",
      courseMode: "Onsite",
      inLanguage: locale,
      location: place,
      ...(session.startDate ? { startDate: session.startDate } : {}),
      ...(session.endDate ? { endDate: session.endDate } : {}),
    })),
  };
}
