"use client";

import {
  GoogleAnalytics as NextGoogleAnalytics,
  sendGAEvent,
} from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

/** Public GA4 measurement ID (not a secret). Override with NEXT_PUBLIC_GA_MEASUREMENT_ID. */
const FALLBACK_GA_ID = "G-GLJBCK98EK";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || FALLBACK_GA_ID;

function isValidGaId(id: string): boolean {
  return /^G-[A-Z0-9]+$/i.test(id);
}

function pagePath(pathname: string, search: string): string {
  return search ? `${pathname}?${search}` : pathname;
}

/**
 * gtag('config') already sends the first page_view. This sends later App Router
 * navigations so catalog, course, and locale switches are counted.
 */
function GaPageViews({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;

    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    sendGAEvent("config", gaId, {
      page_path: pagePath(pathname, searchParams.toString()),
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [gaId, pathname, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  const pathname = usePathname();

  if (!isValidGaId(GA_MEASUREMENT_ID)) return null;
  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <NextGoogleAnalytics
        gaId={GA_MEASUREMENT_ID}
        debugMode={process.env.NEXT_PUBLIC_GA_DEBUG === "true"}
      />
      <Suspense fallback={null}>
        <GaPageViews gaId={GA_MEASUREMENT_ID} />
      </Suspense>
    </>
  );
}
