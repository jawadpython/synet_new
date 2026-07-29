import { Building2, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { getQuoteUrl } from "@/lib/solutions/paths";
import { localizedPath } from "@/lib/i18n/paths";
import { EnvironmentPhoto } from "@/components/site/EnvironmentPhoto";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import type { SiteContactInfo } from "@/lib/site/contact-info";

type ContactCtaSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
  contactInfo?: SiteContactInfo;
};

export function ContactCtaSection({
  locale,
  dictionary,
  contactInfo,
}: ContactCtaSectionProps) {
  const { contactCta, footer, nav } = dictionary;
  const info = contactInfo ?? footer.contactInfo;
  const rtl = locale === "ar";
  const headingId = "contact-cta-heading";

  return (
    <Section background="mist" className="relative overflow-hidden" ariaLabelledby={headingId}>
      <div
        className="pointer-events-none absolute -end-10 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(5,105,255,0.12),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <FadeIn className="lg:col-span-7">
          <h2 id={headingId} className="text-heading-xl text-navy-800">
            {contactCta.heading}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg">
            {contactCta.lead}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="synet-card-static p-6">
              <Building2 className="h-7 w-7 text-blue-600" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-3 text-base font-semibold text-navy-800">
                {contactCta.businessTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {contactCta.businessBody}
              </p>
              <div className="mt-5">
                <Button href={getQuoteUrl(locale)} variant="primary" size="sm">
                  {contactCta.businessCta}
                </Button>
              </div>
            </div>
            <div className="synet-card-static p-6">
              <GraduationCap className="h-7 w-7 text-blue-600" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-3 text-base font-semibold text-navy-800">
                {contactCta.trainingTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {contactCta.trainingBody}
              </p>
              <div className="mt-5">
                <Button
                  href={localizedPath(locale, nav.paths.enroll)}
                  variant="outline-blue"
                  size="sm"
                >
                  {contactCta.trainingCta}
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100} className="lg:col-span-5">
          <div className="overflow-hidden rounded-xl bg-white shadow-card ring-1 ring-neutral-200">
            <EnvironmentPhoto
              environment="workspace"
              aspectClassName="aspect-[16/10]"
              className="rounded-none border-0"
            />
            <div className="space-y-3 p-6">
              <p className="flex items-start gap-2.5 text-sm text-neutral-500">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                {info.address}
              </p>
              <a
                href={`tel:${info.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm font-semibold text-navy-800 hover:text-blue-600"
                dir="ltr"
              >
                <Phone className="h-4 w-4 text-blue-600" aria-hidden="true" />
                {info.phone}
              </a>
              <a
                href={`mailto:${info.email}`}
                className="flex items-center gap-2.5 text-sm font-semibold text-navy-800 hover:text-blue-600"
                dir="ltr"
              >
                <Mail className="h-4 w-4 text-blue-600" aria-hidden="true" />
                {info.email}
              </a>
              <p className="text-xs text-neutral-500">{info.hours}</p>
              <p className="pt-2 text-sm text-neutral-500">{contactCta.orContact}</p>
              <ArrowLink href={localizedPath(locale, nav.paths.contact)} rtl={rtl}>
                {contactCta.contactLink}
              </ArrowLink>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
