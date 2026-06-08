"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Service } from "@/lib/solutions/types";
import type { Locale } from "@/lib/i18n/config";
import type { BusinessPagesCopy } from "@/lib/i18n/types";
import { filterServices } from "@/lib/solutions/get-services";
import { Input } from "@/components/ui/Input";
import { ServiceCard } from "./ServiceCard";

type ServiceCatalogProps = {
  services: Service[];
  locale: Locale;
  copy: BusinessPagesCopy;
};

export function ServiceCatalog({ services, locale, copy }: ServiceCatalogProps) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => filterServices(services, query), [services, query]);

  return (
    <div>
      <div
        className="rounded-[4px] border border-neutral-200 bg-white p-6"
        role="search"
        aria-label={copy.catalog.searchLabel}
      >
        <label htmlFor="service-search" className="mb-1 block text-sm font-semibold text-neutral-900">
          {copy.catalog.searchLabel}
        </label>
        <div className="relative max-w-xl">
          <Search
            className="pointer-events-none absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500"
            aria-hidden="true"
          />
          <Input
            id="service-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={copy.catalog.searchPlaceholder}
            className="ps-10"
          />
        </div>
      </div>

      <p className="mt-6 text-sm text-neutral-700" aria-live="polite">
        <span className="font-semibold text-navy-800">{filtered.length}</span>{" "}
        {copy.catalog.resultsCount}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-[4px] border border-neutral-200 bg-neutral-50 p-12 text-center">
          <p className="text-neutral-700">{copy.catalog.noResults}</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} locale={locale} copy={copy} />
          ))}
        </div>
      )}
    </div>
  );
}
