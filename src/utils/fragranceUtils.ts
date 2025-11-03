import { fragrances } from "../data/fragrances";
import type { Fragrance } from "../types/fragrance.types";
import { getFeaturedItems, findBySlug, filterByField } from "./helpers";

export const getFeaturedFragrances = (count: number = 3): Fragrance[] =>
  getFeaturedItems(fragrances, count);

export const getFragranceBySlug = (slug: string): Fragrance | undefined =>
  findBySlug(fragrances, slug);

export const getFragrancesByType = (type: string): Fragrance[] =>
  filterByField(fragrances, "type", type);

export const getFragrancesBySeason = (season: string): Fragrance[] =>
  filterByField(fragrances, "season", season);

export const getFragrancesByOccasion = (occasion: string): Fragrance[] =>
  filterByField(fragrances, "occasion", occasion);

export const getAllFragrances = (): Fragrance[] => fragrances;
