import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuoteRequestForm } from "@/components/solutions/QuoteRequestForm";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServices, getServiceBySlug } from "@/lib/solutions/get-services";
import { getQuoteUrl } from "@/lib/solutions/paths";
import { getServiceSlug, resolveServiceContentId } from "@/i18n/content-registry";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type QuotePageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string }>;
};

export async function generateMetadata({ params }: QuotePageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const { quote } = getDictionary(locale).businessPages;

  return buildPageMetadata({
    locale,
    title: quote.metaTitle,
    description: quote.metaDescription,
    pathForLocale: getQuoteUrl,
  });
}

export default async function QuotePage({ params, searchParams }: QuotePageProps) {
  const { locale: localeParam } = await params;
  const { service: serviceSlug } = await searchParams;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const services = getServices(locale);

  let preselected = serviceSlug && services.some((service) => service.slug === serviceSlug)
    ? serviceSlug
    : undefined;

  if (serviceSlug && !preselected) {
    for (const loc of locales) {
      const contentId = resolveServiceContentId(loc, serviceSlug);
      if (contentId) {
        const localSlug = getServiceSlug(contentId, locale);
        if (getServiceBySlug(locale, localSlug)) {
          preselected = localSlug;
          break;
        }
      }
    }
  }

  const { businessPages, trainingPages } = dictionary;

  return (
    <>
      <PageHero
        heading={businessPages.quote.heading}
        lead={businessPages.quote.lead}
        overline={businessPages.quote.overline}
      />
      <Section background="white">
        <Container className="max-w-3xl">
          <FadeIn>
            <QuoteRequestForm
              services={services}
              copy={businessPages}
              formsCopy={trainingPages.forms}
              locale={locale}
              preselectedServiceSlug={preselected}
            />
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
