import { notFound } from "next/navigation";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { PageHero } from "@/components/site/PageHero";
import { SiteBreadcrumb } from "@/components/site/SiteBreadcrumb";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { CourseCard } from "@/components/training/CourseCard";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getContactInfoServer } from "@/lib/site/get-globals-server";
import { getAboutPartnersUrl, getAboutUrl } from "@/lib/site/paths";
import { getQuoteUrl } from "@/lib/solutions/paths";
import { getTrainingHubUrl } from "@/lib/training/paths";
import { getCoursesByCategories } from "@/lib/training/get-courses";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type PartnersPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PartnersPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const copy = getSiteCopy(locale).partners;

  return buildPageMetadata({
    locale,
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: ["Cisco", "Fortinet", "Microsoft", "Linux", "SAP", "AWS", "Azure", "SYNET"],
    pathForLocale: getAboutPartnersUrl,
  });
}

export default async function PartnersPage({ params }: PartnersPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const copy = getSiteCopy(locale);
  const contactInfo = await getContactInfoServer(locale, dictionary.footer.contactInfo);
  const relatedCourses = getCoursesByCategories(locale, [
    "networking",
    "cybersecurity",
    "cloud",
    "microsoft",
    "linux",
    "sap",
  ]).slice(0, 6);

  return (
    <>
      <SiteBreadcrumb
        locale={locale}
        items={[
          { label: dictionary.nav.about, href: getAboutUrl(locale) },
          { label: copy.partners.heading },
        ]}
      />
      <PageHero
        heading={copy.partners.heading}
        lead={copy.partners.lead}
        overline={copy.partners.overline}
      />

      <Section background="white">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {copy.partners.groups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 50}>
              <article className="synet-card-static h-full p-7">
                <h2 className="text-heading-sm text-navy-800">{group.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{group.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-[2px] border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-semibold text-neutral-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-neutral-500">{copy.partners.note}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={getQuoteUrl(locale)} variant="primary">
            {copy.partners.ctaQuote}
          </Button>
          <Button href={getTrainingHubUrl(locale)} variant="outline-blue">
            {copy.partners.ctaTraining}
          </Button>
        </div>
      </Section>

      {relatedCourses.length > 0 && (
        <Section background="neutral-50">
          <h2 className="text-heading-lg text-navy-800">{copy.partners.relatedTrainingHeading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedCourses.map((course) => (
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

      <ContactCtaSection locale={locale} dictionary={dictionary} contactInfo={contactInfo} />
    </>
  );
}
