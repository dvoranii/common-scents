import React from "react";
import { getFeaturedFragrances } from "../../../../utils/fragranceUtils";
import {
  ReviewsGrid,
  ReviewCard,
  ReviewImage,
  ReviewContent,
  ReviewTitle,
  ReviewDescription,
  ReviewTextWrapper,
  ReviewLink,
  BottleImage,
} from "./FeaturedReviews.styled";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../../../styles/CommonStyles";

import { SeeMoreWrapper, GradientHoverLink } from "../../Home.styled";

export const FeaturedReviews: React.FC = () => {
  const featuredReviews = getFeaturedFragrances(3);

  return (
    <Section>
      <SectionContent>
        <SectionTitle>Featured Reviews</SectionTitle>

        <ReviewsGrid>
          {featuredReviews.map((fragrance) => (
            <ReviewCard key={fragrance.id}>
              <ReviewImage>
                <BottleImage
                  src={fragrance.thumbnailImage}
                  alt={fragrance.name}
                />
              </ReviewImage>
              <ReviewContent>
                <ReviewTextWrapper>
                  <ReviewTitle>
                    {fragrance.name} - {fragrance.house}
                  </ReviewTitle>
                  <ReviewDescription>
                    {fragrance.shortDescription}
                  </ReviewDescription>
                </ReviewTextWrapper>
                <ReviewLink to={`/fragrance-reviews/${fragrance.slug}`}>
                  Read Review →
                </ReviewLink>
              </ReviewContent>
            </ReviewCard>
          ))}
        </ReviewsGrid>

        <SeeMoreWrapper>
          <GradientHoverLink href="/fragrance-reviews">
            See More Reviews
          </GradientHoverLink>
        </SeeMoreWrapper>
      </SectionContent>
    </Section>
  );
};
