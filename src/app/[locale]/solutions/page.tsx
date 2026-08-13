import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesHubSection } from "@/components/sections/ServicesHubSection";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServices } from "@/lib/solutions/get-services";
import { getSolutionsHubUrl } from "@/lib/solutions/paths";
import { getContactInfoServer } from "@/lib/site/get-globals-server";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type SolutionsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: SolutionsPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};

  const locale = localeParam as Locale;
  const { hub } = getDictionary(locale).businessPages;

  return buildPageMetadata({
    locale,
    title: hub.metaTitle,
    description: hub.metaDescription,
    pathForLocale: getSolutionsHubUrl,
  });
}

export default async function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const services = getServices(locale);
  const contactInfo = await getContactInfoServer(locale, dictionary.footer.contactInfo);

  return (
    <ServicesHubSection
      locale={locale}
      dictionary={dictionary}
      services={services}
      contactInfo={contactInfo}
    />
  );
}
