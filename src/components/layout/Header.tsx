"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { getSolutionsHubUrl, getQuoteUrl } from "@/lib/solutions/paths";
import { getTrainingHubUrl } from "@/lib/training/paths";
import { getAboutUrl, getContactUrl, getSectorsHubUrl } from "@/lib/site/paths";
import { localizedPath } from "@/lib/i18n/paths";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { SiteContactInfo } from "@/lib/site/contact-info";
import { toTelHref } from "@/lib/site/nap";
import { SynetLogo } from "@/components/site/SynetLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
  contactInfo?: SiteContactInfo;
};

export function Header({ locale, dictionary, contactInfo }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { nav } = dictionary;
  const info = contactInfo ?? dictionary.footer.contactInfo;
  const homeHref = localizedPath(locale, "/");
  const solutionsHref = getSolutionsHubUrl(locale);
  const trainingHref = getTrainingHubUrl(locale);
  const aboutHref = getAboutUrl(locale);
  const sectorsHref = getSectorsHubUrl(locale);
  const contactHref = getContactUrl(locale);
  const quoteHref = getQuoteUrl(locale);

  const links = [
    { href: solutionsHref, label: nav.solutions },
    { href: trainingHref, label: nav.training },
    { href: sectorsHref, label: nav.sectors },
    { href: aboutHref, label: nav.about },
    { href: contactHref, label: nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const navLinkClass = (href: string) =>
    cn(
      "px-2.5 py-5 text-[13px] font-medium transition-colors duration-200 lg:px-3.5 lg:text-[14px]",
      isActive(href) ? "text-[#0A4DB5]" : "text-[#4A5B70] hover:text-[#0A4DB5]",
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-200",
        scrolled ? "shadow-sm" : "border-b border-transparent",
      )}
    >
      <Container as="div" className="flex h-[70px] items-center justify-between gap-4 md:h-[76px]">
        <Link href={homeHref} className="shrink-0" aria-label="SYNET — Home">
          <SynetLogo size="large" />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label={nav.mainNav}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher currentLocale={locale} />
          <Button
            href={quoteHref}
            variant="primary"
            size="sm"
            className="rounded-md bg-[#0B6BFF] px-5 text-[12px] font-bold uppercase tracking-wide hover:bg-[#0958d6]"
          >
            {nav.requestQuote}
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={toTelHref(info.phone)}
            className="flex h-10 w-10 items-center justify-center text-blue-600"
            aria-label={nav.contact}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <LanguageSwitcher currentLocale={locale} />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-navy-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? nav.closeMenu : nav.openMenu}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-white md:hidden">
          <Container className="py-5">
            <nav aria-label={nav.mainNav}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-neutral-200 py-3 text-sm font-semibold text-navy-800"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5">
              <Button
                href={quoteHref}
                variant="primary"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                {nav.requestQuote}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
