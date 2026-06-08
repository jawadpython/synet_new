import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { Icon } from "@/components/ui/Icon";
import { getQuoteUrl, getServiceUrl } from "@/lib/solutions/paths";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

type CoreServicesSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function CoreServicesSection({
  locale,
  dictionary,
}: CoreServicesSectionProps) {
  const { coreServices } = dictionary;
  const rtl = locale === "ar";
  const headingId = "core-services-heading";

  return (
    <Section background="neutral-50" ariaLabelledby={headingId}>
      <FadeIn>
        <SectionHeader
          id={headingId}
          overline={coreServices.overline}
          heading={coreServices.heading}
          lead={coreServices.lead}
        />
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {coreServices.services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 50}>
              <article className="flex h-full flex-col rounded-[4px] border border-neutral-200 bg-white p-6 transition-colors duration-150 hover:border-blue-600">
                <Icon
                  name={service.icon}
                  className="h-8 w-8 text-blue-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="text-heading-sm mt-4 text-navy-800">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm text-neutral-700">
                  {service.description}
                </p>
                <div className="mt-4">
                  <ArrowLink
                    href={getServiceUrl(locale, service.slug)}
                    rtl={rtl}
                  >
                    {coreServices.learnMore}
                  </ArrowLink>
                </div>
              </article>
            </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-10 flex justify-center">
        <Button href={getQuoteUrl(locale)} variant="primary">
          {coreServices.requestQuote}
        </Button>
      </FadeIn>
    </Section>
  );
}
