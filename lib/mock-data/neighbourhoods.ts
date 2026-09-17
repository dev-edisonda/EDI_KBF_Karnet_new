import type { Neighbourhood } from "@/lib/types";

export const NEIGHBOURHOODS: Neighbourhood[] = [
  { slug: "stare-miasto", name_pl: "Stare Miasto", name_en: "Old Town" },
  { slug: "kazimierz", name_pl: "Kazimierz", name_en: "Kazimierz" },
  { slug: "podgorze", name_pl: "Podgórze", name_en: "Podgórze" },
  { slug: "zwierzyniec", name_pl: "Zwierzyniec", name_en: "Zwierzyniec" },
];

export function findNeighbourhood(slug: string): Neighbourhood | undefined {
  return NEIGHBOURHOODS.find((n) => n.slug === slug);
}
