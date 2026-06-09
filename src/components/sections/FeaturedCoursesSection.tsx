import { Calendar } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { getEnrollUrl, getTrainingHubUrl } from "@/lib/training/paths";
import type { FeaturedCourseCard } from "@/lib/training/get-courses-server";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

type FeaturedCoursesSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
  courses?: FeaturedCourseCard[];
};

const thumbnailAccents: Record<FeaturedCourseCard["imageVariant"], string> = {
  network: "border-s-blue-600",
  security: "border-s-navy-800",
  linux: "border-s-navy-700",
  cloud: "border-s-blue-500",
  sap: "border-s-navy-700",
  microsoft: "border-s-blue-600",
  corporate: "border-s-navy-800",
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
    <Section background="white" ariaLabelledby={headingId}>
      <FadeIn>
        <SectionHeader
          id={headingId}
          overline={featuredCourses.overline}
          heading={featuredCourses.heading}
          lead={featuredCourses.lead}
        />
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courseCards.map((course) => (
            <article key={course.slug} className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-neutral-200 bg-white transition-colors duration-150 hover:border-blue-600">
              <div
                className={cn(
                  "aspect-video border-b border-neutral-200 bg-neutral-100 border-s-4",
                  thumbnailAccents[course.imageVariant],
                )}
                aria-hidden="true"
              />
              <div className="flex flex-1 flex-col p-6">
                <Badge className="mb-3 w-fit">{course.tag}</Badge>
                <h3 className="text-heading-sm text-navy-800">{course.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{course.meta}</p>
                <p className="mt-4 flex items-center gap-2 text-sm text-neutral-700">
                  <Calendar className="h-4 w-4 shrink-0 text-neutral-500" aria-hidden="true" />
                  {course.nextSession}
                </p>
                <div className="mt-auto pt-6">
                  <ArrowLink
                    href={getEnrollUrl(locale, course.slug)}
                    rtl={rtl}
                  >
                    {featuredCourses.enroll}
                  </ArrowLink>
                </div>
              </div>
            </article>
        ))}
      </div>

      <FadeIn className="mt-8 flex justify-center">
        <ArrowLink
          href={`${getTrainingHubUrl(locale)}#catalog`}
          rtl={rtl}
        >
          {featuredCourses.viewCalendar}
        </ArrowLink>
      </FadeIn>
    </Section>
  );
}
