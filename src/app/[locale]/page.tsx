import { notFound } from "next/navigation";
import { FormationsSection } from "@/components/sections/FormationsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HeroStatsSection } from "@/components/sections/HeroStatsSection";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
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

  return (
    <>
      <HeroSection locale={locale} dictionary={dictionary} />
      <HeroStatsSection dictionary={dictionary} />
      <FormationsSection locale={locale} dictionary={dictionary} />
    </>
  );
}
