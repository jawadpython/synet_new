import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { Icon } from "@/components/ui/Icon";
import { getAboutUrl } from "@/lib/site/paths";
import { EnvironmentPhoto } from "@/components/site/EnvironmentPhoto";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

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
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-4">
          <p className="text-overline">{whyChoose.overline}</p>
          <h2 id={headingId} className="text-heading-xl mt-3 text-navy-800">
            {whyChoose.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500 md:text-lg">
            {whyChoose.lead}
          </p>
          <div className="mt-8">
            <ArrowLink href={getAboutUrl(locale)} rtl={rtl}>
              {whyChoose.learnMore}
            </ArrowLink>
          </div>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
          {whyChoose.differentiators.map((item, index) => (
            <FadeIn key={item.title} delay={index * 50}>
              <div className="flex gap-4 border-s-2 border-blue-600/30 ps-4">
                <Icon
                  name={item.icon}
                  className="mt-0.5 h-7 w-7 shrink-0 text-blue-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-semibold text-navy-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={100} className="mt-14 grid gap-3 sm:grid-cols-3">
        <EnvironmentPhoto
          environment="trainingLab"
          aspectClassName="aspect-[4/3]"
          className="media-frame border-0 sm:col-span-2"
        />
        <EnvironmentPhoto
          environment="networkingLab"
          aspectClassName="aspect-[4/3]"
          className="media-frame border-0"
        />
      </FadeIn>

      {whyChoose.technologiesNote && (
        <FadeIn className="mt-12 border-t border-neutral-200 pt-10">
          <p className="text-overline mb-3 text-center">{whyChoose.partnersLabel}</p>
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-neutral-500">
            {whyChoose.technologiesNote}
          </p>
        </FadeIn>
      )}
    </Section>
  );
}
