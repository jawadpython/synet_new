import { notFound } from "next/navigation";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { CoreServicesSection } from "@/components/sections/CoreServicesSection";
import { FormationsSection } from "@/components/sections/FormationsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HeroStatsSection } from "@/components/sections/HeroStatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getContactInfoServer } from "@/lib/site/get-globals-server";
import { getTestimonialsServer } from "@/lib/site/get-testimonials-server";
import { buildHomeMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

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
  const [contactInfo, testimonials] = await Promise.all([
    getContactInfoServer(locale, dictionary.footer.contactInfo),
    getTestimonialsServer(locale, dictionary),
  ]);

  return (
    <>
      <HeroSection locale={locale} dictionary={dictionary} />
      <HeroStatsSection dictionary={dictionary} />
      <CoreServicesSection locale={locale} dictionary={dictionary} />
      <WhyChooseSection locale={locale} dictionary={dictionary} />
      <FormationsSection locale={locale} dictionary={dictionary} />
      <TestimonialsSection locale={locale} dictionary={dictionary} items={testimonials} />
      <ContactCtaSection locale={locale} dictionary={dictionary} contactInfo={contactInfo} />
    </>
  );
}
