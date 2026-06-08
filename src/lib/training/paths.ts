import { isValidLocale, type Locale } from "@/lib/i18n/config";

const trainingBasePaths: Record<Locale, string> = {
  fr: "centre-formation",
  en: "training-center",
  ar: "training-center",
};

const enrollPaths: Record<Locale, string> = {
  fr: "inscription-formation",
  en: "training-enrollment",
  ar: "training-enrollment",
};

export function getTrainingBasePath(locale: Locale): string {
  return trainingBasePaths[locale];
}

export function getEnrollPath(locale: Locale): string {
  return enrollPaths[locale];
}

export function getTrainingHubUrl(locale: Locale): string {
  return `/${locale}/${getTrainingBasePath(locale)}`;
}

export function getCourseUrl(locale: Locale, slug: string): string {
  return `${getTrainingHubUrl(locale)}/${slug}`;
}

export function getEnrollUrl(locale: Locale, courseSlug?: string): string {
  const base = `/${locale}/${getEnrollPath(locale)}`;
  return courseSlug ? `${base}?course=${courseSlug}` : base;
}

/** Maps public localized URLs to internal /training routes for middleware rewrite. */
export function resolveTrainingRewrite(pathname: string): string | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length < 2) return null;

  const locale = segments[0];
  if (!isValidLocale(locale)) return null;

  const base = trainingBasePaths[locale];
  const enroll = enrollPaths[locale];

  if (segments[1] === base) {
    const rest = segments.slice(2);
    return `/${locale}/training${rest.length ? `/${rest.join("/")}` : ""}`;
  }

  if (segments[1] === enroll) {
    return `/${locale}/training/enroll`;
  }

  return null;
}
