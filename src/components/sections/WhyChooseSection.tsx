import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { Icon } from "@/components/ui/Icon";
import { getAboutUrl } from "@/lib/site/paths";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

type WhyChooseSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function WhyChooseSection({ locale, dictionary }: WhyChooseSectionProps) {
  const { whyChoose } = dictionary;
  const rtl = locale === "ar";
  const headingId = "why-choose-heading";

  return (
    <Section background="white" ariaLabelledby={headingId}>
      <FadeIn>
        <SectionHeader
          id={headingId}
          overline={whyChoose.overline}
          heading={whyChoose.heading}
          lead={whyChoose.lead}
        />
      </FadeIn>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {whyChoose.differentiators.map((item) => (
          <div key={item.title}>
            <Icon
              name={item.icon}
              className="h-8 w-8 text-blue-600"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="text-heading-sm mt-4 text-navy-800">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {whyChoose.technologiesNote && (
        <FadeIn className="mt-12">
          <p className="text-overline mb-3 text-center text-neutral-500">
            {whyChoose.partnersLabel}
          </p>
          <p className="text-center text-sm text-neutral-600">{whyChoose.technologiesNote}</p>
        </FadeIn>
      )}

      <FadeIn className="mt-8 flex justify-center">
        <ArrowLink href={getAboutUrl(locale)} rtl={rtl}>
          {whyChoose.learnMore}
        </ArrowLink>
      </FadeIn>
    </Section>
  );
}
