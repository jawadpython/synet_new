import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EnrollmentForm } from "@/components/training/EnrollmentForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getCourses } from "@/lib/training/get-courses";
import { getEnrollPath } from "@/lib/training/paths";

type EnrollmentPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ course?: string }>;
};

export async function generateMetadata({
  params,
}: EnrollmentPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};
  const { trainingPages } = getDictionary(localeParam);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";

  return {
    title: trainingPages.enrollment.metaTitle,
    description: trainingPages.enrollment.metaDescription,
    alternates: {
      canonical: `${siteUrl}/${localeParam}/${getEnrollPath(localeParam)}`,
    },
    robots: { index: false, follow: true },
  };
}

export default async function EnrollmentPage({
  params,
  searchParams,
}: EnrollmentPageProps) {
  const { locale: localeParam } = await params;
  const { course: courseSlug } = await searchParams;

  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { trainingPages } = dictionary;
  const courses = getCourses(locale);

  return (
    <>
      <section className="bg-neutral-50 py-12 md:py-16">
        <Container>
          <FadeIn>
            <p className="text-overline text-blue-600">{trainingPages.enrollment.overline}</p>
            <h1 className="text-heading-xl mt-3 text-navy-800">
              {trainingPages.enrollment.heading}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-neutral-700">
              {trainingPages.enrollment.lead}
            </p>
          </FadeIn>
        </Container>
      </section>

      <Section background="white">
        <Container className="max-w-3xl">
          <FadeIn>
            <EnrollmentForm
              courses={courses}
              locale={locale}
              copy={trainingPages}
              preselectedCourseSlug={courseSlug}
            />
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
