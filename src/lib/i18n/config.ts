export const locales = ["fr", "en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  ar: "AR",
};

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  ar: "العربية",
};

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}
