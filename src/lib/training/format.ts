import type { Locale } from "@/lib/i18n/config";

const localeMap: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
  ar: "ar-MA",
};

export function formatDateRange(
  locale: Locale,
  startDate: string,
  endDate: string,
): string {
  const formatter = new Intl.DateTimeFormat(localeMap[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return `${formatter.format(new Date(startDate))} – ${formatter.format(new Date(endDate))}`;
}

export function formatSessionLabel(
  locale: Locale,
  startDate: string,
  endDate: string,
  format: string,
): string {
  return `${formatDateRange(locale, startDate, endDate)} (${format})`;
}
