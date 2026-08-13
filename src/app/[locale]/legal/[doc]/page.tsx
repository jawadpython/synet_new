import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";
import { getLegalUrl, type LegalDoc } from "@/lib/site/paths";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

const legalDocs = ["mentions", "privacy", "terms"] as const;

type LegalPageProps = {
  params: Promise<{ locale: string; doc: string }>;
};

function isLegalDoc(value: string): value is LegalDoc {
  return (legalDocs as readonly string[]).includes(value);
}

export async function generateStaticParams() {
  const { locales } = await import("@/lib/i18n/config");
  return locales.flatMap((locale) => legalDocs.map((doc) => ({ locale, doc })));
}

export async function generateMetadata({ params }: LegalPageProps) {
  const { locale: localeParam, doc } = await params;
  if (!isValidLocale(localeParam) || !isLegalDoc(doc)) return {};
  const locale = localeParam as Locale;
  const copy = getSiteCopy(locale).legal[doc];

  return buildPageMetadata({
    locale,
    title: copy.metaTitle,
    description: copy.body[0] ?? copy.heading,
    pathForLocale: (loc) => getLegalUrl(loc, doc),
  });
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { locale: localeParam, doc } = await params;
  if (!isValidLocale(localeParam) || !isLegalDoc(doc)) notFound();

  const locale = localeParam as Locale;
  const copy = getSiteCopy(locale).legal[doc];

  return (
    <>
      <PageHero heading={copy.heading} lead={copy.updated} />
      <Section background="white">
        <Container className="max-w-3xl">
          <div className="space-y-5 text-base leading-relaxed text-neutral-600">
            {copy.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
