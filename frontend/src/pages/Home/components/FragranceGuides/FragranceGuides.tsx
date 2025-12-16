import { getFeaturedGuides } from "../../../../utils/guideUtils";
import { getFeaturedAcademy } from "../../../../utils/academyUtils";
import {
  GuidesWrapper,
  DualSection,
  GuidesList,
  GuideItem,
  GuideLink,
  GuideTitle,
  GuideMeta,
  TextWrapper,
} from "./FragranceGuides.styled";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionSubtitle,
} from "../../../../styles/CommonStyles";
import { useIntersectionObserver } from "../../../../hooks/useIntersectionObserver";

export const FragranceLearningHub: React.FC = () => {
  const featuredGuides = getFeaturedGuides(4);
  const academyGuides = getFeaturedAcademy(4);
  const [sectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "0px",
    freezeOnceVisible: true,
  });

  return (
    <Section ref={sectionRef} id="FragranceGuidesSection">
      <SectionContent>
        <GuidesWrapper>
          <DualSection>
            <TextWrapper>
              <SectionTitle
                $marginBottom="0.5rem"
                $animate
                className={isVisible ? "animate-in" : ""}
              >
                Fragrance Tips & Guides
              </SectionTitle>
              <SectionSubtitle>
                Practical advice for every fragrance enthusiast.
              </SectionSubtitle>
            </TextWrapper>
            <GuidesList>
              {featuredGuides.map((guide, index) => (
                <GuideLink
                  to={`/guides/${guide.slug}`}
                  key={guide.id}
                  className={isVisible ? `fade-in-delay-${index}` : ""}
                >
                  <GuideItem key={guide.id}>
                    <GuideTitle>{guide.title}</GuideTitle>
                    {guide.author && <GuideMeta>{guide.author}</GuideMeta>}
                    {guide.date && <GuideMeta>{guide.date}</GuideMeta>}
                  </GuideItem>
                </GuideLink>
              ))}
            </GuidesList>
          </DualSection>

          <DualSection>
            <TextWrapper>
              <SectionTitle
                $marginBottom="0.5rem"
                $animate
                className={isVisible ? "animate-in" : ""}
              >
                Common Scents Academy
              </SectionTitle>
              <SectionSubtitle>
                Learn the art, science, and history of perfumery.
              </SectionSubtitle>
            </TextWrapper>
            <GuidesList>
              {academyGuides.map((guide, index) => (
                <GuideLink
                  to={`/academy/${guide.slug}`}
                  key={guide.id}
                  className={isVisible ? `fade-in-delay-${index}` : ""}
                >
                  <GuideItem key={guide.id}>
                    <GuideTitle>{guide.title}</GuideTitle>
                    {guide.date && <GuideMeta>{guide.date}</GuideMeta>}
                  </GuideItem>
                </GuideLink>
              ))}
            </GuidesList>
          </DualSection>
        </GuidesWrapper>
      </SectionContent>
    </Section>
  );
};
