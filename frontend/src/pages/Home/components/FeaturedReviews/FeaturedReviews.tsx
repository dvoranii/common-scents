import { getFeaturedFragrances } from "../../../../utils/fragranceUtils";
import * as S from "./FeaturedReviews.styled";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../../../styles/CommonStyles";
// import { SeeMoreWrapper, GradientHoverLink } from "../../Home.styled";
import { useIntersectionObserver } from "../../../../hooks/useIntersectionObserver";

export const FeaturedReviews: React.FC = () => {
  const featuredReviews = getFeaturedFragrances(3);
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "0px",
    freezeOnceVisible: true,
  });

  return (
    <Section ref={sectionRef} id="FeaturedReviewsSection">
      <SectionContent>
        <SectionTitle $color $animate className={isVisible ? "animate-in" : ""}>
          Featured Reviews
        </SectionTitle>

        <S.ReviewsGrid>
          {featuredReviews.map((fragrance, index) => (
            <S.ReviewCard
              key={fragrance.id}
              className={isVisible ? `fade-in-delay-${index}` : ""}
            >
              <S.ReviewImageLink to={`/fragrance-reviews/${fragrance.slug}`}>
                <S.ReviewImage>
                  <S.BottleImage
                    src={fragrance.thumbnailImage}
                    alt={fragrance.name}
                    loading="lazy"
                  />
                </S.ReviewImage>
              </S.ReviewImageLink>

              <S.ReviewContent>
                <S.ReviewTextWrapper>
                  <S.ReviewTitle>
                    {fragrance.name} - {fragrance.house}
                  </S.ReviewTitle>
                  <S.ReviewDescription>
                    {fragrance.shortDescription}
                  </S.ReviewDescription>
                </S.ReviewTextWrapper>
                <S.ReviewLink to={`/fragrance-reviews/${fragrance.slug}`}>
                  <S.ReviewLinkText>See Review</S.ReviewLinkText>
                </S.ReviewLink>
              </S.ReviewContent>
            </S.ReviewCard>
          ))}
        </S.ReviewsGrid>

        <S.AnimatedButtonWrapper>
          <S.AnimatedButton to="/fragrance-reviews">
            All Reviews
            <S.BgLayer $duration={1000} $hoverDuration={500} $bgColor="white" />
            <S.BgLayer
              $duration={700}
              $hoverDuration={700}
              $bgColor="#5fd165"
            />
            <S.BgLayer
              $duration={500}
              $hoverDuration={1000}
              $bgColor="#459749"
            />
            <S.HoverText>
              Read More
              <S.AnimatedArrow />
            </S.HoverText>
          </S.AnimatedButton>
        </S.AnimatedButtonWrapper>
      </SectionContent>
    </Section>
  );
};
