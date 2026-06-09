import { getPublishedTestimonials } from "@/lib/firestore/testimonials-repository";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { PublicTestimonialItem } from "@/lib/firestore/testimonials-types";

export async function getTestimonialsServer(
  locale: Locale,
  dictionary: Dictionary,
): Promise<PublicTestimonialItem[]> {
  try {
    const fromFirestore = await getPublishedTestimonials(locale);
    if (fromFirestore.length > 0) return fromFirestore;
  } catch {
    /* fallback */
  }
  return dictionary.testimonials.items.map((item, index) => ({
    id: `static-${index}`,
    quote: item.quote,
    attribution: item.attribution,
    role: item.role,
    organization: item.organization,
    division: item.division,
  }));
}
