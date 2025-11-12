import React from "react";
import AcademyWrapper from "../../../components/AcademyWrapper/AcademyWrapper";
import * as S from "../../../components/AcademyTemplate/AcademyTemplate.styled";

const HistoryOfCreed: React.FC = () => {
  return (
    <AcademyWrapper slug="history-of-creed">
      <S.Intro>
        For over 260 years, the House of Creed has stood as a testament to
        craftsmanship, luxury, and olfactory artistry. What began as a bespoke
        tailoring business serving British royalty has evolved into one of the
        world's most revered fragrance houses, maintaining its commitment to
        quality across centuries of changing tastes and trends.
      </S.Intro>

      <S.Section>
        <S.SectionTitle>Royal Beginnings</S.SectionTitle>
        <S.Paragraph>
          The Creed story begins in 1760 when James Henry Creed established a
          tailoring house in London's prestigious Mayfair district. His
          exceptional craftsmanship quickly attracted aristocratic clients,
          including King George III. It was through these royal connections that
          Creed first ventured into fragrance creation.
        </S.Paragraph>
        <S.Paragraph>
          The transition from tailoring to perfumery was natural for Creed.
          Royal clients requested custom scents for their bespoke garments,
          leading to the creation of personalized fragrances that would
          complement both the wearer and their attire. This bespoke approach
          remains at the heart of Creed's philosophy today.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Generational Mastery</S.SectionTitle>
        <S.Paragraph>
          Unlike many modern fragrance houses, Creed has remained family-owned
          and operated for seven generations. Each successor has brought their
          unique vision while maintaining the house's core values of quality and
          craftsmanship.
        </S.Paragraph>
        <S.List>
          <S.ListItem>
            <S.Highlight>James Henry Creed (1760-1824)</S.Highlight> -
            Established the house and its royal clientele
          </S.ListItem>
          <S.ListItem>
            <S.Highlight>Henry Creed (1824-1854)</S.Highlight> - Expanded into
            European royal courts
          </S.ListItem>
          <S.ListItem>
            <S.Highlight>Olivier Creed (Current)</S.Highlight> - Sixth
            generation master perfumer
          </S.ListItem>
        </S.List>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Modern Legacy</S.SectionTitle>
        <S.Paragraph>
          Today, Creed continues to create fragrances using traditional methods
          combined with modern innovation. The house maintains its commitment to
          using the finest natural ingredients and aging fragrances in oakmoss
          casks, a practice that dates back centuries.
        </S.Paragraph>
        <S.Paragraph>
          From royal courts to modern celebrities, Creed's appeal has
          transcended generations while maintaining its exclusive, artisanal
          character. Each bottle represents not just a fragrance, but a piece of
          living history—a continuation of the craftsmanship and passion that
          has defined the house for over 260 years.
        </S.Paragraph>
      </S.Section>
    </AcademyWrapper>
  );
};

export default HistoryOfCreed;
