import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuoteRequestForm } from "@/components/solutions/QuoteRequestForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServices } from "@/lib/solutions/get-services";
import { getQuotePath } from "@/lib/solutions/paths";

type QuotePageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string }>;
};

export async function generateMetadata({ params }: QuotePageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const { businessPages } = getDictionary(localeParam);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";
  return {
    title: businessPages.quote.metaTitle,
    description: businessPages.quote.metaDescription,
    alternates: {
      canonical: `${siteUrl}/${localeParam}/${getQuotePath(localeParam)}`,
    },
    robots: { index: true, follow: true },
  };
}

export default async function QuotePage({ params, searchParams }: QuotePageProps) {
  const { locale: localeParam } = await params;
  const { service: serviceSlug } = await searchParams;

  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { businessPages, trainingPages } = dictionary;
  const services = getServices(locale);

  return (
    <>
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <FadeIn>
            <p className="text-overline text-blue-600">{businessPages.quote.overline}</p>
            <h1 className="text-heading-xl mt-3 text-navy-800">{businessPages.quote.heading}</h1>
            <p className="mt-4 max-w-2xl text-lg text-neutral-700">{businessPages.quote.lead}</p>
          </FadeIn>
        </Container>
      </section>

      <Section background="white">
        <Container className="max-w-3xl">
          <FadeIn>
            <QuoteRequestForm
              services={services}
              copy={businessPages}
              formsCopy={trainingPages.forms}
              locale={locale}
              preselectedServiceSlug={serviceSlug}
            />
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
