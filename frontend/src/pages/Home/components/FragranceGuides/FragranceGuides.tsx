import { useMemo } from "react";
import { getFeaturedGuides } from "../../../../utils/guideUtils";
import { getFeaturedAcademy } from "../../../../utils/academyUtils";
import * as S from "./FragranceGuides.styled";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionSubtitle,
} from "../../../../styles/CommonStyles";
import { useIntersectionObserver } from "../../../../hooks/useIntersectionObserver";

export const FragranceGuides: React.FC = () => {
  const featuredGuides = useMemo(() => getFeaturedGuides(4), []);
  const academyGuides = useMemo(() => getFeaturedAcademy(4), []);
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
              role="list"
              aria-label="Featured fragrance tips and guides"
            >
              {featuredGuides.map((guide, index) => (
                <S.GuideLink
                  to={`/guides/${guide.slug}`}
                  key={guide.id}
                  className={isVisible ? `fade-in-delay-${index}` : ""}
                  role="listitem"
                  aria-label={`Read guide: ${guide.title}`}
                >
                  <S.GuideItem key={guide.id}>
                    <S.GuideTitle>{guide.title}</S.GuideTitle>
                    {guide.author && <S.GuideMeta>{guide.author}</S.GuideMeta>}
                    {guide.date && <S.GuideMeta>{guide.date}</S.GuideMeta>}
                  </S.GuideItem>
                </S.GuideLink>
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
            <S.GuidesList>
              {academyGuides.map((guide, index) => (
                <S.GuideLink
                  to={`/academy/${guide.slug}`}
                  key={guide.id}
                  className={isVisible ? `fade-in-delay-${index}` : ""}
                >
                  <S.GuideItem key={guide.id}>
                    <S.GuideTitle>{guide.title}</S.GuideTitle>
                    {guide.date && <S.GuideMeta>{guide.date}</S.GuideMeta>}
                  </S.GuideItem>
                </S.GuideLink>
              ))}
            </S.GuidesList>
          </S.DualSection>
        </S.GuidesWrapper>
      </SectionContent>
    </Section>
  );
};
