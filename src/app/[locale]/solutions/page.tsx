import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceCatalog } from "@/components/solutions/ServiceCatalog";
import { ServiceCtaBand } from "@/components/solutions/ServiceCtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { StatBar } from "@/components/ui/StatBar";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServices } from "@/lib/solutions/get-services";
import { getSolutionsHubUrl } from "@/lib/solutions/paths";

type SolutionsHubPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: SolutionsHubPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const { businessPages } = getDictionary(localeParam);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";
  return {
    title: businessPages.hub.metaTitle,
    description: businessPages.hub.metaDescription,
    alternates: { canonical: `${siteUrl}${getSolutionsHubUrl(localeParam)}` },
  };
}

export default async function SolutionsHubPage({ params }: SolutionsHubPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { businessPages, nav } = dictionary;
  const services = getServices(locale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: businessPages.hub.heading,
          url: `${siteUrl}${getSolutionsHubUrl(locale)}`,
          numberOfItems: services.length,
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.name,
            url: `${siteUrl}${getSolutionsHubUrl(locale)}/${service.slug}`,
          })),
        }}
      />

      <section className="bg-navy-800 py-16 text-white md:py-20">
        <Container>
          <FadeIn>
            <p className="text-overline mb-4 text-blue-400">{businessPages.hub.overline}</p>
            <h1 className="text-display-md max-w-3xl text-white">{businessPages.hub.heading}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200">
              {businessPages.hub.lead}
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section background="neutral-50">
        <FadeIn>
          <h2 className="text-heading-sm text-center text-navy-800">
            {businessPages.hub.trustHeading}
          </h2>
          <div className="mt-6">
            <StatBar stats={businessPages.hub.trustItems} background="white" />
          </div>
        </FadeIn>
      </Section>

      <Section background="white" id="services" ariaLabelledby="services-heading">
        <FadeIn>
          <SectionHeader
            id="services-heading"
            overline={dictionary.navGroups.solutions.label}
            heading={businessPages.hub.catalogHeading}
            lead={businessPages.hub.catalogLead}
          />
        </FadeIn>
        <FadeIn delay={100}>
          <ServiceCatalog services={services} locale={locale} copy={businessPages} />
        </FadeIn>
      </Section>

      <ServiceCtaBand
        locale={locale}
        copy={businessPages}
        contactPath={nav.paths.contact}
      />
    </>
  );
}
