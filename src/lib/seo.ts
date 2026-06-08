import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";

export function buildHomeMetadata(locale: Locale, dictionary: Dictionary): Metadata {
  const { metadata } = dictionary;
  const canonical = `${siteUrl}/${locale}`;

  const languages = Object.fromEntries(
    locales.map((loc) => [loc, `${siteUrl}/${loc}`]),
  );
  languages["x-default"] = `${siteUrl}/fr`;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: canonical,
      siteName: "SYNET",
      locale: locale === "fr" ? "fr_FR" : locale === "en" ? "en_US" : "ar_MA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
