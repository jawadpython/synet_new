import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ServiceBenefits } from "@/components/solutions/ServiceBenefits";
import { ServiceCtaBand } from "@/components/solutions/ServiceCtaBand";
import { ServiceFaq } from "@/components/solutions/ServiceFaq";
import { getServiceFaq } from "@/lib/solutions/faq";
import { ServiceProcess } from "@/components/solutions/ServiceProcess";
import { ServiceTechnologies } from "@/components/solutions/ServiceTechnologies";
import { ServiceVisual } from "@/components/solutions/ServiceVisual";
import { SolutionsBreadcrumb } from "@/components/solutions/SolutionsBreadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServiceBySlug, getServiceSlugs } from "@/lib/solutions/get-services";
import { getQuoteUrl, getServiceUrl, getSolutionsHubUrl } from "@/lib/solutions/paths";

type ServiceDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const locales: Locale[] = ["fr", "en", "ar"];
  return locales.flatMap((locale) =>
    getServiceSlugs(locale).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) return {};
  const service = getServiceBySlug(localeParam, slug);
  if (!service) return {};
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";
  return {
    title: `${service.name} — SYNET`,
    description: service.shortDescription,
    alternates: { canonical: `${siteUrl}${getServiceUrl(localeParam, slug)}` },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { businessPages, nav } = dictionary;
  const service = getServiceBySlug(locale, slug);
  if (!service) notFound();

  const rtl = locale === "ar";
  const BackArrow = rtl ? ArrowRight : ArrowLeft;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: { "@type": "Organization", name: "SYNET", url: siteUrl },
          url: `${siteUrl}${getServiceUrl(locale, slug)}`,
          areaServed: "Morocco",
        }}
      />

      <SolutionsBreadcrumb
        locale={locale}
        hubLabel={dictionary.navGroups.solutions.label}
        current={service.name}
      />

      <Section background="neutral-50" className="py-10 md:py-12">
        <Container>
          <FadeIn>
            <Link
              href={getSolutionsHubUrl(locale)}
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
            >
              <BackArrow className="h-4 w-4" aria-hidden="true" />
              {businessPages.detail.backToHub}
            </Link>

            <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <Icon
                    name={service.icon}
                    className="h-10 w-10 text-blue-600"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h1 className="text-display-md text-navy-800">{service.name}</h1>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                  {service.shortDescription}
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Button href={getQuoteUrl(locale, service.slug)} variant="primary" size="lg" className="w-full">
                    {businessPages.card.requestQuote}
                  </Button>
                </div>
              </div>
            </div>

            <ServiceVisual
              variant={service.imageVariant}
              className="mt-8 aspect-[21/9] w-full rounded-[4px] border border-neutral-200"
            />
          </FadeIn>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <FadeIn>
            <h2 className="text-heading-lg text-navy-800">{businessPages.detail.about}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-neutral-700">{service.description}</p>
          </FadeIn>
        </Container>
      </Section>

      <Section background="neutral-50">
        <Container>
          <ServiceBenefits service={service} copy={businessPages} />
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <ServiceProcess service={service} copy={businessPages} />
        </Container>
      </Section>

      <Section background="neutral-50">
        <Container>
          <ServiceTechnologies service={service} copy={businessPages} />
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <ServiceFaq
            items={getServiceFaq(service.id, locale)}
            heading={businessPages.detail.faq}
          />
        </Container>
      </Section>

      <ServiceCtaBand
        locale={locale}
        copy={businessPages}
        service={service}
        contactPath={nav.paths.contact}
      />
    </>
  );
}
