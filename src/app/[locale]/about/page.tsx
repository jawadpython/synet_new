import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getContactInfoServer } from "@/lib/site/get-globals-server";
import { getAboutUrl, getAboutPartnersUrl } from "@/lib/site/paths";
import { getQuoteUrl } from "@/lib/solutions/paths";
import { getTrainingHubUrl } from "@/lib/training/paths";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const copy = getSiteCopy(locale).about;

  return buildPageMetadata({
    locale,
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: getDictionary(locale).metadata.keywords,
    pathForLocale: getAboutUrl,
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const copy = getSiteCopy(locale);
  const contactInfo = await getContactInfoServer(locale, dictionary.footer.contactInfo);

  return (
    <>
      <PageHero heading={copy.about.heading} lead={copy.about.lead} overline={dictionary.nav.about} />

      <Section background="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <p className="text-overline">{dictionary.whyChoose.overline}</p>
            <h2 className="text-heading-xl mt-3 text-navy-800">{copy.about.missionHeading}</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-500 md:text-lg">
              {copy.about.mission}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={getQuoteUrl(locale)} variant="primary">
                {copy.about.ctaQuote}
              </Button>
              <Button href={getTrainingHubUrl(locale)} variant="outline-blue">
                {copy.about.ctaTraining}
              </Button>
            </div>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-1 lg:col-span-7">
            {copy.about.values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 60}>
                <div className="synet-card-static flex h-full gap-4 p-7">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-navy-800">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">{value.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <WhyChooseSection locale={locale} dictionary={dictionary} />

      <Section background="neutral-50">
        <FadeIn>
          <p className="text-overline">{dictionary.whyChoose.partnersLabel}</p>
          <h2 className="text-heading-lg mt-3 text-navy-800">{copy.partners.heading}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500">{copy.partners.lead}</p>
          <p className="mt-6 text-sm font-semibold text-navy-800">{copy.partners.technologies}</p>
          <p className="mt-3 max-w-2xl text-sm text-neutral-500">{copy.partners.note}</p>
          <div className="mt-6">
            <Button href={getAboutPartnersUrl(locale)} variant="outline-blue">
              {copy.partners.heading}
            </Button>
          </div>
        </FadeIn>
      </Section>

      <ContactCtaSection locale={locale} dictionary={dictionary} contactInfo={contactInfo} />
    </>
  );
}
