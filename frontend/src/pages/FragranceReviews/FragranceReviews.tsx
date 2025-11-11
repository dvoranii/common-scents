import { useMemo } from "react";
import { generateTagsFromFragrances } from "../../utils/tagUtils";
import { getAllFragrances } from "../../utils/fragranceUtils";
import SearchAndFilter, {
  type TagGroup,
} from "../../components/SearchAndFilter/SearchAndFilter";
import {
  PageWrapper,
  FragranceGrid,
  FragranceHouse,
  ThumbnailNotes,
  ThumbnailContent,
  FragranceName,
  ThumbnailCard,
  ThumbnailImage,
  NameAndHouseWrapper,
} from "./FragranceReviews.styled";

const FragranceReviews: React.FC = () => {
  const allFragrances = useMemo(() => getAllFragrances(), []);
  const availableTags = useMemo(() => generateTagsFromFragrances(), []);

  const groupedTags = useMemo(() => {
    const groups = {
      brand: availableTags.filter((tag) => tag.type === "brand"),
      season: availableTags.filter((tag) => tag.type === "season"),
      occasion: availableTags.filter((tag) => tag.type === "occasion"),
      category: availableTags.filter((tag) => tag.type === "category"),
    };
    return groups;
  }, [availableTags]);

  const tagGroups: TagGroup[] = useMemo(
    () => [
      { title: "Brands", tags: groupedTags.brand },
      { title: "Seasons", tags: groupedTags.season },
      { title: "Occasions", tags: groupedTags.occasion },
      { title: "Categories", tags: groupedTags.category },
    ],
    [groupedTags]
  );

  const getSearchableText = (fragrance: (typeof allFragrances)[0]) => {
    return [fragrance.name, fragrance.house];
  };

  const getItemTags = (fragrance: (typeof allFragrances)[0]) => {
    return [
      fragrance.house,
      ...(fragrance.season || []),
      ...(fragrance.occasion || []),
      ...(fragrance.category || []),
    ];
  };

  const getTagColor = (tagName: string) => {
    return availableTags.find((t) => t.name === tagName)?.color || "#6b7280";
  };

  const renderResults = (filteredFragrances: typeof allFragrances) => (
    <PageWrapper>
      <FragranceGrid>
        {filteredFragrances.map((fragrance) => (
          <ThumbnailCard
            key={fragrance.id}
            to={`/fragrance-reviews/${fragrance.slug}`}
          >
            <ThumbnailImage
              src={fragrance.thumbnailImage}
              alt={fragrance.name}
            />
            <ThumbnailContent>
              <NameAndHouseWrapper>
                <FragranceHouse>{fragrance.house}</FragranceHouse>
                <FragranceName>{fragrance.name}</FragranceName>
              </NameAndHouseWrapper>

              {fragrance.notes && (
                <ThumbnailNotes>
                  {fragrance.notes.top
                    .slice(0, 3)
                    .map((note) => note.name)
                    .join(" • ")}
                </ThumbnailNotes>
              )}
            </ThumbnailContent>
          </ThumbnailCard>
        ))}
      </FragranceGrid>
    </PageWrapper>
  );

  const renderSummary = (
    filteredCount: number,
    totalCount: number,
    selectedTagCount: number,
    mode: "ANY" | "ALL"
  ) => (
    <>
      Showing {filteredCount} of {totalCount} fragrances
      {selectedTagCount > 0 && (
        <>
          {" "}
          • Filtering by {selectedTagCount} tag
          {selectedTagCount !== 1 ? "s" : ""} (
          {mode === "ANY" ? "matching any" : "matching all"})
        </>
      )}
    </>
  );

  return (
    <SearchAndFilter
      items={allFragrances}
      tagGroups={tagGroups}
      getSearchableText={getSearchableText}
      getItemTags={getItemTags}
      getTagColor={getTagColor}
      searchPlaceholder="Search by name or brand..."
      renderResults={renderResults}
      renderSummary={renderSummary}
    />
  );
};

export default FragranceReviews;
