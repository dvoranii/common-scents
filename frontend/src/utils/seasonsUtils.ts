import { seasons } from "../data/seasons";
import type { Season } from "../types/fragrance.types";

export const getAllSeasons = (): Season[] => {
  return seasons;
};

export const getSeasonBySlug = (slug: string): Season | undefined => {
  return seasons.find((season) => season.slug === slug);
};

export const getFragranceSeasons = (seasonNames?: string[]): Season[] => {
  if (!seasonNames || seasonNames.length === 0) return [];

  return seasonNames
    .map((name) => seasons.find((season) => season.name === name))
    .filter((season): season is Season => season !== undefined);
};
