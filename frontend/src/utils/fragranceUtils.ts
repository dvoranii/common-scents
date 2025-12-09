import { fragrances } from "../data/fragrances";
import { categories } from "../data/categories";
import { occasions } from "../data/occasions";
import type { Category, Fragrance, Occasion } from "../types/fragrance.types";
import { getFeaturedItems, findBySlug, filterByField } from "./helpers";

export const getFeaturedFragrances = (count: number = 3): Fragrance[] =>
  getFeaturedItems(fragrances, count);

export const getFragranceBySlug = (slug: string): Fragrance | undefined =>
  findBySlug(fragrances, slug);

export const getFragrancesByType = (type: string): Fragrance[] =>
  filterByField(fragrances, "category", type);

export const getFragranceCategories = (categorySlugs: string[]): Category[] => {
  return categorySlugs
    .map((slug) => categories.find((cat) => cat.slug === slug))
    .filter((cat): cat is Category => !!cat);
};

export const getFragranceOccasions = (occasionNames: string[]): Occasion[] => {
  return occasionNames
    .map((name) => occasions.find((occ) => occ.name === name))
    .filter((occ): occ is Occasion => !!occ);
};

export const getFragrancesBySeason = (season: string): Fragrance[] =>
  filterByField(fragrances, "seasons", season);

export const getFragrancesByOccasion = (occasion: string): Fragrance[] =>
  filterByField(fragrances, "occasion", occasion);

export const getAllFragrances = (): Fragrance[] => fragrances;
