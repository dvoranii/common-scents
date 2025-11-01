import { categories } from "../data/categories";
import type { Category } from "../types/fragrance.types";

export const getAllCategories = (): Category[] => {
  return categories;
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((c) => c.slug === slug);
};
