import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getContactUrl } from "@/lib/site/paths";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) return {};
  return { title: getSiteCopy(lp).careers.metaTitle };
}

export default async function CareersPage({ params }: Props) {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) notFound();
  const locale = lp as Locale;
  const copy = getSiteCopy(locale);

  return (
    <>
      <PageHero heading={copy.careers.heading} lead={copy.careers.lead} />
      <Section background="white">
        <Button href={getContactUrl(locale)} variant="primary">{copy.careers.cta}</Button>
      </Section>
    </>
  );
}
