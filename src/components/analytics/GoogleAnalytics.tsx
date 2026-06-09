import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * GA4 on the public site only (mounted from [locale]/layout).
 * Disabled in development unless NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
 */
export function GoogleAnalytics() {
  if (!gaId) return null;
  if (process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_GA_DEBUG !== "true") {
    return null;
  }

  return <NextGoogleAnalytics gaId={gaId} />;
}
