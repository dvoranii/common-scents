import React from "react";
import AcademyWrapper from "../../../components/AcademyWrapper/AcademyWrapper";
import * as S from "../../../components/AcademyTemplate/AcademyTemplate.styled";

const ScienceOfScent: React.FC = () => {
  return (
    <AcademyWrapper
      slug="the-science-of-scent"
      seoTitle="The Science of Scent: Volatility and Molecular Weight | Common Scents Academy"
      seoDescription="Understand the physics of fragrance. Learn how molecular weight and volatility create the 'evaporation race' that defines your perfume's performance."
    >
      <S.Intro>
        Fragrance isn't just an art; it is a trade of applied chemistry and
        physics. The "Olfactory Pyramid" we see in marketing is actually a
        visualization of an evaporation timeline, dictated by the laws of
        molecular weight and volatility.
      </S.Intro>

      <S.Section>
        <S.SectionTitle>The Evaporation Race</S.SectionTitle>
        <S.Paragraph>
          The moment you spray a fragrance,{" "}
          <S.Highlight>all molecules are evaporating at once.</S.Highlight>
          We only smell a substance when it turns from a liquid into a gas
          (vapor), a process known as <S.Highlight>volatility</S.Highlight>.
        </S.Paragraph>
        <S.Paragraph>
          The primary driver of volatility is **Molecular Weight**. Low
          molecular weight molecules (like citrus and herbs) are small and
          light. They escape the liquid bond quickly, forming our top notes.
          High molecular weight molecules (like woods and musks) are large,
          heavy, and "sticky," lingering on the skin for hours as base notes.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>The Performance Timeline</S.SectionTitle>
        <S.Paragraph>
          A perfumer's job is to orchestrate these molecules so they don't all
          vanish at once. In a well-balanced scent, the experience follows a
          predictable decay:
        </S.Paragraph>
        <S.List>
          <S.ListItem>
            <S.Highlight>0-15 min:</S.Highlight> The Initial Flash. Roughly 80%
            top notes.
          </S.ListItem>
          <S.ListItem>
            <S.Highlight>1-3 hours:</S.Highlight> The Heart. Top notes drop to
            ~5%, and Mid notes dominate the body.
          </S.ListItem>
          <S.ListItem>
            <S.Highlight>6+ hours:</S.Highlight> The Deep Drydown. The base
            starts to dominate, making up 95% of the detectable scent.
          </S.ListItem>
        </S.List>
      </S.Section>
    </AcademyWrapper>
  );
};

export default ScienceOfScent;
