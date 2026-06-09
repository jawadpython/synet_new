import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getContactInfoServer } from "@/lib/site/get-globals-server";
import { getContactUrl } from "@/lib/site/paths";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) return {};
  const copy = getSiteCopy(lp);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";
  return {
    title: copy.contact.metaTitle,
    description: copy.contact.metaDescription,
    alternates: { canonical: `${siteUrl}${getContactUrl(lp)}` },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) notFound();
  const locale = lp as Locale;
  const dictionary = getDictionary(locale);
  const site = getSiteCopy(locale);
  const contactInfo = await getContactInfoServer(locale, dictionary.footer.contactInfo);

  return (
    <>
      <PageHero heading={site.contact.heading} lead={site.contact.lead} dark />
      <Section background="neutral-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-heading-sm text-navy-800">{site.contact.formHeading}</h2>
              <address className="mt-6 space-y-4 text-sm not-italic text-neutral-700">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                  {contactInfo.address}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-blue-600" dir="ltr">
                    {contactInfo.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600" dir="ltr">
                    {contactInfo.email}
                  </a>
                </p>
                <p className="text-neutral-500">{contactInfo.hours}</p>
              </address>
            </div>
            <div className="lg:col-span-7">
              <ContactForm locale={locale} copy={site.contact} formsCopy={site.forms} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
