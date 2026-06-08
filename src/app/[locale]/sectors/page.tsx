import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/ui/Section";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getSectorUrl, getSectorsHubUrl } from "@/lib/site/paths";

const sectorSlugs = ["pme", "ecoles", "cliniques", "usines", "organisations-gouvernementales"] as const;

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) return {};
  const copy = getSiteCopy(lp);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";
  return { title: copy.sectors.metaTitle, description: copy.sectors.metaDescription, alternates: { canonical: `${siteUrl}${getSectorsHubUrl(lp)}` } };
}

export default async function SectorsHubPage({ params }: Props) {
  const { locale: lp } = await params;
  if (!isValidLocale(lp)) notFound();
  const copy = getSiteCopy(lp as Locale);

  return (
    <>
      <PageHero heading={copy.sectors.heading} lead={copy.sectors.lead} />
      <Section background="white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectorSlugs.map((slug) => {
            const item = copy.sectors.items[slug];
            if (!item) return null;
            return (
              <Link
                key={slug}
                href={getSectorUrl(lp as Locale, slug)}
                className="rounded-[4px] border border-neutral-200 bg-white p-6 transition-colors duration-150 hover:border-blue-600"
              >
                <h2 className="text-heading-sm text-navy-800">{item.name}</h2>
                <p className="mt-2 text-sm text-neutral-700">{item.description}</p>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
