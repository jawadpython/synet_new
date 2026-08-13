import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceFaq } from "@/components/solutions/ServiceFaq";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getFaqUrl } from "@/lib/site/paths";
import { buildPageMetadata, faqJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

type FaqPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: FaqPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const copy = getSiteCopy(locale).faq;

  return buildPageMetadata({
    locale,
    title: copy.metaTitle,
    description: copy.lead,
    pathForLocale: getFaqUrl,
  });
}

export default async function FaqPage({ params }: FaqPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const copy = getSiteCopy(locale);

  return (
    <>
      <JsonLd data={faqJsonLd(copy.faq.items)} />
      <PageHero heading={copy.faq.heading} lead={copy.faq.lead} overline={copy.faq.heading} />
      <Section background="white">
        <Container className="max-w-3xl">
          <ServiceFaq items={copy.faq.items} />
        </Container>
      </Section>
    </>
  );
}
