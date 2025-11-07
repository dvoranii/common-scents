import React, { useMemo, useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { generateTagsFromFragrances } from "../../utils/tagUtils";
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
  ContentPlaceholder,
  ClearButton,
  TagSectionHeader,
} from "./FragranceReviews.styled";

const FragranceReviews: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterMode, setFilterMode] = useState<"ANY" | "ALL">("ANY");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

  return (
    <PageWrapper>
      <TopControlsWrapper>
        <SearchWrapper>
          <SearchBar
            type="text"
            placeholder="Search..."
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

      {selectedTags.length > 0 && (
        <ActiveFiltersSummary>
          <FilterSummaryText>
            Filtering by {selectedTags.length} tag
            {selectedTags.length !== 1 ? "s" : ""} (
            {filterMode === "ANY" ? "matching any" : "matching all"}):
          </FilterSummaryText>
          <TagsContainer>
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

      <ContentPlaceholder>
        Your fragrance reviews will appear here
      </ContentPlaceholder>
    </PageWrapper>
  );
};

export default FragranceReviews;
