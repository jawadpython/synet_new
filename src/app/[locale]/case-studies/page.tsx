import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getCaseStudiesUrl } from "@/lib/site/paths";
import { getQuoteUrl } from "@/lib/solutions/paths";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) return {};
  const copy = getSiteCopy(lp);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";
  return { title: copy.caseStudies.metaTitle, description: copy.caseStudies.metaDescription, alternates: { canonical: `${siteUrl}${getCaseStudiesUrl(lp)}` } };
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) notFound();
  const locale = lp as Locale;
  const copy = getSiteCopy(locale);

  return (
    <>
      <PageHero heading={copy.caseStudies.heading} lead={copy.caseStudies.lead} />
      <Section background="neutral-50">
        <p className="max-w-2xl text-neutral-700">{copy.caseStudies.comingSoon}</p>
        <div className="mt-8">
          <Button href={getQuoteUrl(locale)} variant="primary">{copy.caseStudies.cta}</Button>
        </div>
      </Section>
    </>
  );
}
