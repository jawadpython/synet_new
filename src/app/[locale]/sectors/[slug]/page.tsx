import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { BulletList } from "@/components/ui/BulletList";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getQuoteUrl, getSolutionsHubUrl } from "@/lib/solutions/paths";

const sectorSlugs = ["pme", "ecoles", "cliniques", "usines", "organisations-gouvernementales"] as const;

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => sectorSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: lp, slug } = await params;
  if (!isValidLocale(lp)) return {};
  const item = getSiteCopy(lp).sectors.items[slug];
  if (!item) return {};
  return { title: `${item.name} | SYNET`, description: item.description };
}

export default async function SectorPage({ params }: Props) {
  const { locale: lp, slug } = await params;
  if (!isValidLocale(lp)) notFound();
  const locale = lp as Locale;
  const site = getSiteCopy(locale);
  const item = site.sectors.items[slug];
  if (!item) notFound();

  return (
    <>
      <PageHero heading={item.name} lead={item.description} />
      <Section background="white">
        <h2 className="text-heading-sm text-navy-800">Enjeux</h2>
        <div className="mt-4">
          <BulletList items={item.challenges} />
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={getQuoteUrl(locale)} variant="primary">{site.sectors.requestQuote}</Button>
          <Button href={getSolutionsHubUrl(locale)} variant="secondary">{site.sectors.viewServices}</Button>
        </div>
      </Section>
    </>
  );
}
