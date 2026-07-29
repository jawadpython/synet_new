import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
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
  const formationsHref = `#${trainingOverview.id}`;

  return (
    <footer className="wp-footer pt-16 pb-8">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href={localizedPath(locale, "/")} aria-label="SYNET — Home">
              <SynetLogo size="large" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              {footer.tagline}
            </p>
            <div className="mt-5">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-navy-800">
              {footer.training}
            </h2>
            <ul className="space-y-2.5">
              {footer.trainingLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={formationsHref}
                    className="text-sm text-neutral-500 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-navy-800">
              {footer.contact}
            </h2>
            <address className="space-y-2 text-sm not-italic text-neutral-500">
              <p>{info.address}</p>
              <p>
                <a href={`tel:${info.phone.replace(/\s/g, "")}`} className="hover:text-blue-600" dir="ltr">
                  {info.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${info.email}`} className="hover:text-blue-600" dir="ltr">
                  {info.email}
                </a>
              </p>
              <p>{info.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-5 text-sm text-neutral-500">
          <p>{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
