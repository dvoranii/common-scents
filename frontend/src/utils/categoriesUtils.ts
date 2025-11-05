import { categories } from "../data/categories";
import type { Category } from "../types/fragrance.types";
import { findBySlug } from "./helpers";

export const getAllCategories = (): Category[] => categories;

export const getCategoryBySlug = (slug: string): Category | undefined =>
  findBySlug(categories, slug);
