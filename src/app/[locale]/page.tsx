import { notFound } from "next/navigation";
import { FormationsSection } from "@/components/sections/FormationsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HeroStatsSection } from "@/components/sections/HeroStatsSection";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getContactInfoServer } from "@/lib/site/get-globals-server";

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
  const contactInfo = await getContactInfoServer(locale, dictionary.footer.contactInfo);

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
      <HeroStatsSection dictionary={dictionary} />
      <FormationsSection locale={locale} dictionary={dictionary} />
    </>
  );
}
