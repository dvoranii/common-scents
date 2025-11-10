import React, { useMemo, useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { generateTagsFromFragrances } from "../../utils/tagUtils";
import { getAllFragrances } from "../../utils/fragranceUtils";
import {
  PageWrapper,
  TopControlsWrapper,
  SearchWrapper,
  SearchBar,
  SearchBarButton,
  FilterDropdownButton,
  FilterDropdownWrapper,
  FilterDropdownContainer,
  FilterModeSection,
  FilterModeLabel,
  FilterModeButtons,
  ModeButton,
  TagSection,
  TagSectionTitle,
  TagsContainer,
  Tag,
  RemoveTagButton,
  ActiveFiltersSummary,
  FilterSummaryText,
  ClearButton,
  TagSectionHeader,
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
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterMode, setFilterMode] = useState<"ANY" | "ALL">("ANY");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

  const filteredFragrances = useMemo(() => {
    return allFragrances.filter((fragrance) => {
      const matchesSearch =
        searchQuery === "" ||
        fragrance.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fragrance.house.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesTags = true;
      if (selectedTags.length > 0) {
        if (filterMode === "ANY") {
          matchesTags = selectedTags.some(
            (tag) =>
              fragrance.house === tag ||
              fragrance.season?.includes(tag) ||
              fragrance.occasion?.includes(tag) ||
              fragrance.category?.includes(tag)
          );
        } else {
          matchesTags = selectedTags.every(
            (tag) =>
              fragrance.house === tag ||
              fragrance.season?.includes(tag) ||
              fragrance.occasion?.includes(tag) ||
              fragrance.category?.includes(tag)
          );
        }
      }
      return matchesSearch && matchesTags;
    });
  }, [allFragrances, searchQuery, selectedTags, filterMode]);

  const toggleTag = (tagName: string) => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter((t) => t !== tagName));
    } else {
      setSelectedTags([...selectedTags, tagName]);
    }
  };

  const getTagColor = (tagName: string) => {
    return availableTags.find((t) => t.name === tagName)?.color || "#6b7280";
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  const hasActiveFilters = searchQuery !== "" || selectedTags.length > 0;

  return (
    <>
      <TopControlsWrapper>
        <SearchWrapper>
          <SearchBar
            type="text"
            placeholder="Search by name or brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchBarButton>
            <Search size={18} />
          </SearchBarButton>
        </SearchWrapper>

        <FilterDropdownWrapper>
          <FilterDropdownButton
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            $isOpen={isFilterOpen}
          >
            Filter by Tags
            {isFilterOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </FilterDropdownButton>

          {isFilterOpen && (
            <FilterDropdownContainer>
              <FilterModeSection>
                <FilterModeLabel>Filter Mode:</FilterModeLabel>
                <FilterModeButtons>
                  <ModeButton
                    $isActive={filterMode === "ANY"}
                    onClick={() => setFilterMode("ANY")}
                  >
                    ANY (OR)
                  </ModeButton>
                  <ModeButton
                    $isActive={filterMode === "ALL"}
                    onClick={() => setFilterMode("ALL")}
                  >
                    ALL (AND)
                  </ModeButton>
                </FilterModeButtons>
              </FilterModeSection>

              {selectedTags.length > 0 && (
                <TagSection $hasBorder>
                  <TagSectionHeader>
                    <ClearButton onClick={() => setSelectedTags([])}>
                      Clear All
                    </ClearButton>
                  </TagSectionHeader>
                  <TagSectionTitle>Selected Tags</TagSectionTitle>
                  <TagsContainer>
                    {selectedTags.map((tag) => (
                      <Tag
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        $color={getTagColor(tag)}
                        $isSelected={true}
                      >
                        {tag} (
                        {availableTags.find((t) => t.name === tag)?.count})
                        <RemoveTagButton
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTag(tag);
                          }}
                          aria-label={`Remove ${tag} filter`}
                        >
                          ×
                        </RemoveTagButton>
                      </Tag>
                    ))}
                  </TagsContainer>
                </TagSection>
              )}

              {/* Organized Tag Sections */}
              {groupedTags.brand.length > 0 && (
                <TagSection>
                  <TagSectionTitle>Brands</TagSectionTitle>
                  <TagsContainer>
                    {groupedTags.brand.map((tag) => {
                      const isSelected = selectedTags.includes(tag.name);
                      return (
                        <Tag
                          key={tag.name}
                          onClick={() => toggleTag(tag.name)}
                          $color={tag.color}
                          $isSelected={isSelected}
                        >
                          {tag.name} ({tag.count})
                        </Tag>
                      );
                    })}
                  </TagsContainer>
                </TagSection>
              )}

              {groupedTags.season.length > 0 && (
                <TagSection>
                  <TagSectionTitle>Seasons</TagSectionTitle>
                  <TagsContainer>
                    {groupedTags.season.map((tag) => {
                      const isSelected = selectedTags.includes(tag.name);
                      return (
                        <Tag
                          key={tag.name}
                          onClick={() => toggleTag(tag.name)}
                          $color={tag.color}
                          $isSelected={isSelected}
                        >
                          {tag.name} ({tag.count})
                        </Tag>
                      );
                    })}
                  </TagsContainer>
                </TagSection>
              )}

              {groupedTags.occasion.length > 0 && (
                <TagSection>
                  <TagSectionTitle>Occasions</TagSectionTitle>
                  <TagsContainer>
                    {groupedTags.occasion.map((tag) => {
                      const isSelected = selectedTags.includes(tag.name);
                      return (
                        <Tag
                          key={tag.name}
                          onClick={() => toggleTag(tag.name)}
                          $color={tag.color}
                          $isSelected={isSelected}
                        >
                          {tag.name} ({tag.count})
                        </Tag>
                      );
                    })}
                  </TagsContainer>
                </TagSection>
              )}

              {groupedTags.category.length > 0 && (
                <TagSection>
                  <TagSectionTitle>Categories</TagSectionTitle>
                  <TagsContainer>
                    {groupedTags.category.map((tag) => {
                      const isSelected = selectedTags.includes(tag.name);
                      return (
                        <Tag
                          key={tag.name}
                          onClick={() => toggleTag(tag.name)}
                          $color={tag.color}
                          $isSelected={isSelected}
                        >
                          {tag.name} ({tag.count})
                        </Tag>
                      );
                    })}
                  </TagsContainer>
                </TagSection>
              )}
            </FilterDropdownContainer>
          )}
        </FilterDropdownWrapper>
      </TopControlsWrapper>

      <PageWrapper>
        {selectedTags.length > 0 && (
          <ActiveFiltersSummary>
            <FilterSummaryText>
              {hasActiveFilters && (
                <>
                  Showing {filteredFragrances.length} of {allFragrances.length}{" "}
                  fragrances
                  {selectedTags.length > 0 && (
                    <>
                      {" "}
                      • Filtering by {selectedTags.length} tag
                      {selectedTags.length !== 1 ? "s" : ""} (
                      {filterMode === "ANY" ? "matching any" : "matching all"})
                    </>
                  )}
                </>
              )}
            </FilterSummaryText>
            <ClearButton onClick={clearAllFilters} style={{ marginTop: "8px" }}>
              Clear All Filters
            </ClearButton>

            <TagsContainer style={{ marginTop: "8px" }}>
              {selectedTags.map((tag) => (
                <Tag
                  key={tag}
                  $color={getTagColor(tag)}
                  $isSelected={true}
                  $isSmall
                >
                  {tag}
                  <RemoveTagButton
                    $isSmall
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTag(tag);
                    }}
                    aria-label={`Remove ${tag} filter`}
                  >
                    ×
                  </RemoveTagButton>
                </Tag>
              ))}
            </TagsContainer>
          </ActiveFiltersSummary>
        )}

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
                {/* <FragranceGender>{fragrance.gender}</FragranceGender> */}

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

        {filteredFragrances.length === 0 && (
          <div
            style={{ textAlign: "center", padding: "48px", color: "#6b7280" }}
          >
            No fragrances found matching your search and filters.
            <br />
            <ClearButton
              onClick={clearAllFilters}
              style={{ marginTop: "16px" }}
            >
              Clear All Filters
            </ClearButton>
          </div>
        )}
      </PageWrapper>
    </>
  );
};

export default FragranceReviews;
