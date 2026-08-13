import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type Crumb = {
  label: string;
  href?: string;
};

type SiteBreadcrumbProps = {
  locale: Locale;
  items: Crumb[];
};

export function SiteBreadcrumb({ locale, items }: SiteBreadcrumbProps) {
  const rtl = locale === "ar";
  const Chevron = rtl ? ChevronLeft : ChevronRight;

  return (
    <nav aria-label="Breadcrumb" className="bg-neutral-50 py-3">
      <ol className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-2 px-4 text-sm md:px-8">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 && (
                <Chevron className="h-4 w-4 text-neutral-400" aria-hidden="true" />
              )}
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="text-neutral-500 transition-colors duration-150 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(last ? "font-semibold text-neutral-700" : "text-neutral-500")}
                  aria-current={last ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
