import { getFeaturedFragrances } from "../../../../utils/fragranceUtils";
import * as S from "./FeaturedReviews.styled";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../../../styles/CommonStyles";
import { useIntersectionObserver } from "../../../../hooks/useIntersectionObserver";
import { useMemo } from "react";

export const FeaturedReviews: React.FC = () => {
  const featuredReviews = useMemo(() => getFeaturedFragrances(3), []);
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "0px",
    freezeOnceVisible: true,
  });

  return (
    <Section
      ref={sectionRef}
      id="featured-reviews"
      aria-labelledby="featured-reviews-heading"
    >
      <SectionContent>
        <SectionTitle
          $color
          $animate
          className={isVisible ? "animate-in" : ""}
          id="featured-reviews-heading"
        >
          Featured Reviews
        </SectionTitle>

        <S.ReviewsGrid role="list" aria-label="Featured fragrance reviews">
          {featuredReviews.map((fragrance, index) => {
            const imageLoadingStrategy = index === 0 ? "eager" : "lazy";
            const imagePriority = index === 0 ? "high" : "low";
            return (
              <S.ReviewCard
                key={fragrance.id}
                className={isVisible ? `fade-in-delay-${index}` : ""}
                role="listitem"
                aria-labelledby={`review-title-${fragrance.slug}`}
              >
                <S.ReviewImageLink to={`/fragrance-reviews/${fragrance.slug}`}>
                  <S.ReviewImage>
                    <S.BottleImage
                      src={fragrance.thumbnailImage}
                      alt={`${fragrance.name} by ${fragrance.house} bottle`}
                      width="300"
                      height="360"
                      loading={imageLoadingStrategy}
                      decoding="async"
                      fetchPriority={imagePriority}
                    />
                  </S.ReviewImage>
                </S.ReviewImageLink>

                <S.ReviewContent>
                  <S.ReviewTextWrapper>
                    <S.ReviewTitle id={`review-title-${fragrance.slug}`}>
                      {fragrance.name} - {fragrance.house}
                    </S.ReviewTitle>
                    <S.ReviewDescription>
                      {fragrance.shortDescription}
                    </S.ReviewDescription>
                  </S.ReviewTextWrapper>
                  <S.ReviewLink
                    to={`/fragrance-reviews/${fragrance.slug}`}
                    aria-label={`Read full review of ${fragrance.name}`}
                  >
                    <S.ReviewLinkText>See Review</S.ReviewLinkText>
                  </S.ReviewLink>
                </S.ReviewContent>
              </S.ReviewCard>
            );
          })}
        </S.ReviewsGrid>

        <S.AnimatedButtonWrapper>
          <S.AnimatedButton
            to="/fragrance-reviews"
            aria-label="View all fragrance reviews"
          >
            All Reviews
            <S.BgLayer
              $duration={1000}
              $hoverDuration={500}
              $bgColor="white"
              aria-hidden="true"
            />
            <S.BgLayer
              $duration={700}
              $hoverDuration={700}
              $bgColor="#5fd165"
              aria-hidden="true"
            />
            <S.BgLayer
              $duration={500}
              $hoverDuration={1000}
              $bgColor="#459749"
              aria-hidden="true"
            />
            <S.HoverText aria-hidden="true">
              Read More
              <S.AnimatedArrow />
            </S.HoverText>
          </S.AnimatedButton>
        </S.AnimatedButtonWrapper>
      </SectionContent>
    </Section>
  );
};
