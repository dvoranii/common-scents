import React from "react";
import {
  HeroSection,
  HeroContent,
  LogoContainer,
  MainTitle,
  TitleContainer,
  Tagline,
  Section,
  SectionContent,
} from "../../styles/CommonStyles";
import {
  ContentGrid,
  ContentCard,
  ContentTitle,
  TextWrapper,
  ContentDescription,
  DateTimeText,
  DateTimeWrapper,
  SeeMoreButton,
  SeeMoreButtonWrapper,
} from "./ContentListingTemplate.styled";
import CommonScentsLogo from "../../assets/cs-bulb.png";

export interface ContentItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  date?: string;
  time?: string;
  author?: string;
  category?: string;
}

interface ContentListingTemplateProps {
  title: string;
  tagline: string;
  items: ContentItem[];
  basePath: string; // e.g., "/acs" or "/guides"
  showLoadMore?: boolean;
  initialVisibleCount?: number;
  itemsPerLoad?: number;
}

const ContentListingTemplate: React.FC<ContentListingTemplateProps> = ({
  title,
  tagline,
  items,
  basePath,
  showLoadMore = false,
  initialVisibleCount = items.length,
  itemsPerLoad = 4,
}) => {
  const [visibleCount, setVisibleCount] = React.useState(initialVisibleCount);

  const displayedItems = showLoadMore ? items.slice(0, visibleCount) : items;
  const hasMoreItems = visibleCount < items.length;

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + itemsPerLoad);
  };

  return (
    <>
      <HeroSection>
        <HeroContent>
          <LogoContainer>
            <img src={CommonScentsLogo} alt="Common Scents Logo" />
          </LogoContainer>

          <TitleContainer>
            <MainTitle $center>{title}</MainTitle>
            <Tagline>{tagline}</Tagline>
          </TitleContainer>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionContent>
          <ContentGrid>
            {displayedItems.map((item) => (
              <ContentCard key={item.id} to={`${basePath}/${item.slug}`}>
                <TextWrapper>
                  <ContentTitle>{item.title}</ContentTitle>
                  <ContentDescription>{item.description}</ContentDescription>
                </TextWrapper>
                {(item.date || item.time) && (
                  <DateTimeWrapper>
                    {item.date && <DateTimeText>{item.date}</DateTimeText>}
                    {item.time && <DateTimeText>{item.time}</DateTimeText>}
                    {(item.date || item.time) && (
                      <DateTimeText>(Eastern Standard Time)</DateTimeText>
                    )}
                  </DateTimeWrapper>
                )}
              </ContentCard>
            ))}
          </ContentGrid>

          {showLoadMore && hasMoreItems && (
            <SeeMoreButtonWrapper>
              <SeeMoreButton onClick={handleSeeMore}>
                See More ({items.length - visibleCount} remaining)
              </SeeMoreButton>
            </SeeMoreButtonWrapper>
          )}
        </SectionContent>
      </Section>
    </>
  );
};

export default ContentListingTemplate;
