import type { Fragrance } from "../types/fragrance.types";
import type { Tag, TagGroup } from "../types/data.types";

export const groupTagsByType = (availableTags: Tag[]) => {
  const groups = {
    brand: availableTags.filter((tag) => tag.type === "brand"),
    perfumer: availableTags.filter((tag) => tag.type === "perfumer"),
    season: availableTags.filter((tag) => tag.type === "season"),
    occasion: availableTags.filter((tag) => tag.type === "occasion"),
    category: availableTags.filter((tag) => tag.type === "category"),
  };
  return groups;
};

export const convertToTagGroups = (
  groupedTags: ReturnType<typeof groupTagsByType>
): TagGroup[] => {
  return [
    { title: "Brands", tags: groupedTags.brand },
    { title: "Perfumers", tags: groupedTags.perfumer },
    { title: "Seasons", tags: groupedTags.season },
    { title: "Occasions", tags: groupedTags.occasion },
    { title: "Categories", tags: groupedTags.category },
  ];
};

export const getFragranceSearchableText = (fragrance: Fragrance): string[] => {
  return [fragrance.name, fragrance.house, fragrance.description || ""];
};

export const getFragranceItemTags = (fragrance: Fragrance): string[] => {
  const perfumerNames = fragrance.perfumers?.map((p) => p.name) || [];
  return [
    fragrance.house,
    ...perfumerNames,
    ...(fragrance.seasons || []),
    ...(fragrance.occasion || []),
    ...(fragrance.category || []),
  ];
};

export const getTagColorByName = (
  tagName: string,
  availableTags: Tag[]
): string => {
  return availableTags.find((t) => t.name === tagName)?.color || "#6b7280";
};

export const getFragranceTopNotes = (fragrance: Fragrance): string => {
  if (!fragrance.notes) return "";

  const topNotes = fragrance.notes.top.slice(0, 3).map((note) => note.name);
  const displayedNotes = [...topNotes];

  if (displayedNotes.length < 3 && fragrance.notes.middle.length > 0) {
    displayedNotes.push(fragrance.notes.middle[0].name);
  }

  return displayedNotes.slice(0, 3).join(" • ");
};
