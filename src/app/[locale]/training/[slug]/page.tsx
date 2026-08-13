import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { CourseCard } from "@/components/training/CourseCard";
import { CourseSidebar } from "@/components/training/CourseSidebar";
import { CourseThumbnail } from "@/components/training/CourseThumbnail";
import { TrainingBreadcrumb } from "@/components/training/TrainingBreadcrumb";
import { BulletList } from "@/components/ui/BulletList";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { getCourseSlug, resolveCourseContentId } from "@/i18n/content-registry";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getCourseSlugs } from "@/lib/training/get-courses";
import { getCourseBySlugServer, getCoursesServer } from "@/lib/training/get-courses-server";
import { getCourseUrl, getTrainingHubUrl } from "@/lib/training/paths";
import { breadcrumbJsonLd, buildPageMetadata, courseJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

type CoursePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getCourseSlugs(locale).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) return {};
  const locale = localeParam as Locale;
  const course = await getCourseBySlugServer(locale, slug);
  if (!course) return {};

  const contentId = resolveCourseContentId(locale, slug);
  const location =
    locale === "fr" ? "Casablanca" : locale === "ar" ? "الدار البيضاء" : "Casablanca";

  return buildPageMetadata({
    locale,
    title: `${course.name} | SYNET ${location}`,
    description: course.shortDescription,
    keywords: [course.name, course.category, "SYNET", location],
    pathForLocale: (loc) =>
      contentId ? getCourseUrl(loc, getCourseSlug(contentId, loc)) : getTrainingHubUrl(loc),
  });
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const course = await getCourseBySlugServer(locale, slug);
  if (!course) notFound();

  const dictionary = getDictionary(locale);
  const { trainingPages } = dictionary;
  const courseUrl = getCourseUrl(locale, course.slug);
  const related = (await getCoursesServer(locale))
    .filter((item) => item.id !== course.id)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={courseJsonLd(course, courseUrl)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "SYNET", url: `/${locale}` },
          { name: trainingPages.hub.heading, url: getTrainingHubUrl(locale) },
          { name: course.name, url: courseUrl },
        ])}
      />

      <TrainingBreadcrumb
        locale={locale}
        hubLabel={trainingPages.hub.heading}
        current={course.name}
      />

      <section className="border-b border-neutral-200 bg-white py-12 md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <FadeIn className="lg:col-span-7">
              <p className="text-overline">{trainingPages.categories[course.category]}</p>
              <h1 className="text-heading-xl mt-3 text-navy-800">{course.name}</h1>
              <p className="mt-4 text-base leading-relaxed text-neutral-500 md:text-lg">
                {course.description}
              </p>
              <div className="mt-8 overflow-hidden rounded-xl border border-neutral-200">
                <CourseThumbnail variant={course.imageVariant} className="aspect-[16/10] w-full" />
              </div>
            </FadeIn>
            <div className="lg:col-span-5">
              <CourseSidebar
                course={course}
                locale={locale}
                copy={trainingPages}
                contactPath={dictionary.nav.paths.contact}
              />
            </div>
          </div>
        </Container>
      </section>

      <Section background="neutral-50">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-heading-lg text-navy-800">{trainingPages.detail.outcomes}</h2>
            <div className="mt-6">
              <BulletList items={course.outcomes} />
            </div>
          </div>
          <div>
            <h2 className="text-heading-lg text-navy-800">{trainingPages.detail.prerequisites}</h2>
            <div className="mt-6">
              <BulletList items={course.prerequisites} />
            </div>
          </div>
        </div>
        <div className="mt-12 synet-card-static p-7">
          <h2 className="text-heading-sm text-navy-800">{trainingPages.detail.instructor}</h2>
          <p className="mt-3 font-semibold text-navy-800">{course.instructor.name}</p>
          <p className="text-sm text-blue-600">{course.instructor.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-500">{course.instructor.bio}</p>
        </div>
      </Section>

      {related.length > 0 && (
        <Section background="white">
          <h2 className="text-heading-lg text-navy-800">{trainingPages.hub.catalogHeading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <CourseCard key={item.id} course={item} locale={locale} copy={trainingPages} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
