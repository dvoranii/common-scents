import React, { useEffect, useRef, useState } from "react";
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

export const FeaturedReviews: React.FC = () => {
  const featuredReviews = getFeaturedFragrances(3);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
