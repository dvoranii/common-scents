import { occasions } from "../data/occasions";
import type { Occasion } from "../types/fragrance.types";
import { getFeaturedItems, findBySlug } from "./helpers";

export const getFeaturedOccasions = (count: number = 8): Occasion[] => {
  return getFeaturedItems(occasions, count);
};

export const getOccasionBySlug = (slug: string): Occasion | undefined => {
  return findBySlug(occasions, slug);
};

export const getAllOccasions = (): Occasion[] => {
  return occasions;
};
