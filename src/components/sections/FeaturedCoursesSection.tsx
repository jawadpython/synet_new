import { Calendar } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { getEnrollUrl, getTrainingHubUrl } from "@/lib/training/paths";
import type { FeaturedCourseCard } from "@/lib/training/get-courses-server";
import { CourseThumbnail } from "@/components/training/CourseThumbnail";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

type FeaturedCoursesSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
  courses?: FeaturedCourseCard[];
};

export function FeaturedCoursesSection({
  locale,
  dictionary,
  courses,
}: FeaturedCoursesSectionProps) {
  const { featuredCourses } = dictionary;
  const courseCards = courses ?? featuredCourses.courses;
  const rtl = locale === "ar";
  const headingId = "featured-courses-heading";

  return (
    <Section background="neutral-50" ariaLabelledby={headingId}>
      <FadeIn>
        <SectionHeader
          id={headingId}
          overline={featuredCourses.overline}
          heading={featuredCourses.heading}
          lead={featuredCourses.lead}
          action={
            <Button
              href={`${getTrainingHubUrl(locale)}#catalog`}
              variant="outline-blue"
              size="sm"
            >
              {featuredCourses.viewCalendar}
            </Button>
          }
        />
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courseCards.map((course, index) => (
          <FadeIn key={course.slug} delay={index * 70}>
            <article className="group flex h-full flex-col border border-neutral-200 bg-white">
              <div className="relative overflow-hidden">
                <CourseThumbnail
                  variant={course.imageVariant}
                  className="aspect-[16/11]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">
                  {course.tag}
                </p>
                <h3 className="mt-2 font-heading text-xl font-medium text-navy-800 transition-colors group-hover:text-blue-600">
                  {course.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{course.meta}</p>
                <p className="mt-5 flex items-center gap-2 rounded-md bg-neutral-50 px-3 py-2.5 text-sm text-navy-800">
                  <Calendar className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                  <span className="font-medium">{course.nextSession}</span>
                </p>
                <div className="mt-auto pt-6">
                  <Button
                    href={getEnrollUrl(locale, course.slug)}
                    variant="primary"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    {featuredCourses.enroll}
                    <span aria-hidden="true">{rtl ? "←" : "→"}</span>
                  </Button>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
