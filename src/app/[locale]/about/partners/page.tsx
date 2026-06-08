import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) return {};
  const copy = getSiteCopy(lp);
  return { title: copy.partners.metaTitle };
}

export default async function PartnersPage({ params }: Props) {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) notFound();
  const copy = getSiteCopy(lp as Locale);

  return (
    <>
      <PageHero heading={copy.partners.heading} lead={copy.partners.lead} />
      <Section background="white">
        <p className="text-lg font-semibold text-navy-800">{copy.partners.technologies}</p>
        <p className="mt-4 max-w-3xl text-sm text-neutral-600">{copy.partners.note}</p>
      </Section>
    </>
  );
}
