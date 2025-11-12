import React from "react";
import AcademyWrapper from "../../../components/AcademyWrapper/AcademyWrapper";
import * as S from "../../../components/AcademyTemplate/AcademyTemplate.styled";

const FragranceConcentrationGuide: React.FC = () => {
  return (
    <AcademyWrapper slug="fragrance-concentration-guide">
      <S.Intro>
        Understanding fragrance concentrations is essential for choosing the
        right scent for any occasion. From light, refreshing Eau de Toilette to
        intense, long-lasting Parfum, each concentration offers different
        performance characteristics that can dramatically affect your fragrance
        experience.
      </S.Intro>

      <S.Section>
        <S.SectionTitle>
          Eau de Toilette (EDT): The Everyday Choice
        </S.SectionTitle>
        <S.Paragraph>
          <S.Highlight>Eau de Toilette</S.Highlight> typically contains 5-15%
          fragrance oil diluted in alcohol. This concentration strikes a balance
          between longevity and freshness, making it ideal for daily wear and
          warmer weather.
        </S.Paragraph>
        <S.Paragraph>
          EDTs are characterized by their bright opening notes and moderate
          projection. They usually last 3-4 hours on skin, making them perfect
          for office environments, casual outings, or situations where you want
          a scent that's present but not overwhelming.
        </S.Paragraph>
        <S.Paragraph>
          Many classic masculine fragrances and summer scents are available as
          EDTs, as the lighter concentration allows citrus and aromatic notes to
          shine without becoming cloying.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>
          Eau de Parfum (EDP): The Versatile Performer
        </S.SectionTitle>
        <S.Paragraph>
          <S.Highlight>Eau de Parfum</S.Highlight> contains 15-20% fragrance
          concentration, offering greater longevity and projection than EDT.
          This has become the most popular concentration for both masculine and
          feminine fragrances in recent years.
        </S.Paragraph>
        <S.Paragraph>
          EDPs typically last 6-8 hours on skin, with better scent projection
          during the first few hours after application. The higher concentration
          allows base notes to develop more fully, creating a richer, more
          complex fragrance experience.
        </S.Paragraph>
        <S.Paragraph>
          This concentration works well for evening wear, special occasions, or
          when you want a fragrance that will last through your workday without
          needing reapplication.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>
          Parfum/Extrait de Parfum: The Ultimate Luxury
        </S.SectionTitle>
        <S.Paragraph>
          <S.Highlight>Parfum</S.Highlight> (also called Extrait de Parfum)
          represents the highest concentration available, containing 20-40%
          fragrance oil. This is the most expensive and luxurious form of
          fragrance, often presented in beautiful bottles without sprayers.
        </S.Paragraph>
        <S.Paragraph>
          Parfums are characterized by their intense richness and exceptional
          longevity—often lasting 8-12 hours or more. However, they typically
          have more intimate projection, creating a personal scent bubble rather
          than filling a room.
        </S.Paragraph>
        <S.Paragraph>
          Because of their concentration and price, parfums are usually reserved
          for special fragrances in a collection. They're applied sparingly to
          pulse points and allow you to experience the full complexity of a
          fragrance composition as it was originally intended by the perfumer.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Choosing the Right Concentration</S.SectionTitle>
        <S.Paragraph>
          When selecting a concentration, consider your lifestyle, climate, and
          personal preferences:
        </S.Paragraph>
        <S.List>
          <S.ListItem>
            <S.Highlight>For office or casual wear:</S.Highlight> EDT offers
            subtle presence
          </S.ListItem>
          <S.ListItem>
            <S.Highlight>For all-day events:</S.Highlight> EDP provides reliable
            longevity
          </S.ListItem>
          <S.ListItem>
            <S.Highlight>For special occasions:</S.Highlight> Parfum delivers
            luxury and intensity
          </S.ListItem>
          <S.ListItem>
            <S.Highlight>For hot climates:</S.Highlight> Lighter concentrations
            prevent overwhelming scent
          </S.ListItem>
          <S.ListItem>
            <S.Highlight>For sensitive skin:</S.Highlight> Higher concentrations
            may require careful application
          </S.ListItem>
        </S.List>
        <S.Paragraph>
          Remember that the same fragrance can smell different across
          concentrations due to variations in the formula. Always test your
          preferred concentration on skin before making a final decision.
        </S.Paragraph>
      </S.Section>
    </AcademyWrapper>
  );
};

export default FragranceConcentrationGuide;
