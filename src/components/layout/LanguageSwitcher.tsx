"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocalizedPath } from "@/i18n/switch-locale";
import { cn } from "@/lib/utils";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  dark?: boolean;
  light?: boolean;
};

export function LanguageSwitcher({
  currentLocale,
  dark = false,
  light = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      className="flex items-center gap-1 text-xs font-semibold"
      role="navigation"
      aria-label="Language selection"
    >
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center">
          {index > 0 && (
            <span
              className={cn(
                "mx-1",
                light ? "text-white/40" : dark ? "text-neutral-400" : "text-neutral-400",
              )}
              aria-hidden="true"
            >
              |
            </span>
          )}
          {locale === currentLocale ? (
            <span
              className={cn(
                light ? "text-white" : dark ? "text-navy-800" : "text-navy-800",
              )}
              aria-current="true"
            >
              {localeLabels[locale]}
            </span>
          ) : (
            <Link
              href={getLocalizedPath(pathname, locale)}
              hrefLang={locale}
              lang={locale}
              className={cn(
                "inline-flex min-h-8 min-w-8 items-center justify-center transition-colors duration-150 focus-visible:outline-offset-4",
                light
                  ? "text-white/70 hover:text-white"
                  : dark
                    ? "text-neutral-500 hover:text-navy-800"
                    : "text-neutral-500 hover:text-blue-600",
              )}
            >
              {localeLabels[locale]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
