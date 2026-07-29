import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { getQuoteUrl, getSolutionsHubUrl } from "@/lib/solutions/paths";
import { localizedPath } from "@/lib/i18n/paths";
import { EnvironmentPhoto } from "@/components/site/EnvironmentPhoto";
import { AudienceTile } from "@/components/ui/AudienceTile";
import { BulletList } from "@/components/ui/BulletList";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { StatBar } from "@/components/ui/StatBar";

type BusinessOverviewSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function BusinessOverviewSection({
  locale,
  dictionary,
}: BusinessOverviewSectionProps) {
  const { businessOverview } = dictionary;
  const headingId = "business-overview-heading";

  return (
    <Section id={businessOverview.id} background="white" ariaLabelledby={headingId}>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <FadeIn className="lg:col-span-5">
          <p className="text-overline">{businessOverview.overline}</p>
          <h2 id={headingId} className="text-heading-xl mt-3 text-navy-800">
            {businessOverview.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500 md:text-lg">
            {businessOverview.lead}
          </p>
          <div className="mt-8">
            <BulletList items={businessOverview.bullets} />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={getQuoteUrl(locale)} variant="primary">
              {businessOverview.requestQuote}
            </Button>
            <Button href={getSolutionsHubUrl(locale)} variant="outline-blue">
              {businessOverview.viewAllServices}
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={100} className="lg:col-span-7">
          <div className="grid gap-3 sm:grid-cols-5">
            <EnvironmentPhoto
              environment="serverRoom"
              aspectClassName="aspect-[3/4] sm:aspect-auto sm:min-h-[380px]"
              className="media-frame border-0 sm:col-span-3"
            />
            <div className="flex flex-col gap-3 sm:col-span-2">
              <EnvironmentPhoto
                environment="networkingLab"
                aspectClassName="aspect-[5/4] flex-1"
                className="media-frame min-h-[160px] border-0"
              />
              <EnvironmentPhoto
                environment="workspace"
                aspectClassName="aspect-[5/4] flex-1"
                className="media-frame min-h-[160px] border-0"
              />
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={120} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {businessOverview.audiences.map((tile) => (
          <AudienceTile
            key={tile.href}
            tile={tile}
            href={localizedPath(locale, tile.href)}
          />
        ))}
      </FadeIn>

      <FadeIn delay={150} className="mt-14 rounded-xl bg-neutral-100 px-4 py-8 md:px-8">
        <StatBar stats={businessOverview.stats} />
      </FadeIn>
    </Section>
  );
}
