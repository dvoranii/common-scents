import { academy } from "../data/academy";
import type { Academy } from "../types/fragrance.types";
import { getFeaturedItems, findBySlug, filterByField } from "./helpers";

export const getFeaturedAcademy = (count: number = 4): Academy[] =>
  getFeaturedItems(academy, count);

export const getAcademyBySlug = (slug: string): Academy | undefined =>
  findBySlug(academy, slug);

export const getAcademyByCategory = (category: string): Academy[] =>
  filterByField(academy, "category", category);
