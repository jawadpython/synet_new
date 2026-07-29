import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { EnvironmentPhoto } from "@/components/site/EnvironmentPhoto";
import { AudienceTile } from "@/components/ui/AudienceTile";
import { BulletList } from "@/components/ui/BulletList";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { StatBar } from "@/components/ui/StatBar";

type TrainingOverviewSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function TrainingOverviewSection({
  locale,
  dictionary,
}: TrainingOverviewSectionProps) {
  const { trainingOverview, navGroups, nav } = dictionary;
  const headingId = "training-overview-heading";

  return (
    <Section
      id={trainingOverview.id}
      background="neutral-50"
      ariaLabelledby={headingId}
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <FadeIn className="order-2 lg:order-1 lg:col-span-7">
          <div className="relative">
            <EnvironmentPhoto
              environment="trainingLab"
              aspectClassName="aspect-[16/11]"
              className="media-frame border-0 shadow-card"
            />
            <div className="absolute -bottom-5 start-4 end-4 grid grid-cols-2 gap-2 sm:start-8 sm:end-auto sm:max-w-md md:-bottom-6">
              {trainingOverview.audiences.slice(0, 2).map((tile) => (
                <AudienceTile
                  key={tile.href}
                  tile={tile}
                  href={localizedPath(locale, tile.href)}
                />
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-2 sm:mt-14 md:grid-cols-4">
            {trainingOverview.audiences.slice(2).map((tile) => (
              <AudienceTile
                key={tile.href}
                tile={tile}
                href={localizedPath(locale, tile.href)}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={100} className="order-1 lg:order-2 lg:col-span-5">
          <p className="text-overline">{trainingOverview.overline}</p>
          <h2 id={headingId} className="text-heading-xl mt-3 text-navy-800">
            {trainingOverview.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500 md:text-lg">
            {trainingOverview.lead}
          </p>
          <div className="mt-8">
            <BulletList items={trainingOverview.bullets} />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={localizedPath(locale, nav.paths.enroll)} variant="primary">
              {trainingOverview.enroll}
            </Button>
            <Button
              href={localizedPath(locale, navGroups.training.href ?? "/centre-formation")}
              variant="outline-blue"
            >
              {trainingOverview.viewAllTraining}
            </Button>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={150} className="mt-16 rounded-xl border border-neutral-200 bg-white px-4 py-8 md:px-8">
        <StatBar stats={trainingOverview.stats} />
      </FadeIn>
    </Section>
  );
}
