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
          email: dictionary.footer.contactInfo.email,
          telephone: dictionary.footer.contactInfo.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: dictionary.footer.contactInfo.address,
          },
        }}
      />
      <HeroSection locale={locale} dictionary={dictionary} />
      <BusinessOverviewSection locale={locale} dictionary={dictionary} />
      <TrainingOverviewSection locale={locale} dictionary={dictionary} />
      <FeaturedCoursesSection locale={locale} dictionary={dictionary} />
      <CoreServicesSection locale={locale} dictionary={dictionary} />
      <WhyChooseSection locale={locale} dictionary={dictionary} />
      <TestimonialsSection locale={locale} dictionary={dictionary} />
      <ContactCtaSection locale={locale} dictionary={dictionary} />
    </>
  );
}
