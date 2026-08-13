import { notFound } from "next/navigation";
import Link from "next/link";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getContactInfoServer } from "@/lib/site/get-globals-server";
import { getSectorsHubUrl, getSectorUrl } from "@/lib/site/paths";
import { getQuoteUrl, getSolutionsHubUrl } from "@/lib/solutions/paths";
import { sectorIds, sectorIcons, getSectorSlug } from "@/lib/site/sectors";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type SectorsHubPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: SectorsHubPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const copy = getSiteCopy(locale).sectors;

  return buildPageMetadata({
    locale,
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: [copy.heading, "Casablanca", "SYNET", "Maroc", "Morocco"],
    pathForLocale: getSectorsHubUrl,
  });
}

export default async function SectorsHubPage({ params }: SectorsHubPageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const copy = getSiteCopy(locale);
  const contactInfo = await getContactInfoServer(locale, dictionary.footer.contactInfo);

  return (
    <>
      <PageHero heading={copy.sectors.heading} lead={copy.sectors.lead} overline={copy.sectors.overline} />

      <Section background="white">
        <ul className="grid list-none grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sectorIds.map((id, index) => {
            const item = copy.sectors.items[id];
            const href = getSectorUrl(locale, getSectorSlug(id, locale));
            return (
              <li key={id}>
                <FadeIn delay={index * 50}>
                  <Link href={href} className="group block h-full">
                    <article className="flex h-full flex-col border-b border-[#D7E3F2] pb-8 transition-colors group-hover:border-[#0B6BFF]">
                      <div className="flex h-14 w-14 items-center justify-center bg-[#EAF1FB] text-[#0B6BFF] transition-colors group-hover:bg-[#0B6BFF] group-hover:text-white">
                        <Icon name={sectorIcons[id]} className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                      </div>
                      <h2 className="mt-5 font-sans text-xl font-bold text-[#0A4DB5] transition-colors group-hover:text-[#0B6BFF]">
                        {item.name}
                      </h2>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#6B7C93]">
                        {item.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {item.challenges.slice(0, 3).map((challenge) => (
                          <li key={challenge} className="flex gap-2 text-sm text-[#4A5B70]">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B6BFF]" aria-hidden="true" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Link>
                </FadeIn>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex flex-wrap gap-3 border-t border-[#D7E3F2] pt-10">
          <Button href={getQuoteUrl(locale)} variant="primary">
            {copy.sectors.requestQuote}
          </Button>
          <Button href={getSolutionsHubUrl(locale)} variant="outline-blue">
            {copy.sectors.viewServices}
          </Button>
        </div>
      </Section>

      <ContactCtaSection locale={locale} dictionary={dictionary} contactInfo={contactInfo} />
    </>
  );
}
