"use client";

import type { CourseCategory } from "@/lib/training/types";
import type { TrainingPagesCopy } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

type CategoryNavProps = {
  categories: CourseCategory[];
  copy: TrainingPagesCopy;
  activeCategory?: CourseCategory | "all";
  onSelect: (category: CourseCategory | "all") => void;
};

export function CategoryNav({
  categories,
  copy,
  activeCategory = "all",
  onSelect,
}: CategoryNavProps) {
  const items: { value: CourseCategory | "all"; label: string }[] = [
    { value: "all", label: copy.catalog.allCategories },
    ...categories.map((cat) => ({
      value: cat,
      label: copy.categories[cat],
    })),
  ];

  return (
    <nav aria-label={copy.catalog.filterCategory}>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.value}>
            <button
              type="button"
              onClick={() => onSelect(item.value)}
              className={cn(
                "rounded-[2px] px-3 py-2 text-sm font-semibold transition-colors duration-150",
                activeCategory === item.value
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-100 text-neutral-700 hover:border-blue-600 hover:text-blue-600",
              )}
              aria-current={activeCategory === item.value ? "true" : undefined}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
