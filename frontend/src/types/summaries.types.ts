import type {
  Guide,
  Academy,
  Occasion,
  Category,
  Fragrance,
  Season,
} from "./fragrance.types";

export type GuideSummary = Pick<Guide, "id" | "slug" | "title" | "date"> & {
  author?: string;
};

export type SeasonSummary = Pick<
  Season,
  "name" | "slug" | "image" | "thumbnail" | "description"
> & {
  backgroundColor: string;
  backgroundImage: string;
  desktopDescription: string;
  mobileDescription: string;
};

export type AcademySummary = Pick<Academy, "id" | "slug" | "title" | "date">;

export type OccasionSummary = Pick<
  Occasion,
  "name" | "slug" | "video" | "thumbnail" | "description"
>;

export type CategorySummary = Pick<
  Category,
  "name" | "slug" | "icon" | "iconBg" | "iconColor"
>;

export type FragranceSummary = Pick<
  Fragrance,
  | "id"
  | "slug"
  | "name"
  | "house"
  | "shortDescription"
  | "thumbnailDesktop"
  | "thumbnailMobile"
>;
