import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { getQuoteUrl, getSolutionsHubUrl } from "@/lib/solutions/paths";
import { localizedPath } from "@/lib/i18n/paths";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { AudienceTile } from "@/components/ui/AudienceTile";
import { BulletList } from "@/components/ui/BulletList";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
  const rtl = locale === "ar";
  const headingId = "business-overview-heading";

  return (
    <Section
      id={businessOverview.id}
      background="white"
      ariaLabelledby={headingId}
    >
      <FadeIn>
        <SectionHeader
          id={headingId}
          overline={businessOverview.overline}
          heading={businessOverview.heading}
          lead={businessOverview.lead}
        />
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <FadeIn className="lg:col-span-5">
          <BulletList items={businessOverview.bullets} />
          <div className="mt-8">
            <ArrowLink
              href={getSolutionsHubUrl(locale)}
              rtl={rtl}
            >
              {businessOverview.viewAllServices}
            </ArrowLink>
          </div>
        </FadeIn>

        <FadeIn delay={100} className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {businessOverview.audiences.map((tile) => (
              <AudienceTile
                key={tile.href}
                tile={tile}
                href={localizedPath(locale, tile.href)}
              />
            ))}
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={150} className="mt-10">
        <StatBar stats={businessOverview.stats} background="neutral-100" />
        <div className="mt-8 flex justify-center">
          <Button
            href={getQuoteUrl(locale)}
            variant="primary"
          >
            {businessOverview.requestQuote}
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
