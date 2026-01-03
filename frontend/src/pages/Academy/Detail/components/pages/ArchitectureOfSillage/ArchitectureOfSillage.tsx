import React from "react";
import AcademyWrapper from "../../AcademyWrapper/AcademyWrapper";
import * as S from "../../AcademyTemplate/AcademyTemplate.styled";

const ArchitectureOfSillage: React.FC = () => {
  return (
    <AcademyWrapper
      slug="the-architecture-of-sillage"
      seoTitle="Architecture of Sillage: Projection vs. Longevity | Common Scents Academy"
      seoDescription="Learn the difference between projection, sillage, and longevity. Discover how top, mid, and base notes dictate your scent's presence in a room."
    >
      <S.Intro>
        Sillage is the trail left by a perfume when it is worn. Understanding
        its architecture requires moving beyond 'longevity' and looking at how
        different olfactory levels occupy the space around you.
      </S.Intro>

      <S.Section>
        <S.SectionTitle>The Scent Cloud Breakdown</S.SectionTitle>
        <S.Paragraph>
          The architecture of your scent cloud is determined by the volatility
          of the notes you apply. Each level serves a distinct functional
          purpose in how you are perceived by others.
        </S.Paragraph>
        <S.List>
          <S.ListItem>
            <S.Highlight>Top Notes (The Burst):</S.Highlight> Characterized by
            extremely high volatility. They create a massive, far-reaching, but
            short-lived initial cloud. They vanish within 5-15 minutes, leaving
            only the fleeting opening for your immediate companions.
          </S.ListItem>
          <S.ListItem>
            <S.Highlight>Middle Notes (The Sweet Spot):</S.Highlight> The actual
            heart of the sillage. These provide the best balance of noticeable
            projection and lasting power (1-4 hours), forming a stable,
            perceptible scent bubble around the wearer.
          </S.ListItem>
          <S.ListItem>
            <S.Highlight>Base Notes (The Anchor):</S.Highlight> Crucial for
            intimate sillage. These molecules are heavy and least volatile,
            adhering tenaciously to the skin to create a persistent,
            close-quarters aura.
          </S.ListItem>
        </S.List>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Why the Opening Matters</S.SectionTitle>
        <S.Paragraph>
          If top notes only last 15 minutes, why do they matter? Beyond being
          the "commercial hook," they provide{" "}
          <S.Highlight>Olfactory Lift</S.Highlight>. They provide the crucial
          initial energy and brightness that prevents the base notes from
          feeling flat or dense. Even though they fade, they set the tone for
          the entire duration of the wear.
        </S.Paragraph>
      </S.Section>
    </AcademyWrapper>
  );
};

export default ArchitectureOfSillage;
