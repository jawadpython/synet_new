import { Calendar, Clock, GraduationCap } from "lucide-react";
import type { Course } from "@/lib/training/types";
import type { Locale } from "@/lib/i18n/config";
import type { TrainingPagesCopy } from "@/lib/i18n/types";
import { formatDateRange } from "@/lib/training/format";
import { getCourseUrl, getEnrollUrl } from "@/lib/training/paths";
import { Button } from "@/components/ui/Button";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { CourseThumbnail } from "./CourseThumbnail";

type CourseCardProps = {
  course: Course;
  locale: Locale;
  copy: TrainingPagesCopy;
};

export function CourseCard({ course, locale, copy }: CourseCardProps) {
  const nextSession = course.sessions[0];
  const rtl = locale === "ar";

  return (
    <article className="group flex h-full flex-col border-b border-neutral-200 pb-8 md:border md:border-neutral-200 md:bg-white md:pb-0">
      <div className="relative overflow-hidden">
        <CourseThumbnail
          variant={course.imageVariant}
          className="aspect-[16/10] w-full"
        />
      </div>
      <div className="flex flex-1 flex-col pt-5 md:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">
          {copy.categories[course.category]}
        </p>
        <h3 className="mt-2 font-heading text-xl font-medium text-navy-800">{course.name}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-500">
          {course.shortDescription}
        </p>

        <dl className="mt-5 space-y-2 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            <dt className="sr-only">{copy.card.duration}</dt>
            <dd>{course.duration}</dd>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            <dt className="sr-only">{copy.card.level}</dt>
            <dd>{copy.levels[course.level]}</dd>
          </div>
          {nextSession && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
              <dt className="sr-only">{copy.card.nextSession}</dt>
              <dd>
                {formatDateRange(locale, nextSession.startDate, nextSession.endDate)}
                {nextSession.spotsLeft !== undefined && (
                  <span className="text-blue-600">
                    {" "}
                    · {nextSession.spotsLeft} {copy.card.spotsLeft}
                  </span>
                )}
              </dd>
            </div>
          )}
        </dl>

        <p className="mt-5 text-sm font-semibold text-navy-800">
          {copy.card.price}: {course.price}
        </p>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ArrowLink href={getCourseUrl(locale, course.slug)} rtl={rtl}>
            {copy.card.viewCourse}
          </ArrowLink>
          <Button href={getEnrollUrl(locale, course.slug)} variant="primary" size="sm">
            {copy.card.apply}
          </Button>
        </div>
      </div>
    </article>
  );
}
