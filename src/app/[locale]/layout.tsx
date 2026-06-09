import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { isValidLocale, locales, type Locale, getDirection } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getContactInfoServer } from "@/lib/site/get-globals-server";

export const revalidate = 60;

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const contactInfo = await getContactInfoServer(locale, dictionary.footer.contactInfo);
  const dir = getDirection(locale);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang='${locale}';document.documentElement.dir='${dir}';`,
        }}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-[4px] focus:bg-white focus:px-4 focus:py-2 focus:text-navy-800 focus:shadow-md"
      >
        {dictionary.skipToContent}
      </a>
      <Header locale={locale} dictionary={dictionary} contactInfo={contactInfo} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} dictionary={dictionary} contactInfo={contactInfo} />
    </>
  );
}
