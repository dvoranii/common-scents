import React, { useMemo } from "react";
import ContentListingTemplate from "../../components/ContentListingTemplate/ContentListingTemplate";
import SearchAndFilter, {
  type TagGroup,
} from "../../components/SearchAndFilter/SearchAndFilter";
import { academy } from "../../data/academy";
import type { Academy as AcademyItem } from "../../types/fragrance.types";

const Academy: React.FC = () => {
  const tagGroups: TagGroup[] = useMemo(() => {
    const topicsMap = new Map<string, number>();
    const contentTypeMap = new Map<string, number>();
    const tagsMap = new Map<string, number>();

    academy.forEach((item) => {
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

    return [
      {
        title: "Topics",
        tags: Array.from(topicsMap.entries()).map(([name, count]) => ({
          name,
          count,
          color: "#3b82f6", // Blue
        })),
      },
      {
        title: "Content Type",
        tags: Array.from(contentTypeMap.entries()).map(([name, count]) => ({
          name,
          count,
          color: "#8b5cf6", // Purple
        })),
      },
      {
        title: "Tags",
        tags: Array.from(tagsMap.entries()).map(([name, count]) => ({
          name,
          count,
          color: "#10b981", // Green
        })),
      },
    ];
  }, []);

  // Helper function to get color for any tag
  const getTagColor = (tagName: string): string => {
    for (const group of tagGroups) {
      const tag = group.tags.find((t) => t.name === tagName);
      if (tag) return tag.color;
    }
    return "#6b7280"; // Default gray
  };

  return (
    <>
      <SearchAndFilter<AcademyItem>
        items={academy}
        tagGroups={tagGroups}
        searchPlaceholder="Search articles..."
        getSearchableText={(item) => [item.title, item.description]}
        getItemTags={(item) => [
          ...(item.topics || []),
          ...(item.contentType || []),
          ...(item.tags || []),
        ]}
        getTagColor={getTagColor}
        renderSummary={(filteredCount, totalCount, selectedTagCount, mode) => (
          <>
            Showing {filteredCount} of {totalCount} article
            {totalCount !== 1 ? "s" : ""}
            {selectedTagCount > 0 && (
              <>
                {" "}
                • Filtering by {selectedTagCount} tag
                {selectedTagCount !== 1 ? "s" : ""} (
                {mode === "ANY" ? "matching any" : "matching all"})
              </>
            )}
          </>
        )}
        renderResults={(filteredItems) => (
          <ContentListingTemplate
            title="Fragrance Academy"
            tagline="Practical advice for every fragrance enthusiast."
            items={filteredItems}
            basePath="/acs"
            showLoadMore={true}
            initialVisibleCount={4}
            itemsPerLoad={4}
          />
        )}
      />
    </>
  );
};

export default Academy;
