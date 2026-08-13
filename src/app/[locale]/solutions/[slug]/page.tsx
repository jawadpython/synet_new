import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceBenefits } from "@/components/solutions/ServiceBenefits";
import { ServiceCard } from "@/components/solutions/ServiceCard";
import { ServiceCtaBand } from "@/components/solutions/ServiceCtaBand";
import { ServiceFaq } from "@/components/solutions/ServiceFaq";
import { ServiceProcess } from "@/components/solutions/ServiceProcess";
import { ServiceTechnologies } from "@/components/solutions/ServiceTechnologies";
import { ServiceVisual } from "@/components/solutions/ServiceVisual";
import { SolutionsBreadcrumb } from "@/components/solutions/SolutionsBreadcrumb";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { getServiceSlug, resolveServiceContentId } from "@/i18n/content-registry";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getContactUrl } from "@/lib/site/paths";
import { getServiceFaq } from "@/lib/solutions/faq";
import { getServiceBySlug, getServices, getServiceSlugs } from "@/lib/solutions/get-services";
import { getQuoteUrl, getServiceUrl, getSolutionsHubUrl } from "@/lib/solutions/paths";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

export const dynamic = "force-dynamic";

type ServicePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getServiceSlugs(locale).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const service = getServiceBySlug(locale, slug);
  if (!service) return {};

  const contentId = resolveServiceContentId(locale, slug);
  const location =
    locale === "fr" ? "à Casablanca, Maroc" : locale === "ar" ? "في الدار البيضاء، المغرب" : "in Casablanca, Morocco";

  return buildPageMetadata({
    locale,
    title: `${service.name} ${location} | SYNET`,
    description: `${service.shortDescription} ${
      locale === "fr"
        ? "Intervention sur site au Maroc. Devis sous 24 heures ouvrées."
        : locale === "ar"
          ? "تدخل ميداني في المغرب. عرض سعر خلال يوم عمل."
          : "On-site delivery in Morocco. Quote within one business day."
    }`,
    keywords: [service.name, ...service.technologies.slice(0, 6), "SYNET", "Casablanca"],
    pathForLocale: (loc) =>
      contentId ? getServiceUrl(loc, getServiceSlug(contentId, loc)) : getSolutionsHubUrl(loc),
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const service = getServiceBySlug(locale, slug);
  if (!service) notFound();

  const dictionary = getDictionary(locale);
  const { businessPages } = dictionary;
  const faqItems = getServiceFaq(service, locale);
  const serviceUrl = getServiceUrl(locale, service.slug);
  const related = getServices(locale)
    .filter((item) => item.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={serviceJsonLd(service, serviceUrl)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "SYNET", url: `/${locale}` },
          { name: businessPages.hub.heading, url: getSolutionsHubUrl(locale) },
          { name: service.name, url: serviceUrl },
        ])}
      />
      {faqItems.length > 0 && <JsonLd data={faqJsonLd(faqItems)} />}

      <SolutionsBreadcrumb
        locale={locale}
        hubLabel={businessPages.hub.heading}
        current={service.name}
      />

      <section className="border-b border-neutral-200 bg-white py-12 md:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <FadeIn className="lg:col-span-6">
              <p className="text-overline">{businessPages.hub.overline}</p>
              <h1 className="text-heading-xl mt-3 text-navy-800">{service.name}</h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg">
                {service.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={getQuoteUrl(locale, service.slug)} variant="primary">
                  {businessPages.cta.requestQuote}
                </Button>
                <Button href={getContactUrl(locale)} variant="outline-blue">
                  {businessPages.cta.contactUs}
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={80} className="lg:col-span-6">
              <div className="overflow-hidden rounded-xl border border-neutral-200">
                <ServiceVisual variant={service.imageVariant} className="aspect-[16/10]" />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <Section background="neutral-50">
        <ServiceBenefits service={service} copy={businessPages} />
      </Section>

      <Section background="white">
        <ServiceProcess service={service} copy={businessPages} />
      </Section>

      <Section background="neutral-50">
        <ServiceTechnologies service={service} copy={businessPages} />
      </Section>

      {faqItems.length > 0 && (
        <Section background="white">
          <ServiceFaq items={faqItems} heading={businessPages.detail.faq} />
        </Section>
      )}

      {related.length > 0 && (
        <Section background="neutral-50">
          <h2 className="text-heading-lg text-navy-800">{businessPages.hub.catalogHeading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.id} service={item} locale={locale} copy={businessPages} />
            ))}
          </div>
        </Section>
      )}

      <ServiceCtaBand
        locale={locale}
        copy={businessPages}
        service={service}
        contactPath={dictionary.nav.paths.contact}
      />
    </>
  );
}
