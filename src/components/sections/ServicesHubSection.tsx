import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import type { Service } from "@/lib/solutions/types";
import type { SiteContactInfo } from "@/lib/site/contact-info";
import { toTelHref } from "@/lib/site/nap";
import { getQuoteUrl, getServiceUrl } from "@/lib/solutions/paths";
import { getContactUrl } from "@/lib/site/paths";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type ServicesHubSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
  services: Service[];
  contactInfo: SiteContactInfo;
};

export function ServicesHubSection({
  locale,
  dictionary,
  services,
  contactInfo,
}: ServicesHubSectionProps) {
  const { hub, cta } = dictionary.businessPages;
  const headingId = "services-hub-heading";
  const phoneHref = toTelHref(contactInfo.phone);

  return (
    <section className="bg-white py-14 md:py-20" aria-labelledby={headingId}>
      <Container>
        <header className="mb-10 max-w-2xl md:mb-14">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0B6BFF]">
            {hub.overline}
          </p>
          <h1
            id={headingId}
            className="mt-3 font-sans text-[1.85rem] font-bold leading-tight text-[#0A4DB5] md:text-[2.5rem]"
          >
            {hub.heading}
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#6B7C93] md:text-base">
            {hub.lead}
          </p>
        </header>

        <ul className="grid list-none grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
          {services.map((service, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <li key={service.id} className="group">
                <Link href={getServiceUrl(locale, service.slug)} className="block h-full">
                  <article className="flex h-full flex-col border-b border-[#D7E3F2] pb-8 transition-colors group-hover:border-[#0B6BFF]">
                    <div className="flex items-start gap-4">
                      <span
                        className="mt-1 font-sans text-[12px] font-bold tracking-wide text-[#0B6BFF]"
                        aria-hidden="true"
                      >
                        {number}
                      </span>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#EAF1FB] text-[#0B6BFF] transition-colors group-hover:bg-[#0B6BFF] group-hover:text-white">
                        <Icon name={service.icon} className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="font-sans text-xl font-bold leading-snug text-[#0A4DB5] transition-colors group-hover:text-[#0B6BFF]">
                          {service.name}
                        </h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-[#6B7C93]">
                          {service.shortDescription}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {service.benefits.slice(0, 3).map((benefit) => (
                            <li
                              key={benefit.title}
                              className="flex gap-2 text-sm leading-snug text-[#4A5B70]"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B6BFF]" aria-hidden="true" />
                              <span>
                                <span className="font-semibold text-[#0A4DB5]">{benefit.title}</span>
                                {" — "}
                                {benefit.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-[#D7E3F2] pt-10 md:mt-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-lg">
            <h2 className="font-sans text-xl font-bold text-[#0A4DB5]">{cta.heading}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[#6B7C93]">{cta.lead}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={getQuoteUrl(locale)} variant="primary">
              {cta.requestQuote}
            </Button>
            <a
              href={phoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#0B6BFF] px-7 text-[12px] font-bold uppercase tracking-wide text-[#0B6BFF] transition-colors hover:bg-[#0B6BFF] hover:text-white"
              dir="ltr"
            >
              {cta.contactUs} · {contactInfo.phone}
            </a>
            <Button href={getContactUrl(locale)} variant="ghost" size="sm">
              {dictionary.nav.contact}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
