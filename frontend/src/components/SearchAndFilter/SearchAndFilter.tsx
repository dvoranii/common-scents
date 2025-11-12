import { useState, useMemo, useCallback } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import {
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
  TagSectionHeader,
  ClearButton,
} from "./SearchAndFilter.styled";
import { useDebounce } from "../../hooks/useDebounce";

export interface TagGroup {
  title: string;
  tags: Array<{
    name: string;
    count: number;
    color: string;
  }>;
}

export interface SearchAndFilterConfig<T> {
  items: T[];
  tagGroups: TagGroup[];
  getSearchableText: (item: T) => string[];
  getItemTags: (item: T) => string[];
  getTagColor: (tagName: string) => string;
  searchPlaceholder?: string;
  renderResults: (filteredItems: T[]) => React.ReactNode;
}

const SearchAndFilter = <T,>({
  items,
  tagGroups,
  getSearchableText,
  getItemTags,
  getTagColor,
  searchPlaceholder = "Search...",
  renderResults,
}: SearchAndFilterConfig<T>): React.ReactElement => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterMode, setFilterMode] = useState<"ANY" | "ALL">("ANY");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        debouncedSearchQuery === "" ||
        getSearchableText(item).some((text) =>
          text.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
        );

      let matchesTags = true;
      if (selectedTags.length > 0) {
        const itemTags = getItemTags(item);
        if (filterMode === "ANY") {
          matchesTags = selectedTags.some((tag) => itemTags.includes(tag));
        } else {
          matchesTags = selectedTags.every((tag) => itemTags.includes(tag));
        }
      }

      return matchesSearch && matchesTags;
    });
  }, [
    items,
    debouncedSearchQuery,
    selectedTags,
    filterMode,
    getSearchableText,
    getItemTags,
  ]);

  const toggleTag = useCallback((tagName: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagName)
        ? prev.filter((t) => t !== tagName)
        : [...prev, tagName]
    );
  }, []);

  return (
    <>
      <TopControlsWrapper>
        <SearchWrapper>
          <SearchBar
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
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
                        {
                          tagGroups
                            .flatMap((g) => g.tags)
                            .find((t) => t.name === tag)?.count
                        }
                        )
                        <RemoveTagButton
                          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
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

              {tagGroups.map(
                (group) =>
                  group.tags.length > 0 && (
                    <TagSection key={group.title}>
                      <TagSectionTitle>{group.title}</TagSectionTitle>
                      <TagsContainer>
                        {group.tags.map((tag) => {
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
                  )
              )}
            </FilterDropdownContainer>
          )}
        </FilterDropdownWrapper>
      </TopControlsWrapper>

      {renderResults(filteredItems)}
    </>
  );
};

export default SearchAndFilter;
