import { occasions } from "../data/occasions";
import type { Occasion } from "../types/fragrance.types";
import { getFeaturedItems, findBySlug } from "./helpers";

export interface OccasionSummary {
  name: string;
  slug: string;
  video?: string;
  thumbnail?: string;
  description: string;
}

export const getOccasionSummaries = (): OccasionSummary[] => {
  return occasions.map(({ name, slug, video, thumbnail, description }) => ({
    name,
    slug,
    video,
    thumbnail,
    description,
  }));
};

export const getFeaturedOccasions = (count: number = 8): Occasion[] => {
  return getFeaturedItems(occasions, count);
};

export const getOccasionBySlug = (slug: string): Occasion | undefined => {
  return findBySlug(occasions, slug);
};

export const getAllOccasions = (): Occasion[] => {
  return occasions;
};

export const getFragranceOccasions = (occasionSlugs?: string[]): Occasion[] => {
  if (!occasionSlugs || occasionSlugs.length === 0) return [];

  return occasionSlugs
    .map((slug) => getOccasionBySlug(slug))
    .filter((occasion): occasion is Occasion => occasion !== undefined);
};
