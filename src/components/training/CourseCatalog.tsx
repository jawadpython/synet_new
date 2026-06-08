"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Course, CourseCategory, CourseLevel } from "@/lib/training/types";
import type { Locale } from "@/lib/i18n/config";
import type { TrainingPagesCopy } from "@/lib/i18n/types";
import { filterCourses } from "@/lib/training/get-courses";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "./CourseCard";

type CourseCatalogProps = {
  courses: Course[];
  locale: Locale;
  copy: TrainingPagesCopy;
  categories: CourseCategory[];
  levels: CourseLevel[];
};

export function CourseCatalog({
  courses,
  locale,
  copy,
  categories,
  levels,
}: CourseCatalogProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CourseCategory | "all">("all");
  const [level, setLevel] = useState<CourseLevel | "all">("all");

  const filtered = useMemo(
    () => filterCourses(courses, { query, category, level }),
    [courses, query, category, level],
  );

  const hasActiveFilters = query !== "" || category !== "all" || level !== "all";

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setLevel("all");
  };

  return (
    <div>
      <div
        className="rounded-[4px] border border-neutral-200 bg-white p-6"
        role="search"
        aria-label={copy.catalog.searchLabel}
      >
        <div className="grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <label htmlFor="course-search" className="mb-1 block text-sm font-semibold text-neutral-900">
              {copy.catalog.searchLabel}
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
                aria-hidden="true"
              />
              <Input
                id="course-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={copy.catalog.searchPlaceholder}
                className="ps-10"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <label htmlFor="course-category" className="mb-1 block text-sm font-semibold text-neutral-900">
              {copy.catalog.filterCategory}
            </label>
            <Select
              id="course-category"
              value={category}
              onChange={(e) => setCategory(e.target.value as CourseCategory | "all")}
            >
              <option value="all">{copy.catalog.allCategories}</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {copy.categories[cat]}
                </option>
              ))}
            </Select>
          </div>

          <div className="md:col-span-3">
            <label htmlFor="course-level" className="mb-1 block text-sm font-semibold text-neutral-900">
              {copy.catalog.filterLevel}
            </label>
            <Select
              id="course-level"
              value={level}
              onChange={(e) => setLevel(e.target.value as CourseLevel | "all")}
            >
              <option value="all">{copy.catalog.allLevels}</option>
              {levels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {copy.levels[lvl]}
                </option>
              ))}
            </Select>
          </div>

          {hasActiveFilters && (
            <div className="md:col-span-1">
              <Button
                type="button"
                variant="tertiary"
                size="sm"
                onClick={clearFilters}
                aria-label={copy.catalog.clearFilters}
                className="w-full"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <p className="mt-6 text-sm text-neutral-700" aria-live="polite">
        <span className="font-semibold text-navy-800">{filtered.length}</span>{" "}
        {copy.catalog.resultsCount}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-[4px] border border-neutral-200 bg-neutral-50 p-12 text-center">
          <p className="text-neutral-700">{copy.catalog.noResults}</p>
          {hasActiveFilters && (
            <Button
              type="button"
              variant="secondary"
              className="mt-4"
              onClick={clearFilters}
            >
              {copy.catalog.clearFilters}
            </Button>
          )}
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} locale={locale} copy={copy} />
          ))}
        </div>
      )}
    </div>
  );
}
