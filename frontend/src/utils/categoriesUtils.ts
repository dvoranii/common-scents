import { categories } from "../data/categories";
import type { Category } from "../types/fragrance.types";
import { findBySlug } from "./helpers";
import type { LucideIcon } from "lucide-react";

export interface CategorySummary {
  name: string;
  slug: string;
  icon: LucideIcon;
  iconBg?: string;
  iconColor?: string;
}

export const getCategorySummaries = (): CategorySummary[] => {
  return categories.map(({ name, slug, icon, iconBg, iconColor }) => ({
    name,
    slug,
    icon,
    iconBg,
    iconColor,
  }));
};

export const getAllCategories = (): Category[] => categories;

export const getCategoryBySlug = (slug: string): Category | undefined =>
  findBySlug(categories, slug);
