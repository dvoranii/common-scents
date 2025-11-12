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
  TextWrapper,
} from "./FragranceGuides.styled";
import {
  Section,
  SectionContent,
  SectionTitle,
  SectionSubtitle,
} from "../../../../styles/CommonStyles";
import { Link } from "react-router-dom";

export const FragranceLearningHub: React.FC = () => {
  const featuredGuides = getFeaturedGuides(4);
  const academyGuides = getFeaturedAcademy(4);

  return (
    <Section>
      <SectionContent>
        <GuidesWrapper>
          <DualSection>
            <TextWrapper>
              <SectionTitle $marginBottom="0.5rem">
                Fragrance Tips & Guides
              </SectionTitle>
              <SectionSubtitle>
                Practical advice for every fragrance enthusiast.
              </SectionSubtitle>
            </TextWrapper>
            <GuidesList>
              {featuredGuides.map((guide) => (
                <Link to={`/guides/${guide.slug}`}>
                  <GuideItem key={guide.id}>
                    <GuideTitle>{guide.title}</GuideTitle>
                    {guide.author && <GuideMeta>{guide.author}</GuideMeta>}
                    {guide.date && <GuideMeta>{guide.date}</GuideMeta>}
                  </GuideItem>
                </Link>
              ))}
            </GuidesList>
          </DualSection>

          <DualSection>
            <TextWrapper>
              <SectionTitle $marginBottom="0.5rem">
                Common Scents Academy
              </SectionTitle>
              <SectionSubtitle>
                Learn the art, science, and history of perfumery.
              </SectionSubtitle>
            </TextWrapper>
            <GuidesList>
              {academyGuides.map((guide) => (
                <Link to={`/academy/${guide.slug}`}>
                  <GuideItem key={guide.id}>
                    <GuideTitle>{guide.title}</GuideTitle>
                    {guide.date && <GuideMeta>{guide.date}</GuideMeta>}
                  </GuideItem>
                </Link>
              ))}
            </GuidesList>
          </DualSection>
        </GuidesWrapper>
      </SectionContent>
    </Section>
  );
};
