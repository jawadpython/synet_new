import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { Icon } from "@/components/ui/Icon";
import { getQuoteUrl, getServiceUrl } from "@/lib/solutions/paths";
import type { EnvironmentKey } from "@/lib/site/environment-visuals";
import { EnvironmentPhoto } from "@/components/site/EnvironmentPhoto";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

type CoreServicesSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function environmentForServiceSlug(slug: string): EnvironmentKey {
  if (slug.includes("reseau") || slug.includes("network")) return "networkingLab";
  if (slug.includes("cyber") || slug.includes("secur")) return "securityOperations";
  if (slug.includes("cloud")) return "serverRoom";
  if (slug.includes("video") || slug.includes("cctv") || slug.includes("acces")) {
    return "securityOperations";
  }
  if (slug.includes("support") || slug.includes("maintenance")) return "serverRoom";
  if (slug.includes("voip") || slug.includes("telephonie") || slug.includes("web")) {
    return "workspace";
  }
  return "workspace";
}

export function CoreServicesSection({
  locale,
  dictionary,
}: CoreServicesSectionProps) {
  const { coreServices } = dictionary;
  const rtl = locale === "ar";
  const headingId = "core-services-heading";

  return (
    <Section background="white" ariaLabelledby={headingId}>
      <FadeIn>
        <SectionHeader
          id={headingId}
          overline={coreServices.overline}
          heading={coreServices.heading}
          lead={coreServices.lead}
          action={
            <Button href={getQuoteUrl(locale)} variant="outline-blue" size="sm">
              {coreServices.requestQuote}
            </Button>
          }
        />
      </FadeIn>

      <div className="grid gap-5 md:grid-cols-2">
        {coreServices.services.map((service, index) => {
          const environment = environmentForServiceSlug(service.slug);
          const isWide = index === 0;

          return (
            <FadeIn key={service.slug} delay={index * 50} className={isWide ? "md:col-span-2" : undefined}>
              <article
                className={
                  isWide
                    ? "group grid overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-neutral-200 md:grid-cols-2"
                    : "group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-neutral-200"
                }
              >
                <EnvironmentPhoto
                  environment={environment}
                  aspectClassName={isWide ? "aspect-[16/10] md:aspect-auto md:min-h-full" : "aspect-[16/10]"}
                  className="rounded-none border-0"
                />
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <Icon
                    name={service.icon}
                    className="h-7 w-7 text-blue-600"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-heading text-xl font-medium text-navy-800">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-500">
                    {service.description}
                  </p>
                  <div className="mt-6">
                    <ArrowLink href={getServiceUrl(locale, service.slug)} rtl={rtl}>
                      {coreServices.learnMore}
                    </ArrowLink>
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
