"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocalizedPath } from "@/i18n/switch-locale";
import { cn } from "@/lib/utils";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  dark?: boolean;
};

export function LanguageSwitcher({
  currentLocale,
  dark = false,
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
              className={cn("mx-1.5", dark ? "text-navy-500" : "text-neutral-400")}
              aria-hidden="true"
            >
              |
            </span>
          )}
          {locale === currentLocale ? (
            <span
              className={cn(dark ? "text-white" : "text-navy-800")}
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
                "min-h-11 min-w-11 inline-flex items-center justify-center transition-colors duration-150 focus-visible:outline-offset-4",
                dark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-blue-600",
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
