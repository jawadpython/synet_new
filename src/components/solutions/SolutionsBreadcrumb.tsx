import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getSolutionsHubUrl } from "@/lib/solutions/paths";
import { cn } from "@/lib/utils";

type SolutionsBreadcrumbProps = {
  locale: Locale;
  hubLabel: string;
  current: string;
};

export function SolutionsBreadcrumb({ locale, hubLabel, current }: SolutionsBreadcrumbProps) {
  const rtl = locale === "ar";
  const Chevron = rtl ? ChevronLeft : ChevronRight;

  return (
    <nav aria-label="Breadcrumb" className={cn("bg-neutral-50 py-3")}>
      <ol className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-2 px-4 text-sm md:px-8">
        <li>
          <Link
            href={getSolutionsHubUrl(locale)}
            className="text-neutral-500 transition-colors duration-150 hover:text-blue-600"
          >
            {hubLabel}
          </Link>
        </li>
        <li aria-hidden="true">
          <Chevron className="h-4 w-4 text-neutral-400" />
        </li>
        <li>
          <span className="font-semibold text-neutral-700" aria-current="page">
            {current}
          </span>
        </li>
      </ol>
    </nav>
  );
}
