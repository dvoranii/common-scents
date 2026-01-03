import React, { useMemo, useState } from "react";
import SearchAndFilter from "../../../components/SearchAndFilter/SearchAndFilter";
import {
  generateGuideTagGroups,
  getTagColorFromGroups,
} from "../../../utils/tagUtils";
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
import CommonScentsLogo from "/assets/images/cs-bulb.webp";
import { SEO } from "../../../components/SEO/SEO";

const Guides: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Common Scents: Smart Fragrance Guides",
    description:
      "Expert advice from a 70+ bottle collection. Learn the truth about top notes, the economics of travel atomizers, and why layering is a mistake.",
    url: "https://commonscentshq.com/guides",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.slice(0, 10).map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "HowTo",
          name: item.title,
          description: item.description,
          url: `https://commonscentshq.com/guides/${item.slug}`,
        },
      })),
    },
  };

  const tagGroups = useMemo(() => {
    return generateGuideTagGroups(guides);
  }, []);

  const getTagColor = (tagName: string): string => {
    return getTagColorFromGroups(tagName, tagGroups);
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <SEO
        title="Fragrance Tips & Guides | The Smart Way to Build a Collection"
        description="Move beyond the mall-counter hype. Master the 3-day wear rule, understand skin chemistry, and learn why longevity isn't everything."
        canonical="https://commonscentshq.com/guides"
        image="https://commonscentshq.com/og-guides.jpg"
        structuredData={structuredData}
      />

      <HeroSection>
        <HeroContent $padding>
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
        <SectionContent $animate>
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
