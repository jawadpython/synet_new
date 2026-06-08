import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { ar } from "./dictionaries/ar";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";

const dictionaries: Record<Locale, Dictionary> = { fr, en, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
