import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { getSolutionsHubUrl } from "@/lib/solutions/paths";
import { getTrainingHubUrl } from "@/lib/training/paths";
import type { EnvironmentKey } from "@/lib/site/environment-visuals";
import { EnvironmentPhoto } from "@/components/site/EnvironmentPhoto";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

type LearningEnvironmentsSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

type FocusPanel = {
  label: string;
  caption: string;
  href: string;
  environment: EnvironmentKey;
  featured?: boolean;
};

function buildFocusPanels(locale: Locale, dictionary: Dictionary): FocusPanel[] {
  const { hero, trainingOverview, businessOverview, coreServices } = dictionary;
  const corporateAudience = trainingOverview.audiences.find((a) =>
    a.href.includes("corporate"),
  );
  const networkService = coreServices.services.find((s) => s.slug.includes("network"));
  const securityService = coreServices.services.find((s) => s.slug.includes("cyber"));

  return [
    {
      label: hero.chipTraining,
      caption: trainingOverview.lead,
      href: getTrainingHubUrl(locale),
      environment: "trainingLab",
      featured: true,
    },
    {
      label: networkService?.title ?? hero.chipTrainingSub,
      caption: networkService?.description ?? trainingOverview.lead,
      href: getTrainingHubUrl(locale),
      environment: "networkingLab",
    },
    {
      label: securityService?.title ?? hero.chipTrainingSub,
      caption: securityService?.description ?? trainingOverview.lead,
      href: getTrainingHubUrl(locale),
      environment: "securityOperations",
    },
    {
      label: hero.chipBusiness,
      caption: businessOverview.lead,
      href: getSolutionsHubUrl(locale),
      environment: "serverRoom",
    },
    {
      label: corporateAudience?.label ?? hero.chipTraining,
      caption: trainingOverview.bullets[0] ?? trainingOverview.lead,
      href: localizedPath(locale, corporateAudience?.href ?? getTrainingHubUrl(locale)),
      environment: "workspace",
    },
    {
      label: trainingOverview.bullets[2] ?? trainingOverview.heading,
      caption: trainingOverview.bullets[2] ?? "",
      href: getTrainingHubUrl(locale),
      environment: "certification",
    },
  ];
}

export function LearningEnvironmentsSection({
  locale,
  dictionary,
}: LearningEnvironmentsSectionProps) {
  const { whyChoose } = dictionary;
  const panels = buildFocusPanels(locale, dictionary);
  const [featured, ...rest] = panels;
  const headingId = "learning-environments-heading";

  return (
    <Section background="white" ariaLabelledby={headingId}>
      <FadeIn>
        <header className="mb-10 max-w-2xl md:mb-14">
          <p className="text-overline mb-3">{whyChoose.partnersLabel}</p>
          <h2 id={headingId} className="text-heading-xl text-navy-800">
            {whyChoose.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500 md:text-lg">
            {whyChoose.technologiesNote ?? whyChoose.lead}
          </p>
        </header>
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-12 md:gap-5">
        <FadeIn className="md:col-span-7">
          <Link href={featured.href} className="group relative block overflow-hidden rounded-xl">
            <EnvironmentPhoto
              environment={featured.environment}
              aspectClassName="aspect-[16/11] md:aspect-[16/12] md:min-h-[420px]"
              className="border-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="font-heading text-2xl font-medium text-white md:text-3xl">
                {featured.label}
              </h3>
              <p className="mt-2 line-clamp-2 max-w-lg text-sm text-white/75">
                {featured.caption}
              </p>
            </div>
          </Link>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 md:col-span-5 md:grid-cols-1 md:gap-5">
          {rest.slice(0, 2).map((panel, index) => (
            <FadeIn key={panel.environment} delay={(index + 1) * 60}>
              <Link href={panel.href} className="group relative block overflow-hidden rounded-xl">
                <EnvironmentPhoto
                  environment={panel.environment}
                  aspectClassName="aspect-[16/10] md:aspect-auto md:min-h-[200px]"
                  className="border-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-base font-semibold text-white">{panel.label}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-white/70">{panel.caption}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {rest.slice(2).map((panel, index) => (
          <FadeIn key={panel.environment + panel.label} delay={180 + index * 40} className="md:col-span-4">
            <Link href={panel.href} className="group relative block overflow-hidden rounded-xl">
              <EnvironmentPhoto
                environment={panel.environment}
                aspectClassName="aspect-[16/10]"
                className="border-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-sm font-semibold text-white">{panel.label}</h3>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
