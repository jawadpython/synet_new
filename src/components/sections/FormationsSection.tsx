import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { getTrainingGalleryVisual } from "@/lib/site/training-visuals";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type FormationsSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const courseIcons = ["network", "shield", "monitor", "cloud", "code", "graduation"] as const;

export function FormationsSection({ locale, dictionary }: FormationsSectionProps) {
  const { trainingOverview, featuredCourses, footer } = dictionary;
  const rtl = locale === "ar";
  const headingId = "formations-heading";

  const galleryItems = footer.trainingLinks
    .filter((item) => !item.href.includes("entreprise") && !item.href.includes("corporate"))
    .slice(0, 7);
  const gridItems = featuredCourses.courses.length >= 3
    ? [
        ...featuredCourses.courses.map((course) => ({
          title: course.title,
          description: course.meta,
          href: `/centre-formation/${course.slug}`,
          icon: course.imageVariant === "network"
            ? "network"
            : course.imageVariant === "security"
              ? "shield"
              : "monitor",
        })),
        ...trainingOverview.audiences.slice(0, 3).map((audience, index) => ({
          title: audience.label,
          description: trainingOverview.bullets[index] ?? trainingOverview.lead,
          href: audience.href,
          icon: audience.icon,
        })),
      ]
    : trainingOverview.audiences.map((audience, index) => ({
        title: audience.label,
        description: trainingOverview.bullets[index] ?? trainingOverview.lead,
        href: audience.href,
        icon: audience.icon,
      }));

  return (
    <section
      id={trainingOverview.id}
      className="scroll-mt-28 bg-white py-16 md:scroll-mt-32 md:py-20"
      aria-labelledby={headingId}
    >
      <Container>
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0B6BFF]">
            {trainingOverview.overline}
          </p>
          <h2
            id={headingId}
            className="mt-3 font-sans text-[1.85rem] font-bold leading-tight text-[#0A4DB5] md:text-[2.35rem]"
          >
            {trainingOverview.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6B7C93] md:text-base">
            {trainingOverview.lead}
          </p>
        </header>

        {/* Photo + caption below — aligned row, no overlay cards */}
        <div className="mb-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-7 lg:gap-x-3 md:mb-16">
          {galleryItems.map((item) => {
            const visual = getTrainingGalleryVisual(item.href);
            return (
              <div key={item.href} className="group flex flex-col">
                <div
                  className="relative w-full overflow-hidden bg-[#EEF2F7]"
                  style={{ aspectRatio: "3 / 4" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${visual.src}?v=8`}
                    alt={visual.alt}
                    style={{ objectPosition: visual.position ?? "center center" }}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <span className="mt-3 min-h-[2.75rem] text-center text-[13px] font-semibold leading-snug text-[#0A4DB5]">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
          {gridItems.slice(0, 6).map((item, index) => (
            <div key={`${item.href}-${item.title}`} className="flex gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF4FF] text-[#0B6BFF]">
                <Icon
                  name={(item.icon as (typeof courseIcons)[number]) || courseIcons[index % courseIcons.length]}
                  className="h-5 w-5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <span className="min-w-0">
                <span className="block font-sans text-[15px] font-bold text-[#0A4DB5] md:text-base">
                  {item.title}
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-[#5B6B7C]">
                  {item.description}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <Button
            href={`#${trainingOverview.id}`}
            variant="primary"
            size="lg"
            className="rounded-lg bg-[#0A4DB5] px-8 text-[13px] font-bold hover:bg-[#083d91]"
          >
            {featuredCourses.viewCalendar}
            <ArrowRight className={`h-4 w-4 ${rtl ? "rotate-180" : ""}`} aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
