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
  ReviewLinkText,
  ReviewImageLink,
  BottleImage,
} from "./FeaturedReviews.styled";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../../../styles/CommonStyles";
import { SeeMoreWrapper, GradientHoverLink } from "../../Home.styled";
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

        <ReviewsGrid>
          {featuredReviews.map((fragrance, index) => (
            <ReviewCard
              key={fragrance.id}
              className={isVisible ? `fade-in-delay-${index}` : ""}
            >
              <ReviewImageLink to={`/fragrance-reviews/${fragrance.slug}`}>
                <ReviewImage>
                  <BottleImage
                    src={fragrance.thumbnailImage}
                    alt={fragrance.name}
                    loading="lazy"
                  />
                </ReviewImage>
              </ReviewImageLink>

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
                  <ReviewLinkText>Read Review</ReviewLinkText>
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
