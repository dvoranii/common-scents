import React, { useMemo, useState } from "react";
import SearchAndFilter from "../../../components/SearchAndFilter/SearchAndFilter";
import type { TagGroup } from "../../../types/data.types";
import { academy } from "../../../data/academy";
import type { Academy as AcademyItem } from "../../../types/fragrance.types";
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
import {
  generateAcademyTagGroups,
  getTagColorFromGroups,
} from "../../../utils/tagUtils";

const Academy: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Common Scents Academy",
    description:
      "Deep-dive educational resources on the physics of scent, molecular volatility, and the architecture of sillage.",
    url: "https://commonscentshq.com/academy",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: academy.slice(0, 10).map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          headline: item.title,
          description: item.description,
          url: `https://commonscentshq.com/academy/${item.slug}`,
        },
      })),
    },
  };

  const tagGroups: TagGroup[] = useMemo(() => {
    return generateAcademyTagGroups(academy);
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
        title="Common Scents Academy | The Science of Perfumery"
        description="Master the technical side of fragrance. Explore the physics of molecular weight, volatility, and sillage architecture with our expert-led Academy lessons."
        canonical="https://commonscentshq.com/academy"
        image="https://commonscentshq.com/og-academy.jpg"
        structuredData={structuredData}
      />

      <main>
        <HeroSection role="banner" as="section">
          <HeroContent $padding>
            <LogoContainer>
              <img
                src={CommonScentsLogo}
                alt="Common Scents HQ Logo - Fragrance Education Platform"
                width="250"
                height="334"
                loading="lazy"
                decoding="async"
              />
            </LogoContainer>

            <header>
              <TitleContainer>
                <MainTitle $center>Common Scents Academy</MainTitle>
                <Tagline role="doc-subtitle">
                  The art, science, and physics of professional perfumery.
                </Tagline>
              </TitleContainer>
            </header>
          </HeroContent>
        </HeroSection>

        <Section aria-labelledby="academy-articles">
          <SectionContent $animate>
            <h2 className="visually-hidden" id="academy-articles">
              Academy Articles
            </h2>

            <SearchAndFilter<AcademyItem>
              items={academy}
              tagGroups={tagGroups}
              searchPlaceholder="Search technical articles..."
              getSearchableText={(item) => [item.title, item.description]}
              getItemTags={(item) => [
                ...(item.topics || []),
                ...(item.contentType || []),
                ...(item.tags || []),
              ]}
              getTagColor={getTagColor}
              renderResults={(filteredItems) => {
                const displayedItems = filteredItems.slice(0, visibleCount);
                const hasMoreItems = visibleCount < filteredItems.length;

                return (
                  <>
                    <ContentGrid role="list" aria-label="Academy articles">
                      {displayedItems.map((item) => (
                        <ContentCard
                          key={item.id}
                          to={`/academy/${item.slug}`}
                          role="listitem"
                          aria-label={`Read article: ${item.title}`}
                        >
                          <TextWrapper>
                            <ContentTitle as="h3">{item.title}</ContentTitle>
                            <ContentDescription>
                              {item.description}
                            </ContentDescription>
                          </TextWrapper>
                          {(item.date || item.time) && (
                            <DateTimeWrapper>
                              {item.date && (
                                <DateTimeText as="time" dateTime={item.date}>
                                  {item.date}
                                </DateTimeText>
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
                      <ButtonGroup $paddingTop="2.4rem">
                        <PrimaryButton
                          onClick={handleSeeMore}
                          aria-label={`Load ${
                            filteredItems.length - visibleCount
                          } more articles`}
                        >
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
      </main>
    </>
  );
};

export default Academy;
