import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { CourseCatalog } from "@/components/training/CourseCatalog";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getContactInfoServer } from "@/lib/site/get-globals-server";
import {
  getCategoriesServer,
  getCoursesServer,
  getLevelsInCatalog,
} from "@/lib/training/get-courses-server";
import { getTrainingHubUrl } from "@/lib/training/paths";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type TrainingHubPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: TrainingHubPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const { hub } = getDictionary(locale).trainingPages;

  return buildPageMetadata({
    locale,
    title: hub.metaTitle,
    description: hub.metaDescription,
    pathForLocale: getTrainingHubUrl,
  });
}

export default async function TrainingHubPage({ params }: TrainingHubPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { trainingPages } = dictionary;
  const courses = await getCoursesServer(locale);
  const categories = await getCategoriesServer(locale);
  const levels = getLevelsInCatalog(courses);
  const contactInfo = await getContactInfoServer(locale, dictionary.footer.contactInfo);

  return (
    <>
      <PageHero
        heading={trainingPages.hub.heading}
        lead={trainingPages.hub.lead}
        overline={trainingPages.hub.overline}
      />
      <Section background="white" ariaLabelledby="catalog-heading">
        <h2 id="catalog-heading" className="text-heading-lg text-navy-800">
          {trainingPages.hub.catalogHeading}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-neutral-500">{trainingPages.hub.catalogLead}</p>
        <div className="mt-10">
          <CourseCatalog
            courses={courses}
            locale={locale}
            copy={trainingPages}
            categories={categories}
            levels={levels}
          />
        </div>
      </Section>
      <ContactCtaSection locale={locale} dictionary={dictionary} contactInfo={contactInfo} />
    </>
  );
}
