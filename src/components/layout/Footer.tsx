import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { getSolutionsHubUrl } from "@/lib/solutions/paths";
import { getTrainingHubUrl } from "@/lib/training/paths";
import { getAboutUrl, getAboutPartnersUrl, getContactUrl, getLegalUrl, getSectorsHubUrl } from "@/lib/site/paths";
import { getSiteCopy } from "@/lib/site/get-copy";
import { Container } from "@/components/ui/Container";
import type { SiteContactInfo } from "@/lib/site/contact-info";
import { toTelHref, toWhatsAppHref } from "@/lib/site/nap";
import { SynetLogo } from "@/components/site/SynetLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Link from "next/link";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
  contactInfo?: SiteContactInfo;
};

function isFaqLink(href: string): boolean {
  return href.endsWith("/faq");
}

export function Footer({ locale, dictionary, contactInfo }: FooterProps) {
  const { footer, nav } = dictionary;
  const partnersLabel = getSiteCopy(locale).partners.heading;
  const info = contactInfo ?? footer.contactInfo;
  const homeHref = localizedPath(locale, "/");
  const trainingHref = getTrainingHubUrl(locale);
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
              <Link href={trainingHref} className="transition-colors hover:text-[#2B7FFF]">
                {footer.training}
              </Link>
            </h2>
            <ul className="space-y-2.5">
              {footer.trainingLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localizedPath(locale, link.href)}
                    className="text-sm text-white/70 transition-colors hover:text-[#2B7FFF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              <Link href={solutionsHref} className="transition-colors hover:text-[#2B7FFF]">
                {footer.solutions}
              </Link>
            </h2>
            <ul className="space-y-2.5">
              {footer.serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localizedPath(locale, link.href)}
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
                  href={toTelHref(info.phone)}
                  className="transition-colors hover:text-[#2B7FFF]"
                  dir="ltr"
                >
                  {info.phone}
                </a>
              </p>
              <p>
                <a
                  href={toWhatsAppHref(info.phone)}
                  className="transition-colors hover:text-[#2B7FFF]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {footer.whatsapp}
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
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link
                  href={getAboutUrl(locale)}
                  className="text-sm text-white/70 transition-colors hover:text-[#2B7FFF]"
                >
                  {nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={getSectorsHubUrl(locale)}
                  className="text-sm text-white/70 transition-colors hover:text-[#2B7FFF]"
                >
                  {nav.sectors}
                </Link>
              </li>
              <li>
                <Link
                  href={getAboutPartnersUrl(locale)}
                  className="text-sm text-white/70 transition-colors hover:text-[#2B7FFF]"
                >
                  {partnersLabel}
                </Link>
              </li>
              {footer.companyLinks.filter((link) => isFaqLink(link.href)).map((link) => (
                <li key={link.href}>
                  <Link
                    href={localizedPath(locale, link.href)}
                    className="text-sm text-white/70 transition-colors hover:text-[#2B7FFF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={getContactUrl(locale)}
                  className="text-sm text-white/70 transition-colors hover:text-[#2B7FFF]"
                >
                  {nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-5 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>{footer.copyright}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href={getLegalUrl(locale, "mentions")} className="transition-colors hover:text-[#2B7FFF]">
                {footer.legal.mentions}
              </Link>
            </li>
            <li>
              <Link href={getLegalUrl(locale, "privacy")} className="transition-colors hover:text-[#2B7FFF]">
                {footer.legal.privacy}
              </Link>
            </li>
            <li>
              <Link href={getLegalUrl(locale, "terms")} className="transition-colors hover:text-[#2B7FFF]">
                {footer.legal.terms}
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
