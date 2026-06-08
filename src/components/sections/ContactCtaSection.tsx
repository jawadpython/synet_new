import { Building2, GraduationCap, Mail, Phone } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { getQuoteUrl } from "@/lib/solutions/paths";
import { localizedPath } from "@/lib/i18n/paths";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

type ContactCtaSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ContactCtaSection({
  locale,
  dictionary,
}: ContactCtaSectionProps) {
  const { contactCta, footer, nav } = dictionary;
  const rtl = locale === "ar";
  const headingId = "contact-cta-heading";

  return (
    <Section
      background="navy-800"
      className="py-16"
      ariaLabelledby={headingId}
    >
      <FadeIn>
        <div className="text-center">
          <h2 id={headingId} className="text-heading-xl text-white">
            {contactCta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200">
            {contactCta.lead}
          </p>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <FadeIn>
          <div className="rounded-[4px] border border-navy-600 bg-navy-700 p-8">
            <Building2
              className="h-8 w-8 text-white"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="text-heading-sm mt-4 text-white">
              {contactCta.businessTitle}
            </h3>
            <p className="mt-2 text-sm text-neutral-200">
              {contactCta.businessBody}
            </p>
            <div className="mt-6">
              <Button
                href={getQuoteUrl(locale)}
                variant="white"
                className="w-full sm:w-auto"
              >
                {contactCta.businessCta}
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="rounded-[4px] border border-navy-600 bg-navy-700 p-8">
            <GraduationCap
              className="h-8 w-8 text-white"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h3 className="text-heading-sm mt-4 text-white">
              {contactCta.trainingTitle}
            </h3>
            <p className="mt-2 text-sm text-neutral-200">
              {contactCta.trainingBody}
            </p>
            <div className="mt-6">
              <Button
                href={localizedPath(locale, nav.paths.enroll)}
                variant="outline-white"
                className="w-full sm:w-auto"
              >
                {contactCta.trainingCta}
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="mt-10 text-center">
        <p className="text-sm text-neutral-200">{contactCta.orContact}</p>
        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <a
            href={`tel:${footer.contactInfo.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-sm text-neutral-200 transition-colors duration-150 hover:text-white"
            dir="ltr"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {footer.contactInfo.phone}
          </a>
          <a
            href={`mailto:${footer.contactInfo.email}`}
            className="inline-flex items-center gap-2 text-sm text-neutral-200 transition-colors duration-150 hover:text-white"
            dir="ltr"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {footer.contactInfo.email}
          </a>
        </div>
        <div className="mt-4">
          <ArrowLink
            href={localizedPath(locale, nav.paths.contact)}
            rtl={rtl}
            className="text-neutral-200 hover:text-white"
          >
            {contactCta.contactLink}
          </ArrowLink>
        </div>
      </FadeIn>
    </Section>
  );
}
