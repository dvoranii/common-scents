import { useMemo } from "react";
import { getFeaturedGuideSummaries } from "../../../../utils/guideUtils";
import { getFeaturedAcademySummaries } from "../../../../utils/academyUtils";
import * as S from "./FragranceGuides.styled";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionSubtitle,
} from "../../../../styles/CommonStyles";
import { useIntersectionObserver } from "../../../../hooks/useIntersectionObserver";

export const FragranceGuides: React.FC = () => {
  const featuredGuides = useMemo(() => getFeaturedGuideSummaries(4), []);
  const academyGuides = useMemo(() => getFeaturedAcademySummaries(4), []);
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "0px",
    freezeOnceVisible: true,
  });

  return (
    <Section
      ref={sectionRef}
      id="learning-hub"
      aria-label="Fragrance Learning Hub"
    >
      <SectionContent>
        <S.GuidesWrapper>
          <S.DualSection aria-labelledby="guides-heading">
            <S.TextWrapper>
              <SectionTitle
                $marginBottom="0.5rem"
                $animate
                className={isVisible ? "animate-in" : ""}
                id="guides-heading"
              >
                Fragrance Tips & Guides
              </SectionTitle>
              <SectionSubtitle $fontWeight={100}>
                Practical advice for every fragrance enthusiast.
              </SectionSubtitle>
            </S.TextWrapper>
            <S.GuidesList
              as="ul"
              aria-label="Featured fragrance tips and guides"
            >
              {featuredGuides.map((guide, index) => (
                <S.GuideItem
                  as="li"
                  key={guide.id}
                  className={isVisible ? `fade-in-delay-${index}` : ""}
                >
                  <S.GuideLink
                    to={`/guides/${guide.slug}`}
                    aria-label={`Read guide: ${guide.title}`}
                  >
                    <S.GuideTitle>{guide.title}</S.GuideTitle>
                    {guide.author && <S.GuideMeta>{guide.author}</S.GuideMeta>}
                    {guide.date && <S.GuideMeta>{guide.date}</S.GuideMeta>}
                  </S.GuideLink>
                </S.GuideItem>
              ))}
            </S.GuidesList>
          </S.DualSection>

          <S.DualSection>
            <S.TextWrapper>
              <SectionTitle
                $marginBottom="0.5rem"
                $animate
                className={isVisible ? "animate-in" : ""}
              >
                Common Scents Academy
              </SectionTitle>
              <SectionSubtitle $fontWeight={100}>
                Learn the art, science, and history of perfumery.
              </SectionSubtitle>
            </S.TextWrapper>
            <S.GuidesList as="ul" aria-label="Fragrance Academy guides">
              {academyGuides.map((guide, index) => (
                <S.GuideItem
                  as="li"
                  key={guide.id}
                  className={isVisible ? `fade-in-delay-${index}` : ""}
                >
                  <S.GuideLink
                    to={`/academy/${guide.slug}`}
                    aria-label={`Read academy lesson: ${guide.title}`}
                  >
                    <S.GuideTitle>{guide.title}</S.GuideTitle>
                    {guide.date && <S.GuideMeta>{guide.date}</S.GuideMeta>}
                  </S.GuideLink>
                </S.GuideItem>
              ))}
            </S.GuidesList>
          </S.DualSection>
        </S.GuidesWrapper>
      </SectionContent>
    </Section>
  );
};
