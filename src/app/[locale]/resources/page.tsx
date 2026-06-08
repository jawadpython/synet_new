import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getBlogUrl, getFaqUrl, getResourcesHubUrl } from "@/lib/site/paths";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) return {};
  const copy = getSiteCopy(lp);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";
  return { title: copy.resources.metaTitle, alternates: { canonical: `${siteUrl}${getResourcesHubUrl(lp)}` } };
}

export default async function ResourcesPage({ params }: Props) {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) notFound();
  const locale = lp as Locale;
  const copy = getSiteCopy(locale);

  return (
    <>
      <PageHero heading={copy.resources.heading} lead={copy.resources.lead} />
      <Section background="white">
        <div className="grid gap-6 md:grid-cols-2">
          <Link href={getBlogUrl(locale)} className="rounded-[4px] border border-neutral-200 p-6 hover:border-blue-600">
            <h2 className="text-heading-sm text-navy-800">{copy.resources.blogTitle}</h2>
            <p className="mt-2 text-sm text-neutral-700">{copy.resources.blogLead}</p>
          </Link>
          <Link href={getFaqUrl(locale)} className="rounded-[4px] border border-neutral-200 p-6 hover:border-blue-600">
            <h2 className="text-heading-sm text-navy-800">{copy.resources.faqTitle}</h2>
            <p className="mt-2 text-sm text-neutral-700">{copy.resources.faqLead}</p>
          </Link>
        </div>
      </Section>
    </>
  );
}
