import { getAllFragrances } from "./fragranceUtils";
import type { Academy, Guide } from "../types/fragrance.types";
import type { TagGroup } from "../types/data.types";

export interface TagData {
  name: string;
  count: number;
  color: string;
  type:
    | "brand"
    | "season"
    | "occasion"
    | "category"
    | "perfumer"
    | "academy"
    | "guide";
}

export const generateTagsFromFragrances = (): TagData[] => {
  const allFragrances = getAllFragrances();
  const tags: TagData[] = [];

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

  const seasonCounts: Record<string, number> = {};
  allFragrances.forEach((fragrance) => {
    fragrance.seasons?.forEach((season) => {
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

  return tags.sort((a, b) => b.count - a.count);
};

export const generateAcademyTagGroups = (
  academyData: Academy[]
): TagGroup[] => {
  const topicsMap = new Map<string, number>();
  const contentTypeMap = new Map<string, number>();
  const tagsMap = new Map<string, number>();

  academyData.forEach((item) => {
    item.topics?.forEach((topic) => {
      topicsMap.set(topic, (topicsMap.get(topic) || 0) + 1);
    });
    item.contentType?.forEach((type) => {
      contentTypeMap.set(type, (contentTypeMap.get(type) || 0) + 1);
    });
    item.tags?.forEach((tag) => {
      tagsMap.set(tag, (tagsMap.get(tag) || 0) + 1);
    });
  });

  const academyColor = "#0ea5e9";

  return [
    {
      title: "Topics",
      tags: Array.from(topicsMap.entries()).map(([name, count]) => ({
        name,
        type: "academy" as const,
        color: academyColor,
        count,
      })),
    },
    {
      title: "Content Type",
      tags: Array.from(contentTypeMap.entries()).map(([name, count]) => ({
        name,
        type: "academy" as const,
        color: academyColor,
        count,
      })),
    },
    {
      title: "Tags",
      tags: Array.from(tagsMap.entries()).map(([name, count]) => ({
        name,
        type: "academy" as const,
        color: academyColor,
        count,
      })),
    },
  ];
};

export const generateGuideTagGroups = (guideData: Guide[]): TagGroup[] => {
  const topicsMap = new Map<string, number>();
  const tagsMap = new Map<string, number>();

  guideData.forEach((item) => {
    item.topics?.forEach((topic) => {
      topicsMap.set(topic, (topicsMap.get(topic) || 0) + 1);
    });
    item.tags?.forEach((tag) => {
      tagsMap.set(tag, (tagsMap.get(tag) || 0) + 1);
    });
  });

  const guideColor = "#84cc16";

  return [
    {
      title: "Topics",
      tags: Array.from(topicsMap.entries()).map(([name, count]) => ({
        name,
        type: "guide" as const,
        color: guideColor,
        count,
      })),
    },
    {
      title: "Tags",
      tags: Array.from(tagsMap.entries()).map(([name, count]) => ({
        name,
        type: "guide" as const,
        color: guideColor,
        count,
      })),
    },
  ];
};

export const getTagColorFromGroups = (
  tagName: string,
  tagGroups: TagGroup[]
): string => {
  for (const group of tagGroups) {
    const tag = group.tags.find((t) => t.name === tagName);
    if (tag) return tag.color;
  }
  return "#6b7280";
};
