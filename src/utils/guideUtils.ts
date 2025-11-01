import { guides } from "../data/guides";
import type { Guide } from "../types/fragrance.types";

export const getFeaturedGuides = (count: number = 4): Guide[] => {
  return guides.slice(0, count);
};

export const getGuideBySlug = (slug: string): Guide | undefined => {
  return guides.find((g) => g.slug === slug);
};

export const getGuidesByCategory = (category: string): Guide[] => {
  return guides.filter((g) => g.category === category);
};
