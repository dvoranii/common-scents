import { academy } from "../data/academy";
import type { Academy } from "../types/fragrance.types";
import { getFeaturedItems, findBySlug, filterByField } from "./helpers";

export const getFeaturedAcademySummaries = (count: number = 4) => {
  return academy.slice(0, count).map((lesson) => ({
    id: lesson.id,
    slug: lesson.slug,
    title: lesson.title,
    date: lesson.date,
  }));
};

export const getFeaturedAcademy = (count: number = 4): Academy[] =>
  getFeaturedItems(academy, count);

export const getAcademyBySlug = (slug: string): Academy | undefined =>
  findBySlug(academy, slug);

export const getAcademyByCategory = (category: string): Academy[] =>
  filterByField(academy, "category", category);
