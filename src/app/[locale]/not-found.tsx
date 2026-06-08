import Link from "next/link";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getSiteCopy } from "@/lib/site/get-copy";

type NotFoundProps = {
  params?: Promise<{ locale: string }>;
};

export default async function LocaleNotFound({ params }: NotFoundProps) {
  let locale: Locale = "fr";
  if (params) {
    const { locale: lp } = await params;
    if (isValidLocale(lp)) locale = lp;
  }
  const copy = getSiteCopy(locale);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-heading-xl text-navy-800">{copy.notFound.title}</h1>
      <p className="mt-4 text-neutral-700">{copy.notFound.description}</p>
      <Link href={`/${locale}`} className="mt-8 text-sm font-semibold text-blue-600 hover:underline">
        {copy.notFound.home}
      </Link>
    </main>
  );
}
