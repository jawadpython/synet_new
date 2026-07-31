import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { getSolutionsHubUrl } from "@/lib/solutions/paths";
import { Container } from "@/components/ui/Container";
import type { SiteContactInfo } from "@/lib/site/contact-info";
import { SynetLogo } from "@/components/site/SynetLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Link from "next/link";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
  contactInfo?: SiteContactInfo;
};

export function Footer({ locale, dictionary, contactInfo }: FooterProps) {
  const { footer, trainingOverview } = dictionary;
  const info = contactInfo ?? footer.contactInfo;
  const homeHref = localizedPath(locale, "/");
  const formationsHref = `${homeHref}#${trainingOverview.id}`;
  const solutionsHref = getSolutionsHubUrl(locale);

  return (
    <footer className="wp-footer pt-16 pb-8">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href={homeHref}
              aria-label="SYNET — Home"
              className="inline-flex rounded-md bg-white px-3 py-2"
            >
              <SynetLogo size="large" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {footer.tagline}
            </p>
            <div className="mt-5">
              <LanguageSwitcher currentLocale={locale} light />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              {footer.training}
            </h2>
            <ul className="space-y-2.5">
              {footer.trainingLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={formationsHref}
                    className="text-sm text-white/70 transition-colors hover:text-[#2B7FFF]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              {footer.solutions}
            </h2>
            <ul className="space-y-2.5">
              {footer.serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={solutionsHref}
                    className="text-sm text-white/70 transition-colors hover:text-[#2B7FFF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              {footer.contact}
            </h2>
            <address className="space-y-2 text-sm not-italic text-white/70">
              <p>{info.address}</p>
              <p>
                <a
                  href={`tel:${info.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-[#2B7FFF]"
                  dir="ltr"
                >
                  {info.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${info.email}`}
                  className="transition-colors hover:text-[#2B7FFF]"
                  dir="ltr"
                >
                  {info.email}
                </a>
              </p>
              <p>{info.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-white/15 pt-5 text-sm text-white/55">
          <p>{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
