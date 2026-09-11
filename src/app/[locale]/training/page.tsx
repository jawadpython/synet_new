import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { CourseCatalog } from "@/components/training/CourseCatalog";
import { PageHero } from "@/components/site/PageHero";
import { ServiceFaq } from "@/components/solutions/ServiceFaq";
import { Section } from "@/components/ui/Section";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getContactInfoServer } from "@/lib/site/get-globals-server";
import {
  getCategoriesServer,
  getCoursesServer,
  getLevelsInCatalog,
} from "@/lib/training/get-courses-server";
import { getCourseUrl, getTrainingHubUrl } from "@/lib/training/paths";
import { breadcrumbJsonLd, buildPageMetadata, courseListJsonLd, faqJsonLd } from "@/lib/seo";

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
    keywords: hub.keywords,
    pathForLocale: getTrainingHubUrl,
    image: "/images/networking.webp",
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

  const hubUrl = getTrainingHubUrl(locale);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "SYNET", url: `/${locale}` },
          { name: trainingPages.hub.heading, url: hubUrl },
        ])}
      />
      <JsonLd
        data={courseListJsonLd(
          courses.map((course) => ({
            name: course.name,
            url: getCourseUrl(locale, course.slug),
          })),
        )}
      />
      {trainingPages.hub.faq.length > 0 && <JsonLd data={faqJsonLd(trainingPages.hub.faq)} />}
      <PageHero
        heading={trainingPages.hub.heading}
        lead={trainingPages.hub.lead}
        overline={trainingPages.hub.overline}
      />
      <Section background="white" ariaLabelledby="why-training-heading">
        <h2 id="why-training-heading" className="text-heading-lg text-navy-800">
          {trainingPages.hub.whyHeading}
        </h2>
        <ul className="mt-8 grid list-none gap-6 md:grid-cols-3">
          {trainingPages.hub.whyItems.map((item) => (
            <li key={item.title} className="synet-card-static p-6">
              <h3 className="text-heading-sm text-navy-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section background="neutral-50" ariaLabelledby="catalog-heading">
        <h2 id="catalog-heading" className="text-heading-lg text-navy-800">
          {trainingPages.hub.catalogHeading}
        </h2>
        <p className="mt-3 max-w-2xl text-base text-neutral-500">{trainingPages.hub.catalogLead}</p>
        {categories.length > 0 && (
          <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label={trainingPages.hub.catalogHeading}>
            {categories.map((category) => (
              <a
                key={category}
                href={`#formation-${category}`}
                className="font-medium text-[#0B6BFF] hover:underline"
              >
                {trainingPages.categories[category]}
              </a>
            ))}
          </nav>
        )}
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
      <Section background="white">
        <ServiceFaq items={trainingPages.hub.faq} heading={trainingPages.hub.faqHeading} />
      </Section>
      <ContactCtaSection locale={locale} dictionary={dictionary} contactInfo={contactInfo} />
    </>
  );
}
