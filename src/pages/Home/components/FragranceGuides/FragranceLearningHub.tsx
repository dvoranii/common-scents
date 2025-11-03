import React from "react";
import { getFeaturedGuides } from "../../../../utils/guideUtils";
import { getFeaturedAcademy } from "../../../../utils/academyUtils";
import {
  GuidesWrapper,
  DualSection,
  GuidesList,
  GuideItem,
  GuideTitle,
  GuideMeta,
} from "./FragranceLearningHub.styled";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionSubtitle,
} from "../../../../styles/CommonStyles";

export const FragranceLearningHub: React.FC = () => {
  const featuredGuides = getFeaturedGuides(4);
  const academyGuides = getFeaturedAcademy(4);

  return (
    <Section>
      <SectionContent>
        <GuidesWrapper>
          <DualSection>
            <SectionTitle $marginBottom="0.5rem">
              Fragrance Tips & Guides
            </SectionTitle>
            <SectionSubtitle>
              Practical advice for every fragrance enthusiast.
            </SectionSubtitle>
            <GuidesList>
              {featuredGuides.map((guide) => (
                <GuideItem key={guide.id}>
                  <GuideTitle>{guide.title}</GuideTitle>
                  {guide.author && <GuideMeta>{guide.author}</GuideMeta>}
                  {guide.date && <GuideMeta>{guide.date}</GuideMeta>}
                </GuideItem>
              ))}
            </GuidesList>
          </DualSection>

          {/* Right Column — Common Scents Academy */}
          <DualSection>
            <SectionTitle $marginBottom="0.5rem">
              Common Scents Academy
            </SectionTitle>
            <SectionSubtitle>
              Learn the art, science, and history of perfumery.
            </SectionSubtitle>
            <GuidesList>
              {academyGuides.map((guide) => (
                <GuideItem key={guide.id}>
                  <GuideTitle>{guide.title}</GuideTitle>
                  {guide.author && <GuideMeta>{guide.author}</GuideMeta>}
                  {guide.date && <GuideMeta>{guide.date}</GuideMeta>}
                </GuideItem>
              ))}
            </GuidesList>
          </DualSection>
        </GuidesWrapper>
      </SectionContent>
    </Section>
  );
};
