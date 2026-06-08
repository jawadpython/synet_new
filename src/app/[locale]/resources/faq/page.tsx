import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getFaqUrl } from "@/lib/site/paths";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) return {};
  const copy = getSiteCopy(lp);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";
  return { title: copy.faq.metaTitle, alternates: { canonical: `${siteUrl}${getFaqUrl(lp)}` } };
}

export default async function FaqPage({ params }: Props) {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) notFound();
  const copy = getSiteCopy(lp as Locale);

  return (
    <>
      <PageHero heading={copy.faq.heading} lead={copy.faq.lead} />
      <Section background="white">
        <dl className="space-y-6">
          {copy.faq.items.map((item) => (
            <div key={item.question} className="rounded-[4px] border border-neutral-200 p-6">
              <dt className="text-heading-sm text-navy-800">{item.question}</dt>
              <dd className="mt-2 text-sm text-neutral-700">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
