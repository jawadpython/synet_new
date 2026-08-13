import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceCtaBand } from "@/components/solutions/ServiceCtaBand";
import { ServiceFaq } from "@/components/solutions/ServiceFaq";
import { SiteBreadcrumb } from "@/components/site/SiteBreadcrumb";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { CourseCard } from "@/components/training/CourseCard";
import { ServiceCard } from "@/components/solutions/ServiceCard";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getSectorsHubUrl, getSectorUrl } from "@/lib/site/paths";
import {
  getSectorSlug,
  resolveSectorId,
  sectorCourseCategories,
  sectorIcons,
  sectorIds,
  sectorServiceIds,
  getSectorSlugs,
} from "@/lib/site/sectors";
import { getQuoteUrl, getSolutionsHubUrl } from "@/lib/solutions/paths";
import { getServicesByIds } from "@/lib/solutions/get-services";
import { getCoursesByCategories } from "@/lib/training/get-courses";
import { breadcrumbJsonLd, buildPageMetadata, faqJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

type SectorPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getSectorSlugs(locale).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: SectorPageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const sectorId = resolveSectorId(locale, slug);
  if (!sectorId) return {};
  const item = getSiteCopy(locale).sectors.items[sectorId];

  return buildPageMetadata({
    locale,
    title: item.metaTitle,
    description: item.metaDescription,
    keywords: [item.name, "SYNET", "Casablanca", locale === "fr" ? "Maroc" : "Morocco"],
    pathForLocale: (loc) => getSectorUrl(loc, getSectorSlug(sectorId, loc)),
  });
}

export default async function SectorDetailPage({ params }: SectorPageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const sectorId = resolveSectorId(locale, slug);
  if (!sectorId) notFound();

  const dictionary = getDictionary(locale);
  const copy = getSiteCopy(locale);
  const hub = copy.sectors;
  const item = hub.items[sectorId];
  const sectorUrl = getSectorUrl(locale, getSectorSlug(sectorId, locale));
  const services = getServicesByIds(locale, sectorServiceIds[sectorId]);
  const courses = getCoursesByCategories(locale, sectorCourseCategories[sectorId]).slice(0, 3);
  const otherSectors = sectorIds.filter((id) => id !== sectorId);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "SYNET", url: `/${locale}` },
          { name: hub.heading, url: getSectorsHubUrl(locale) },
          { name: item.name, url: sectorUrl },
        ])}
      />
      {item.faq.length > 0 && <JsonLd data={faqJsonLd(item.faq)} />}

      <SiteBreadcrumb
        locale={locale}
        items={[
          { label: hub.heading, href: getSectorsHubUrl(locale) },
          { label: item.name },
        ]}
      />

      <section className="border-b border-neutral-200 bg-white py-12 md:py-16">
        <Container>
          <FadeIn>
            <p className="text-overline">{hub.overline}</p>
            <div className="mt-4 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#EAF1FB] text-[#0B6BFF]">
                <Icon name={sectorIcons[sectorId]} className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-heading-xl text-navy-800">{item.name}</h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
                  {item.lead}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={getQuoteUrl(locale)} variant="primary">
                {hub.requestQuote}
              </Button>
              <Button href={getSolutionsHubUrl(locale)} variant="outline-blue">
                {hub.viewServices}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Section background="neutral-50">
        <h2 className="text-heading-lg text-navy-800">{hub.challengesHeading}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {item.challenges.map((challenge, index) => (
            <FadeIn key={challenge} delay={index * 50}>
              <div className="synet-card-static p-7">
                <p className="font-semibold text-navy-800">{challenge}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-heading-lg text-navy-800">{hub.approachHeading}</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-500">{item.approach}</p>
      </Section>

      {services.length > 0 && (
        <Section background="neutral-50">
          <h2 className="text-heading-lg text-navy-800">{hub.relatedServicesHeading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                locale={locale}
                copy={dictionary.businessPages}
              />
            ))}
          </div>
        </Section>
      )}

      {courses.length > 0 && (
        <Section background="white">
          <h2 className="text-heading-lg text-navy-800">{hub.relatedTrainingHeading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                locale={locale}
                copy={dictionary.trainingPages}
              />
            ))}
          </div>
        </Section>
      )}

      {item.faq.length > 0 && (
        <Section background="neutral-50">
          <ServiceFaq items={item.faq} heading={hub.faqHeading} />
        </Section>
      )}

      <Section background="white">
        <h2 className="text-heading-lg text-navy-800">{hub.otherSectorsHeading}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherSectors.map((id) => (
            <li key={id}>
              <Link
                href={getSectorUrl(locale, getSectorSlug(id, locale))}
                className="flex items-center gap-3 border border-neutral-200 bg-white p-4 transition-colors hover:border-[#0B6BFF]"
              >
                <Icon name={sectorIcons[id]} className="h-5 w-5 text-blue-600" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm font-semibold text-navy-800">{hub.items[id].name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <ServiceCtaBand
        locale={locale}
        copy={dictionary.businessPages}
        contactPath={dictionary.nav.paths.contact}
      />
    </>
  );
}
