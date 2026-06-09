"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { getQuoteUrl } from "@/lib/solutions/paths";
import { localizedPath } from "@/lib/i18n/paths";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { SiteContactInfo } from "@/lib/site/contact-info";
import { LanguageSwitcher } from "./LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
  contactInfo?: SiteContactInfo;
};

type NavKey = "solutions" | "training" | "about" | "resources";

export function Header({ locale, dictionary, contactInfo }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<NavKey | null>(null);
  const rtl = locale === "ar";
  const { nav, navGroups, footer } = dictionary;
  const info = contactInfo ?? footer.contactInfo;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
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

  const dropdownGroups: { key: NavKey; group: (typeof navGroups)["solutions"] }[] = [
    { key: "solutions", group: navGroups.solutions },
    { key: "training", group: navGroups.training },
    { key: "about", group: navGroups.about },
    { key: "resources", group: navGroups.resources },
  ];

  const simpleLinks = [
    { label: nav.sectors, href: localizedPath(locale, nav.paths.sectors) },
    { label: nav.caseStudies, href: localizedPath(locale, nav.paths.caseStudies) },
    { label: nav.contact, href: localizedPath(locale, nav.paths.contact) },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-navy-800 transition-shadow duration-150",
        scrolled && "shadow-sm",
      )}
    >
      <Container as="div" className="flex h-[72px] items-center justify-between gap-4">
        <Link
          href={localizedPath(locale, "/")}
          className="flex shrink-0 items-center gap-2 text-white"
          aria-label="SYNET — Home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[2px] bg-blue-600 text-sm font-bold">
            S
          </span>
          <span className="text-lg font-semibold tracking-wide">SYNET</span>
        </Link>

        <nav
          className="hidden items-center gap-1 xl:flex"
          aria-label={nav.mainNav}
        >
          {dropdownGroups.map(({ key, group }) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setOpenDropdown(key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:text-blue-400"
                aria-expanded={openDropdown === key}
                aria-haspopup="true"
              >
                {group.label}
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              {openDropdown === key && group.columns && (
                <div
                  className={cn(
                    "absolute top-full z-50 mt-0 min-w-[480px] rounded-[4px] border border-neutral-200 bg-white p-8 shadow-md",
                    rtl ? "right-0" : "left-0",
                  )}
                  role="menu"
                >
                  <div className="grid grid-cols-2 gap-12">
                    {group.columns.map((column) => (
                      <div key={column.title}>
                        <p className="text-overline mb-4 text-navy-800">
                          {column.title}
                        </p>
                        <ul className="space-y-2" role="none">
                          {column.links.map((link) => (
                            <li key={link.href} role="none">
                              <Link
                                href={localizedPath(locale, link.href)}
                                className="block text-sm text-neutral-700 transition-colors duration-150 hover:text-blue-600"
                                role="menuitem"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  {group.href && (
                    <div className="mt-6 border-t border-neutral-200 pt-4">
                      <Link
                        href={localizedPath(locale, group.href)}
                        className="text-sm font-semibold text-blue-600 hover:underline"
                      >
                        {group.label} →
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <LanguageSwitcher currentLocale={locale} dark />
          <Link
            href={localizedPath(locale, nav.paths.enroll)}
            className="text-sm font-semibold text-neutral-200 transition-colors duration-150 hover:text-white"
          >
            {nav.enroll}
          </Link>
          <Button
            href={getQuoteUrl(locale)}
            variant="primary"
            size="sm"
          >
            {nav.requestQuote}
          </Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={`tel:${info.phone.replace(/\s/g, "")}`}
            className="flex h-11 w-11 items-center justify-center text-white"
            aria-label={nav.contact}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <LanguageSwitcher currentLocale={locale} dark />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? nav.closeMenu : nav.openMenu}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-navy-900 xl:hidden">
          <Container className="py-6">
            <nav aria-label={nav.mainNav}>
              {dropdownGroups.map(({ key, group }) => (
                <details key={key} className="border-b border-navy-700 py-3">
                  <summary className="cursor-pointer text-sm font-semibold text-white">
                    {group.label}
                  </summary>
                  <div className="mt-3 space-y-4 pb-2 ps-2">
                    {group.columns?.map((column) => (
                      <div key={column.title}>
                        <p className="text-overline mb-2 text-blue-400">
                          {column.title}
                        </p>
                        <ul className="space-y-2">
                          {column.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={localizedPath(locale, link.href)}
                                className="text-sm text-neutral-200 hover:text-white"
                                onClick={() => setMobileOpen(false)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
              {simpleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-navy-700 py-3 text-sm font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Button
                href={getQuoteUrl(locale)}
                variant="primary"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                {nav.requestQuote}
              </Button>
              <Button
                href={localizedPath(locale, nav.paths.enroll)}
                variant="outline-white"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                {nav.enroll}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
