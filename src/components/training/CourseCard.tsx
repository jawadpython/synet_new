import { Calendar, Clock, GraduationCap } from "lucide-react";
import type { Course } from "@/lib/training/types";
import type { Locale } from "@/lib/i18n/config";
import type { TrainingPagesCopy } from "@/lib/i18n/types";
import { formatDateRange } from "@/lib/training/format";
import { getCourseUrl, getEnrollUrl } from "@/lib/training/paths";
import { Badge } from "@/components/ui/Badge";
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
    <article className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-neutral-200 bg-white transition-colors duration-150 hover:border-blue-600">
      <CourseThumbnail variant={course.imageVariant} className="aspect-video w-full" />
      <div className="flex flex-1 flex-col p-6">
        <Badge className="mb-3 w-fit">{copy.categories[course.category]}</Badge>
        <h3 className="text-heading-sm text-navy-800">{course.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-700">
          {course.shortDescription}
        </p>

        <dl className="mt-4 space-y-2 text-sm text-neutral-700">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-neutral-500" aria-hidden="true" />
            <dt className="sr-only">{copy.card.duration}</dt>
            <dd>{course.duration}</dd>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 shrink-0 text-neutral-500" aria-hidden="true" />
            <dt className="sr-only">{copy.card.level}</dt>
            <dd>{copy.levels[course.level]}</dd>
          </div>
          {nextSession && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0 text-neutral-500" aria-hidden="true" />
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

        <p className="mt-4 text-sm font-semibold text-navy-800">
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
