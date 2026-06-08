import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getBlogUrl } from "@/lib/site/paths";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) return {};
  const copy = getSiteCopy(lp);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";
  return { title: copy.blog.metaTitle, alternates: { canonical: `${siteUrl}${getBlogUrl(lp)}` } };
}

export default async function BlogPage({ params }: Props) {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) notFound();
  const copy = getSiteCopy(lp as Locale);

  return (
    <>
      <PageHero heading={copy.blog.heading} lead={copy.blog.lead} />
      <Section background="neutral-50">
        <p className="text-neutral-700">{copy.blog.comingSoon}</p>
      </Section>
    </>
  );
}
