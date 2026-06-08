import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getAboutUrl } from "@/lib/site/paths";
import { getQuoteUrl } from "@/lib/solutions/paths";
import { getTrainingHubUrl } from "@/lib/training/paths";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) return {};
  const copy = getSiteCopy(lp);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";
  return { title: copy.about.metaTitle, description: copy.about.metaDescription, alternates: { canonical: `${siteUrl}${getAboutUrl(lp)}` } };
}

export default async function AboutPage({ params }: Props) {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) notFound();
  const locale = lp as Locale;
  const copy = getSiteCopy(locale);

  return (
    <>
      <PageHero heading={copy.about.heading} lead={copy.about.lead} />
      <Section background="white">
        <h2 className="text-heading-lg text-navy-800">{copy.about.missionHeading}</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-neutral-700">{copy.about.mission}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {copy.about.values.map((v) => (
            <div key={v.title} className="rounded-[4px] border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="text-heading-sm text-navy-800">{v.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{v.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={getQuoteUrl(locale)} variant="primary">{copy.about.ctaQuote}</Button>
          <Button href={getTrainingHubUrl(locale)} variant="secondary">{copy.about.ctaTraining}</Button>
        </div>
      </Section>
    </>
  );
}
