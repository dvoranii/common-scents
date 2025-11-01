import { fragrances } from "../data/fragrances";
import type { Fragrance } from "../types/fragrance.types";

export const getFeaturedFragrances = (count: number = 3): Fragrance[] => {
  return fragrances.slice(0, count);
};

export const getFragranceBySlug = (slug: string): Fragrance | undefined => {
  return fragrances.find((f) => f.slug === slug);
};

export const getFragrancesByType = (type: string): Fragrance[] => {
  return fragrances.filter((f) => f.type?.includes(type));
};

export const getFragrancesBySeason = (season: string): Fragrance[] => {
  return fragrances.filter((f) => f.season?.includes(season));
};

export const getFragrancesByOccasion = (occasion: string): Fragrance[] => {
  return fragrances.filter((f) => f.occasion?.includes(occasion));
};

export const getAllFragrances = (): Fragrance[] => {
  return fragrances;
};
