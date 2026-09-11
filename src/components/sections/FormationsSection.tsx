import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import type { Course } from "@/lib/training/types";
import { getHomepageFormationLinks } from "@/lib/training/homepage-formations";
import { getCourseUrl, getEnrollUrl, getTrainingHubUrl } from "@/lib/training/paths";
import { getCourseThumbnailVisual, getTrainingGalleryVisual } from "@/lib/site/training-visuals";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type FormationsSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
  courses?: Course[];
};

export function FormationsSection({ locale, dictionary, courses }: FormationsSectionProps) {
  const { trainingOverview, featuredCourses } = dictionary;
  const rtl = locale === "ar";
  const headingId = "formations-heading";

  const galleryItems =
    courses && courses.length > 0
      ? courses.map((course) => {
          const visual = getCourseThumbnailVisual(course.imageVariant);
          return {
            slug: course.slug,
            name: course.name,
            href: getCourseUrl(locale, course.slug),
            src: visual.src,
            alt: visual.alt,
            position: visual.position,
          };
        })
      : getHomepageFormationLinks(dictionary).map((item) => {
          const visual = getTrainingGalleryVisual(item.href);
          return {
            slug: item.slug,
            name: item.name,
            href: getCourseUrl(locale, item.slug),
            src: visual.src,
            alt: visual.alt,
            position: visual.position,
          };
        });

  return (
    <section
      id={trainingOverview.id}
      className="scroll-mt-28 bg-white py-16 md:scroll-mt-32 md:py-20"
      aria-labelledby={headingId}
    >
      <Container>
        <header className="mb-10 max-w-2xl md:mb-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0B6BFF]">
            {trainingOverview.overline}
          </p>
          <h2
            id={headingId}
            className="mt-3 font-sans text-[1.85rem] font-bold leading-tight text-[#0A4DB5] md:text-[2.35rem]"
          >
            {trainingOverview.heading}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6B7C93] md:text-base">
            {trainingOverview.lead}
          </p>
        </header>

        <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {galleryItems.map((item, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <li key={item.href} className="group">
                <Link href={item.href} className="block h-full">
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#D7E3F2]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${item.src}?v=11`}
                      alt={item.alt}
                      style={{ objectPosition: item.position ?? "center center" }}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                  <div className="flex items-start gap-3 border-b border-[#D7E3F2] py-4 transition-colors group-hover:border-[#0B6BFF]">
                    <span
                      className="mt-0.5 font-sans text-[12px] font-bold tracking-wide text-[#0B6BFF]"
                      aria-hidden="true"
                    >
                      {number}
                    </span>
                    <h3 className="font-sans text-[15px] font-bold leading-snug text-[#0A4DB5] transition-colors group-hover:text-[#0B6BFF] md:text-base">
                      {item.name}
                    </h3>
                  </div>
                </article>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex flex-wrap justify-start gap-3 md:mt-14">
          <Button
            href={getTrainingHubUrl(locale)}
            variant="outline-blue"
            size="lg"
            className="rounded-md px-8 text-[13px] font-bold"
          >
            {trainingOverview.viewAllTraining}
          </Button>
          <Button
            href={getEnrollUrl(locale)}
            variant="primary"
            size="lg"
            className="rounded-md bg-[#0A4DB5] px-8 text-[13px] font-bold hover:bg-[#083d91]"
          >
            {featuredCourses.enroll}
            <ArrowRight className={`h-4 w-4 ${rtl ? "rotate-180" : ""}`} aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
