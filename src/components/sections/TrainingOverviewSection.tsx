import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { AudienceTile } from "@/components/ui/AudienceTile";
import { BulletList } from "@/components/ui/BulletList";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
  const rtl = locale === "ar";
  const headingId = "training-overview-heading";

  return (
    <Section
      id={trainingOverview.id}
      background="neutral-50"
      ariaLabelledby={headingId}
    >
      <FadeIn>
        <SectionHeader
          id={headingId}
          overline={trainingOverview.overline}
          heading={trainingOverview.heading}
          lead={trainingOverview.lead}
        />
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <FadeIn className="lg:col-span-7 lg:order-1">
          <div className="grid grid-cols-2 gap-3">
            {trainingOverview.audiences.map((tile) => (
              <AudienceTile
                key={tile.href}
                tile={tile}
                href={localizedPath(locale, tile.href)}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={100} className="lg:col-span-5 lg:order-2">
          <BulletList items={trainingOverview.bullets} />
          <div className="mt-8">
            <ArrowLink
              href={localizedPath(locale, navGroups.training.href ?? "/centre-formation")}
              rtl={rtl}
            >
              {trainingOverview.viewAllTraining}
            </ArrowLink>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={150} className="mt-10">
        <StatBar stats={trainingOverview.stats} background="white" />
        <div className="mt-8 flex justify-center">
          <Button
            href={localizedPath(locale, nav.paths.enroll)}
            variant="primary"
          >
            {trainingOverview.enroll}
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
