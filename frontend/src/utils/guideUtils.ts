import { guides } from "../data/guides";
import type { Guide } from "../types/fragrance.types";
import type { GuideSummary } from "../types/summaries.types";
import { getFeaturedItems, findBySlug, filterByField } from "./helpers";

export const getFeaturedGuideSummaries = (
  count: number = 4
): GuideSummary[] => {
  return guides.slice(0, count).map((guide) => ({
    id: guide.id,
    slug: guide.slug,
    title: guide.title,
    author: guide.author,
    date: guide.date,
  }));
};

export const getFeaturedGuides = (count: number = 4): Guide[] => {
  return getFeaturedItems(guides, count);
};

export const getGuideBySlug = (slug: string): Guide | undefined => {
  return findBySlug(guides, slug);
};

export const getGuidesByCategory = (category: string): Guide[] => {
  return filterByField(guides, "category", category);
};
