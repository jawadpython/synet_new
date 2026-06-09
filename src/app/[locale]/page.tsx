import { notFound } from "next/navigation";
import { BusinessOverviewSection } from "@/components/sections/BusinessOverviewSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { CoreServicesSection } from "@/components/sections/CoreServicesSection";
import { FeaturedCoursesSection } from "@/components/sections/FeaturedCoursesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrainingOverviewSection } from "@/components/sections/TrainingOverviewSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getContactInfoServer } from "@/lib/site/get-globals-server";
import { getTestimonialsServer } from "@/lib/site/get-testimonials-server";
import { getFeaturedCoursesServer } from "@/lib/training/get-courses-server";

export const dynamic = "force-dynamic";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildHomeMetadata } from "@/lib/seo";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  return buildHomeMetadata(localeParam, getDictionary(localeParam));
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const [contactInfo, featuredCourses, testimonials] = await Promise.all([
    getContactInfoServer(locale, dictionary.footer.contactInfo),
    getFeaturedCoursesServer(locale),
    getTestimonialsServer(locale, dictionary),
  ]);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SYNET",
          url: `${siteUrl}/${locale}`,
          description: dictionary.metadata.description,
          email: contactInfo.email,
          telephone: contactInfo.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: contactInfo.address,
          },
        }}
      />
      <HeroSection locale={locale} dictionary={dictionary} />
      <BusinessOverviewSection locale={locale} dictionary={dictionary} />
      <TrainingOverviewSection locale={locale} dictionary={dictionary} />
      <FeaturedCoursesSection locale={locale} dictionary={dictionary} courses={featuredCourses} />
      <CoreServicesSection locale={locale} dictionary={dictionary} />
      <WhyChooseSection locale={locale} dictionary={dictionary} />
      <TestimonialsSection locale={locale} dictionary={dictionary} items={testimonials} />
      <ContactCtaSection locale={locale} dictionary={dictionary} contactInfo={contactInfo} />
    </>
  );
}
