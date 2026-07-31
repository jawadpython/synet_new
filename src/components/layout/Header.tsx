"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { getSolutionsHubUrl } from "@/lib/solutions/paths";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { SiteContactInfo } from "@/lib/site/contact-info";
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
  const { nav, footer, trainingOverview } = dictionary;
  const info = contactInfo ?? footer.contactInfo;
  const homeHref = localizedPath(locale, "/");
  const formationsHref = `${homeHref}#${trainingOverview.id}`;
  const solutionsHref = getSolutionsHubUrl(locale);

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

  const navLinkClass =
    "px-3.5 py-5 text-[14px] font-medium text-[#4A5B70] transition-colors duration-200 hover:text-[#0A4DB5]";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-200",
        scrolled ? "shadow-sm" : "border-b border-transparent",
      )}
    >
      <Container as="div" className="flex h-[70px] items-center justify-between gap-4 md:h-[76px]">
        <Link
          href={homeHref}
          className="shrink-0"
          aria-label="SYNET — Home"
        >
          <SynetLogo size="large" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label={nav.mainNav}>
          <a href={formationsHref} className={navLinkClass}>
            {nav.training}
          </a>
          <Link href={solutionsHref} className={navLinkClass}>
            {nav.solutions}
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher currentLocale={locale} />
          <Button
            href={formationsHref}
            variant="primary"
            size="sm"
            className="rounded-md bg-[#0B6BFF] px-5 text-[12px] font-bold uppercase tracking-wide hover:bg-[#0958d6]"
          >
            {nav.training}
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={`tel:${info.phone.replace(/\s/g, "")}`}
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
              <a
                href={formationsHref}
                className="block border-b border-neutral-200 py-3 text-sm font-semibold text-navy-800"
                onClick={() => setMobileOpen(false)}
              >
                {nav.training}
              </a>
              <Link
                href={solutionsHref}
                className="block border-b border-neutral-200 py-3 text-sm font-semibold text-navy-800"
                onClick={() => setMobileOpen(false)}
              >
                {nav.solutions}
              </Link>
            </nav>
            <div className="mt-5">
              <Button
                href={formationsHref}
                variant="primary"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                {nav.training}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
