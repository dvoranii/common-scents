import React, { useMemo, useState } from "react";
import SearchAndFilter, {
  type TagGroup,
} from "../../../components/SearchAndFilter/SearchAndFilter";
import { guides } from "../../../data/guides";
import type { Guide as GuideItem } from "../../../types/fragrance.types";
import {
  HeroSection,
  HeroContent,
  LogoContainer,
  MainTitle,
  TitleContainer,
  Tagline,
  Section,
  SectionContent,
  PrimaryButton,
  ButtonGroup,
} from "../../../styles/CommonStyles";
import {
  ContentGrid,
  ContentCard,
  ContentTitle,
  TextWrapper,
  ContentDescription,
  DateTimeText,
  DateTimeWrapper,
} from "../../../styles/shared/ContentListing.styled";
import CommonScentsLogo from "../../../assets/cs-bulb.png";

const Guides: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const tagGroups: TagGroup[] = useMemo(() => {
    const topicsMap = new Map<string, number>();
    const tagsMap = new Map<string, number>();

    guides.forEach((item) => {
      item.topics?.forEach((topic) => {
        topicsMap.set(topic, (topicsMap.get(topic) || 0) + 1);
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
          color: "#3b82f6",
        })),
      },
      {
        title: "Tags",
        tags: Array.from(tagsMap.entries()).map(([name, count]) => ({
          name,
          count,
          color: "#10b981",
        })),
      },
    ];
  }, []);

  const getTagColor = (tagName: string): string => {
    for (const group of tagGroups) {
      const tag = group.tags.find((t) => t.name === tagName);
      if (tag) return tag.color;
    }
    return "#6b7280";
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <HeroSection>
        <HeroContent>
          <LogoContainer>
            <img src={CommonScentsLogo} alt="Common Scents Logo" />
          </LogoContainer>

          <TitleContainer>
            <MainTitle $center>Fragrance Tips & Guides</MainTitle>
            <Tagline>Practical advice for every fragrance enthusiast.</Tagline>
          </TitleContainer>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionContent>
          <SearchAndFilter<GuideItem>
            items={guides}
            tagGroups={tagGroups}
            searchPlaceholder="Search guides..."
            getSearchableText={(item) => [item.title, item.description]}
            getItemTags={(item) => [
              ...(item.topics || []),
              ...(item.tags || []),
            ]}
            getTagColor={getTagColor}
            renderResults={(filteredItems) => {
              const displayedItems = filteredItems.slice(0, visibleCount);
              const hasMoreItems = visibleCount < filteredItems.length;

              return (
                <>
                  <ContentGrid>
                    {displayedItems.map((item) => (
                      <ContentCard key={item.id} to={`/guides/${item.slug}`}>
                        <TextWrapper>
                          <ContentTitle>{item.title}</ContentTitle>
                          <ContentDescription>
                            {item.description}
                          </ContentDescription>
                        </TextWrapper>
                        {(item.date || item.time) && (
                          <DateTimeWrapper>
                            {item.date && (
                              <DateTimeText>{item.date}</DateTimeText>
                            )}
                            {item.time && (
                              <DateTimeText>{item.time}</DateTimeText>
                            )}
                            {(item.date || item.time) && (
                              <DateTimeText>(EST)</DateTimeText>
                            )}
                          </DateTimeWrapper>
                        )}
                      </ContentCard>
                    ))}
                  </ContentGrid>

                  {hasMoreItems && (
                    <ButtonGroup>
                      <PrimaryButton onClick={handleSeeMore}>
                        See More ({filteredItems.length - visibleCount}{" "}
                        remaining)
                      </PrimaryButton>
                    </ButtonGroup>
                  )}
                </>
              );
            }}
          />
        </SectionContent>
      </Section>
    </>
  );
};

export default Guides;
