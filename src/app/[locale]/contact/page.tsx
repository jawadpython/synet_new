import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getContactInfoServer } from "@/lib/site/get-globals-server";
import { getContactUrl } from "@/lib/site/paths";
import { CASABLANCA_MAP_EMBED, toTelHref, toWhatsAppHref } from "@/lib/site/nap";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const copy = getSiteCopy(locale).contact;

  return buildPageMetadata({
    locale,
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: getDictionary(locale).metadata.keywords,
    pathForLocale: getContactUrl,
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const copy = getSiteCopy(locale);
  const contactInfo = await getContactInfoServer(locale, dictionary.footer.contactInfo);

  return (
    <>
      <PageHero heading={copy.contact.heading} lead={copy.contact.lead} overline={dictionary.nav.contact} />

      <Section background="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <FadeIn className="lg:col-span-7">
              <h2 className="text-heading-lg text-navy-800">{copy.contact.formHeading}</h2>
              <div className="mt-6">
                <ContactForm locale={locale} copy={copy.contact} formsCopy={copy.forms} />
              </div>
            </FadeIn>

            <FadeIn delay={80} className="lg:col-span-5">
              <aside className="synet-card-static p-7">
                <h2 className="text-heading-sm text-navy-800">{dictionary.footer.contact}</h2>
                <address className="mt-6 space-y-4 text-sm not-italic text-neutral-600">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                    {contactInfo.address}
                  </p>
                  <p>
                    <a
                      href={toTelHref(contactInfo.phone)}
                      className="flex items-center gap-3 font-semibold text-navy-800 hover:text-blue-600"
                      dir="ltr"
                    >
                      <Phone className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      {contactInfo.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={toWhatsAppHref(contactInfo.phone)}
                      className="flex items-center gap-3 font-semibold text-navy-800 hover:text-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      {copy.contact.whatsappCta}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center gap-3 font-semibold text-navy-800 hover:text-blue-600"
                      dir="ltr"
                    >
                      <Mail className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      {contactInfo.email}
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                    {contactInfo.hours}
                  </p>
                </address>
                <p className="mt-6 text-sm text-neutral-500">{copy.contact.responseTime}</p>
              </aside>

              <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-neutral-200">
                <iframe
                  title={copy.contact.mapHeading}
                  src={CASABLANCA_MAP_EMBED}
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="bg-white p-4">
                  <h3 className="text-sm font-semibold text-navy-800">{copy.contact.mapHeading}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500">{copy.contact.mapCaption}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
