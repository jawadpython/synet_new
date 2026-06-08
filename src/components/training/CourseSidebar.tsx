import { Calendar, Clock, GraduationCap, User } from "lucide-react";
import type { Course } from "@/lib/training/types";
import type { Locale } from "@/lib/i18n/config";
import type { TrainingPagesCopy } from "@/lib/i18n/types";
import { formatDateRange } from "@/lib/training/format";
import { getEnrollUrl } from "@/lib/training/paths";
import { localizedPath } from "@/lib/i18n/paths";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type CourseSidebarProps = {
  course: Course;
  locale: Locale;
  copy: TrainingPagesCopy;
  contactPath: string;
};

export function CourseSidebar({
  course,
  locale,
  copy,
  contactPath,
}: CourseSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-[4px] border border-neutral-200 bg-white p-6">
        <p className="text-overline text-blue-600">{copy.categories[course.category]}</p>
        <p className="mt-4 text-2xl font-semibold text-navy-800">{course.price}</p>
        {course.priceNote && (
          <p className="mt-1 text-sm text-neutral-500">{course.priceNote}</p>
        )}

        <dl className="mt-6 space-y-4 border-t border-neutral-200 pt-6 text-sm">
          <div className="flex gap-3">
            <Clock className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
            <div>
              <dt className="font-semibold text-navy-800">{copy.card.duration}</dt>
              <dd className="text-neutral-700">{course.duration}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <GraduationCap className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
            <div>
              <dt className="font-semibold text-navy-800">{copy.card.level}</dt>
              <dd className="text-neutral-700">{copy.levels[course.level]}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <Calendar className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
            <div>
              <dt className="font-semibold text-navy-800">{copy.detail.schedule}</dt>
              <dd className="text-neutral-700">{course.schedule}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <User className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
            <div>
              <dt className="font-semibold text-navy-800">{copy.detail.instructor}</dt>
              <dd className="text-neutral-700">{course.instructor.name}</dd>
              <dd className="text-neutral-500">{course.instructor.title}</dd>
            </div>
          </div>
        </dl>

        {course.certification && (
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <p className="text-sm font-semibold text-navy-800">{copy.detail.certification}</p>
            <Badge className="mt-2">{course.certification}</Badge>
          </div>
        )}

        {course.sessions.length > 0 && (
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <p className="text-sm font-semibold text-navy-800">{copy.detail.sessions}</p>
            <ul className="mt-3 space-y-2">
              {course.sessions.map((session) => (
                <li
                  key={`${session.startDate}-${session.endDate}`}
                  className="rounded-[2px] bg-neutral-50 p-3 text-sm text-neutral-700"
                >
                  {formatDateRange(locale, session.startDate, session.endDate)}
                  <span className="block text-neutral-500">{session.format}</span>
                  {session.spotsLeft !== undefined && (
                    <span className="mt-1 block text-blue-600">
                      {session.spotsLeft} {copy.card.spotsLeft}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3">
          <Button href={getEnrollUrl(locale, course.slug)} variant="primary" className="w-full">
            {copy.detail.applyNow}
          </Button>
          <Button
            href={localizedPath(locale, contactPath)}
            variant="secondary"
            className="w-full"
          >
            {copy.detail.askQuestion}
          </Button>
        </div>
      </div>
    </aside>
  );
}
