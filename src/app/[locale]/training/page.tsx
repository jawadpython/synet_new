import type { Metadata } from "next";
import { CourseCatalog } from "@/components/training/CourseCatalog";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getCategoriesServer, getCoursesServer, getLevelsInCatalog } from "@/lib/training/get-courses-server";
import { getTrainingHubUrl } from "@/lib/training/paths";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type TrainingHubPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: TrainingHubPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const { trainingPages } = getDictionary(localeParam);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";

  return {
    title: trainingPages.hub.metaTitle,
    description: trainingPages.hub.metaDescription,
    alternates: { canonical: `${siteUrl}${getTrainingHubUrl(localeParam)}` },
  };
}

export default async function TrainingHubPage({ params }: TrainingHubPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { trainingPages, navGroups } = dictionary;
  const courses = await getCoursesServer(locale);
  const categories = await getCategoriesServer(locale);
  const levels = getLevelsInCatalog(courses);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: trainingPages.hub.heading,
          url: getTrainingHubUrl(locale),
          numberOfItems: courses.length,
          itemListElement: courses.map((course, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: course.name,
            url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma"}${getTrainingHubUrl(locale)}/${course.slug}`,
          })),
        }}
      />

      <section className="bg-navy-800 py-16 text-white md:py-20">
        <Container>
          <FadeIn>
            <p className="text-overline mb-4 text-blue-400">{trainingPages.hub.overline}</p>
            <h1 className="text-display-md max-w-3xl text-white">{trainingPages.hub.heading}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200">
              {trainingPages.hub.lead}
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section background="neutral-50" ariaLabelledby="audiences-heading">
        <FadeIn>
          <h2 id="audiences-heading" className="text-heading-lg text-navy-800">
            {dictionary.trainingOverview.heading}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {dictionary.trainingOverview.audiences.slice(0, 3).map((audience, index) => {
              const anchorId = audience.href.includes("#")
                ? audience.href.split("#")[1]
                : `audience-${index}`;
              return (
                <div
                  key={anchorId}
                  id={anchorId}
                  className="scroll-mt-24 rounded-[4px] border border-neutral-200 bg-white p-6"
                >
                  <h3 className="text-heading-sm text-navy-800">{audience.label}</h3>
                  <p className="mt-2 text-sm text-neutral-700">
                    {dictionary.trainingOverview.bullets[index] ?? dictionary.trainingOverview.lead}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </Section>

      <Section background="white" id="catalog" ariaLabelledby="catalog-heading">
        <FadeIn>
          <SectionHeader
            id="catalog-heading"
            overline={navGroups.training.label}
            heading={trainingPages.hub.catalogHeading}
            lead={trainingPages.hub.catalogLead}
          />
        </FadeIn>
        <FadeIn delay={100}>
          <CourseCatalog
            courses={courses}
            locale={locale}
            copy={trainingPages}
            categories={categories}
            levels={levels}
          />
        </FadeIn>
      </Section>
    </>
  );
}
