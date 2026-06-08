import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getLegalUrl, type LegalDoc } from "@/lib/site/paths";

const docs: LegalDoc[] = ["mentions", "privacy", "terms"];

type Props = { params: Promise<{ locale: string; doc: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => docs.map((doc) => ({ locale, doc })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: lp, doc } = await params;
  if (!isValidLocale(lp) || !docs.includes(doc as LegalDoc)) return {};
  const legal = getSiteCopy(lp).legal[doc as LegalDoc];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";
  return {
    title: legal.metaTitle,
    alternates: { canonical: `${siteUrl}${getLegalUrl(lp, doc as LegalDoc)}` },
  };
}

export default async function LegalPage({ params }: Props) {
  const { locale: lp, doc } = await params;
  if (!isValidLocale(lp) || !docs.includes(doc as LegalDoc)) notFound();
  const legal = getSiteCopy(lp as Locale).legal[doc as LegalDoc];

  return (
    <>
      <PageHero heading={legal.heading} />
      <Section background="white">
        <p className="text-sm text-neutral-500">{legal.updated}</p>
        <div className="prose-neutral mt-8 max-w-3xl space-y-4 text-neutral-700">
          {legal.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </>
  );
}
