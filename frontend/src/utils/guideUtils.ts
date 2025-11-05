import { guides } from "../data/guides";
import type { Guide } from "../types/fragrance.types";
import { getFeaturedItems, findBySlug, filterByField } from "./helpers";

export const getFeaturedGuides = (count: number = 4): Guide[] => {
  return getFeaturedItems(guides, count);
};

export const getGuideBySlug = (slug: string): Guide | undefined => {
  return findBySlug(guides, slug);
};

export const getGuidesByCategory = (category: string): Guide[] => {
  return filterByField(guides, "category", category);
};
