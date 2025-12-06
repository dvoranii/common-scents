import { getAllFragrances } from "./fragranceUtils";
export interface TagData {
  name: string;
  count: number;
  color: string;
  type: "brand" | "season" | "occasion" | "category" | "perfumer";
}

export const generateTagsFromFragrances = (): TagData[] => {
  const allFragrances = getAllFragrances();
  const tags: TagData[] = [];

  // Brand/House tags
  const brandCounts: Record<string, number> = {};
  allFragrances.forEach((fragrance) => {
    brandCounts[fragrance.house] = (brandCounts[fragrance.house] || 0) + 1;
  });

  Object.entries(brandCounts).forEach(([brand, count]) => {
    tags.push({
      name: brand,
      count,
      color: "#3b82f6",
      type: "brand",
    });
  });

  // Perfumer tags
  const perfumerCounts: Record<string, number> = {};
  allFragrances.forEach((fragrance) => {
    fragrance.perfumers?.forEach((perfumer) => {
      perfumerCounts[perfumer.name] = (perfumerCounts[perfumer.name] || 0) + 1;
    });
  });

  Object.entries(perfumerCounts).forEach(([perfumer, count]) => {
    tags.push({
      name: perfumer,
      count,
      color: "#ec4899",
      type: "perfumer",
    });
  });

  // Season tags
  const seasonCounts: Record<string, number> = {};
  allFragrances.forEach((fragrance) => {
    fragrance.season?.forEach((season) => {
      seasonCounts[season] = (seasonCounts[season] || 0) + 1;
    });
  });

  Object.entries(seasonCounts).forEach(([season, count]) => {
    tags.push({
      name: season,
      count,
      color: "#16a34a",
      type: "season",
    });
  });

  // Occasion tags
  const occasionCounts: Record<string, number> = {};
  allFragrances.forEach((fragrance) => {
    fragrance.occasion?.forEach((occasion) => {
      occasionCounts[occasion] = (occasionCounts[occasion] || 0) + 1;
    });
  });

  Object.entries(occasionCounts).forEach(([occasion, count]) => {
    tags.push({
      name: occasion,
      count,
      color: "#f97316",
      type: "occasion",
    });
  });

  // Category/Type tags
  const categoryCounts: Record<string, number> = {};
  allFragrances.forEach((fragrance) => {
    fragrance.category?.forEach((category) => {
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });
  });

  Object.entries(categoryCounts).forEach(([category, count]) => {
    tags.push({
      name: category,
      count,
      color: "#8b5cf6",
      type: "category",
    });
  });

  return tags.sort((a, b) => b.count - a.count); // Sort by count descending
};
