import { isValidLocale, type Locale } from "@/lib/i18n/config";

const solutionsBasePaths: Record<Locale, string> = {
  fr: "solutions-entreprise",
  en: "business-solutions",
  ar: "business-solutions",
};

const quotePaths: Record<Locale, string> = {
  fr: "demande-devis",
  en: "request-quote",
  ar: "request-quote",
};

export function getSolutionsBasePath(locale: Locale): string {
  return solutionsBasePaths[locale];
}

export function getQuotePath(locale: Locale): string {
  return quotePaths[locale];
}

export function getSolutionsHubUrl(locale: Locale): string {
  return `/${locale}/${getSolutionsBasePath(locale)}`;
}

export function getServiceUrl(locale: Locale, slug: string): string {
  return `${getSolutionsHubUrl(locale)}/${slug}`;
}

export function getQuoteUrl(locale: Locale, serviceSlug?: string): string {
  const base = `/${locale}/${getQuotePath(locale)}`;
  return serviceSlug ? `${base}?service=${serviceSlug}` : base;
}

export function resolveSolutionsRewrite(pathname: string): string | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length < 2) return null;

  const locale = segments[0];
  if (!isValidLocale(locale)) return null;

  const base = solutionsBasePaths[locale];
  const quote = quotePaths[locale];

  if (segments[1] === base) {
    const rest = segments.slice(2);
    return `/${locale}/solutions${rest.length ? `/${rest.join("/")}` : ""}`;
  }

  if (segments[1] === quote) {
    return `/${locale}/solutions/quote`;
  }

  return null;
}
