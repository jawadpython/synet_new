import type { CourseCategory } from "./types";

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

export const CATEGORY_PRICE_TIER_AMOUNTS: Record<
  CourseCategory,
  Record<CoursePriceTierId, string>
> = {
  networking: DEFAULT_PRICE_TIER_AMOUNTS,
  linux: {
    "level-1": "1 000 DH",
    "level-2": "1 800 DH",
    "level-3": "2 400 DH",
  },
  microsoft: {
    "level-1": "1 000 DH",
    "level-2": "1 800 DH",
    "level-3": "2 400 DH",
  },
  cloud: {
    "level-1": "1 200 DH",
    "level-2": "2 000 DH",
    "level-3": "2 600 DH",
  },
  cybersecurity: {
    "level-1": "1 200 DH",
    "level-2": "2 200 DH",
    "level-3": "2 800 DH",
  },
  sap: {
    "level-1": "1 500 DH",
    "level-2": "2 400 DH",
    "level-3": "3 200 DH",
  },
  corporate: {
    "level-1": "1 500 DH",
    "level-2": "2 500 DH",
    "level-3": "3 500 DH",
  },
};

export function defaultPriceTiers(category: CourseCategory = "networking"): CoursePriceTier[] {
  const amounts = CATEGORY_PRICE_TIER_AMOUNTS[category] ?? DEFAULT_PRICE_TIER_AMOUNTS;
  return COURSE_PRICE_TIER_IDS.map((id) => ({
    id,
    price: amounts[id],
  }));
}

export function isCoursePriceTierId(value: string): value is CoursePriceTierId {
  return COURSE_PRICE_TIER_IDS.includes(value as CoursePriceTierId);
}

export function categoryFromSlug(slug: string): CourseCategory {
  const value = slug.toLowerCase();
  if (value.includes("reseau") || value.includes("network")) return "networking";
  if (value.includes("linux")) return "linux";
  if (value.includes("cyber")) return "cybersecurity";
  if (value.includes("cloud")) return "cloud";
  if (value.includes("sap")) return "sap";
  if (value.includes("microsoft")) return "microsoft";
  return "corporate";
}

function tiersMatch(left: CoursePriceTier[], right: CoursePriceTier[]): boolean {
  return COURSE_PRICE_TIER_IDS.every((id) => {
    const a = left.find((tier) => tier.id === id)?.price.trim();
    const b = right.find((tier) => tier.id === id)?.price.trim();
    return Boolean(a) && a === b;
  });
}

export function normalizePriceTiers(
  tiers?: CoursePriceTier[] | null,
  category: CourseCategory = "networking",
): CoursePriceTier[] {
  const categoryDefaults = defaultPriceTiers(category);
  if (!tiers?.length) return categoryDefaults;

  const filled = categoryDefaults.map((tier) => {
    const match = tiers.find((item) => item.id === tier.id);
    const price = match?.price?.trim();
    return { id: tier.id, price: price || tier.price };
  });

  if (category !== "networking" && tiersMatch(filled, defaultPriceTiers("networking"))) {
    return categoryDefaults;
  }

  return filled;
}

export function startingPrice(
  tiers?: CoursePriceTier[] | null,
  category: CourseCategory = "networking",
): string {
  return normalizePriceTiers(tiers, category)[0].price;
}

export function priceRangeLabel(
  tiers?: CoursePriceTier[] | null,
  category: CourseCategory = "networking",
): string {
  const normalized = normalizePriceTiers(tiers, category);
  return `${normalized[0].price} – ${normalized[2].price}`;
}

export function applyCoursePricing<
  T extends { price: string; category?: CourseCategory; priceTiers?: CoursePriceTier[] },
>(course: T): T & { priceTiers: CoursePriceTier[]; price: string } {
  const priceTiers = normalizePriceTiers(course.priceTiers, course.category);
  return {
    ...course,
    priceTiers,
    price: priceTiers[0].price,
  };
}
