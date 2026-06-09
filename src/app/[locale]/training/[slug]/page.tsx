import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CourseSidebar } from "@/components/training/CourseSidebar";
import { CourseThumbnail } from "@/components/training/CourseThumbnail";
import { TrainingBreadcrumb } from "@/components/training/TrainingBreadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BulletList } from "@/components/ui/BulletList";
import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getCourseBySlugServer, getCourseSlugsServer } from "@/lib/training/get-courses-server";
import { getCourseUrl, getTrainingHubUrl } from "@/lib/training/paths";

export const dynamic = "force-dynamic";

type CourseDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales: Locale[] = ["fr", "en", "ar"];
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const slugs = await getCourseSlugsServer(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) return {};
  const course = await getCourseBySlugServer(localeParam, slug);
  if (!course) return {};

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";
  return {
    title: `${course.name} — SYNET`,
    description: course.shortDescription,
    alternates: { canonical: `${siteUrl}${getCourseUrl(localeParam, slug)}` },
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { trainingPages, nav } = dictionary;
  const course = await getCourseBySlugServer(locale, slug);

  if (!course) notFound();

  const rtl = locale === "ar";
  const BackArrow = rtl ? ArrowRight : ArrowLeft;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://synet.ma";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: course.name,
          description: course.description,
          provider: { "@type": "Organization", name: "SYNET" },
          offers: {
            "@type": "Offer",
            price: course.price,
            priceCurrency: "MAD",
          },
          url: `${siteUrl}${getCourseUrl(locale, slug)}`,
          educationalLevel: trainingPages.levels[course.level],
          timeRequired: course.duration,
          instructor: {
            "@type": "Person",
            name: course.instructor.name,
            jobTitle: course.instructor.title,
          },
        }}
      />

      <TrainingBreadcrumb
        locale={locale}
        hubLabel={dictionary.navGroups.training.label}
        current={course.name}
      />

      <Section background="neutral-50" className="py-10 md:py-12">
        <Container>
          <FadeIn>
            <Link
              href={getTrainingHubUrl(locale)}
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
            >
              <BackArrow className="h-4 w-4" aria-hidden="true" />
              {trainingPages.detail.backToCatalog}
            </Link>

            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <Badge className="mb-4">{trainingPages.categories[course.category]}</Badge>
                <h1 className="text-display-md text-navy-800">{course.name}</h1>
                <p className="mt-4 text-lg text-neutral-700">{course.shortDescription}</p>
                <CourseThumbnail
                  variant={course.imageVariant}
                  className="mt-8 aspect-video w-full rounded-[4px] border border-neutral-200"
                />
              </div>
              <div className="lg:col-span-5">
                <CourseSidebar
                  course={course}
                  locale={locale}
                  copy={trainingPages}
                  contactPath={nav.paths.contact}
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <FadeIn className="lg:col-span-8">
              <h2 className="text-heading-lg text-navy-800">{trainingPages.detail.about}</h2>
              <p className="mt-4 leading-relaxed text-neutral-700">{course.description}</p>

              <h2 className="text-heading-lg mt-10 text-navy-800">
                {trainingPages.detail.outcomes}
              </h2>
              <div className="mt-4">
                <BulletList items={course.outcomes} />
              </div>

              <h2 className="text-heading-lg mt-10 text-navy-800">
                {trainingPages.detail.prerequisites}
              </h2>
              <div className="mt-4">
                <BulletList items={course.prerequisites} />
              </div>

              <h2 className="text-heading-lg mt-10 text-navy-800">
                {trainingPages.detail.instructor}
              </h2>
              <div className="mt-4 rounded-[4px] border border-neutral-200 bg-neutral-50 p-6">
                <p className="font-semibold text-navy-800">{course.instructor.name}</p>
                <p className="text-sm text-blue-600">{course.instructor.title}</p>
                <p className="mt-3 text-sm text-neutral-700">{course.instructor.bio}</p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
