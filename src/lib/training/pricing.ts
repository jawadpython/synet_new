export const COURSE_PRICE_TIER_IDS = ["level-1", "level-2", "level-3"] as const;

export type CoursePriceTierId = (typeof COURSE_PRICE_TIER_IDS)[number];

export type CoursePriceTier = {
  id: CoursePriceTierId;
  price: string;
};

export const DEFAULT_PRICE_TIER_AMOUNTS: Record<CoursePriceTierId, string> = {
  "level-1": "800 DH",
  "level-2": "1 500 DH",
  "level-3": "2 000 DH",
};

export function defaultPriceTiers(): CoursePriceTier[] {
  return COURSE_PRICE_TIER_IDS.map((id) => ({
    id,
    price: DEFAULT_PRICE_TIER_AMOUNTS[id],
  }));
}

export function isCoursePriceTierId(value: string): value is CoursePriceTierId {
  return COURSE_PRICE_TIER_IDS.includes(value as CoursePriceTierId);
}

export function normalizePriceTiers(tiers?: CoursePriceTier[] | null): CoursePriceTier[] {
  const defaults = defaultPriceTiers();
  if (!tiers?.length) return defaults;
  return defaults.map((tier) => {
    const match = tiers.find((item) => item.id === tier.id);
    const price = match?.price?.trim();
    return { id: tier.id, price: price || tier.price };
  });
}

export function startingPrice(tiers?: CoursePriceTier[] | null): string {
  return normalizePriceTiers(tiers)[0].price;
}

export function priceRangeLabel(tiers?: CoursePriceTier[] | null): string {
  const normalized = normalizePriceTiers(tiers);
  return `${normalized[0].price} – ${normalized[2].price}`;
}

export function applyCoursePricing<T extends { price: string; priceTiers?: CoursePriceTier[] }>(
  course: T,
): T & { priceTiers: CoursePriceTier[]; price: string } {
  const priceTiers = normalizePriceTiers(course.priceTiers);
  return {
    ...course,
    priceTiers,
    price: startingPrice(priceTiers),
  };
}
