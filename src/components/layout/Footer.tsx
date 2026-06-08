import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "./LanguageSwitcher";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Footer({ locale, dictionary }: FooterProps) {
  const { footer } = dictionary;

  const columns = [
    { title: footer.solutions, links: footer.serviceLinks },
    { title: footer.training, links: footer.trainingLinks },
    { title: footer.company, links: footer.companyLinks },
  ];

  return (
    <footer className="bg-navy-900 pt-16 pb-8 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-overline mb-4 text-white">{column.title}</h2>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={localizedPath(locale, link.href)}
                      className="text-sm text-neutral-400 transition-colors duration-150 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-overline mb-4 text-white">{footer.contact}</h2>
            <address className="space-y-2 text-sm not-italic text-neutral-400">
              <p>{footer.contactInfo.address}</p>
              <p>
                <a
                  href={`tel:${footer.contactInfo.phone.replace(/\s/g, "")}`}
                  className="transition-colors duration-150 hover:text-white"
                >
                  {footer.contactInfo.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${footer.contactInfo.email}`}
                  className="transition-colors duration-150 hover:text-white"
                  dir="ltr"
                >
                  {footer.contactInfo.email}
                </a>
              </p>
              <p>{footer.contactInfo.hours}</p>
            </address>
            <Link
              href={localizedPath(locale, dictionary.nav.paths.contact)}
              className="mt-4 inline-block text-sm font-semibold text-blue-400 hover:text-white"
            >
              {dictionary.nav.contact} →
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-700 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] bg-blue-600 text-sm font-bold">
                S
              </span>
              <p className="max-w-xl text-sm leading-relaxed text-neutral-400">
                {footer.tagline}
              </p>
            </div>
            <LanguageSwitcher currentLocale={locale} dark />
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-navy-700 pt-6 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
            <p>{footer.copyright}</p>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap gap-4">
                <li>
                  <Link
                    href={localizedPath(locale, dictionary.nav.paths.legal.mentions)}
                    className="hover:text-white"
                  >
                    {footer.legal.mentions}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, dictionary.nav.paths.legal.privacy)}
                    className="hover:text-white"
                  >
                    {footer.legal.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, dictionary.nav.paths.legal.terms)}
                    className="hover:text-white"
                  >
                    {footer.legal.terms}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}
