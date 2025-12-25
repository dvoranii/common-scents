import React from "react";
import AcademyWrapper from "../../../components/AcademyWrapper/AcademyWrapper";
import * as S from "../../../components/AcademyTemplate/AcademyTemplate.styled";

const PerfumeryAroundTheWorld: React.FC = () => {
  return (
    <AcademyWrapper
      slug="perfumery-around-the-world"
      seoTitle="Global Perfumery Traditions: French, Middle Eastern & Italian Fragrance Styles"
      seoDescription="Explore global perfume traditions from French elegance to Middle Eastern opulence and Italian passion. Discover how culture shapes fragrance creation worldwide."
    >
      <S.Intro>
        Fragrance is a universal language, but each culture speaks it with its
        own distinct accent. From the elegant sophistication of French perfumery
        to the rich opulence of Middle Eastern scents and the passionate
        creativity of Italian fragrance houses, exploring global perfume
        traditions reveals how geography, history, and culture shape our
        olfactory experiences.
      </S.Intro>

      <S.Section>
        <S.SectionTitle>French Elegance: The Art of Subtlety</S.SectionTitle>
        <S.Paragraph>
          French perfumery is often considered the gold standard of fragrance
          creation, with centuries of tradition rooted in Grasse, the perfume
          capital of the world. French fragrances are characterized by their
          sophistication, balance, and artistic expression.
        </S.Paragraph>
        <S.Paragraph>
          The French approach emphasizes structure and refinement, with
          carefully calibrated note pyramids that unfold gradually over time.
          Houses like Chanel, Dior, and Guerlain have perfected the art of
          creating fragrances that are both complex and wearable, demonstrating
          a mastery of technical precision and artistic vision.
        </S.Paragraph>
        <S.Paragraph>
          Key characteristics of French perfumery include:
        </S.Paragraph>
        <S.List role="list" aria-label="Characteristics of French perfumery">
          <S.ListItem role="listitem">
            Emphasis on classic fragrance families (chypre, fougère, oriental)
          </S.ListItem>
          <S.ListItem role="listitem">
            Sophisticated use of natural ingredients from Grasse region
          </S.ListItem>
          <S.ListItem role="listitem">
            Focus on elegance and timeless appeal over trendiness
          </S.ListItem>
          <S.ListItem role="listitem">
            Masterful blending that creates seamless transitions between notes
          </S.ListItem>
        </S.List>
      </S.Section>
      <S.Section>
        <S.SectionTitle>
          Middle Eastern Opulence: Richness and Tradition
        </S.SectionTitle>
        <S.Paragraph>
          Middle Eastern perfumery represents one of the world's oldest
          fragrance traditions, with roots stretching back to ancient incense
          trade routes. These fragrances are characterized by their intensity,
          longevity, and spiritual significance.
        </S.Paragraph>
        <S.Paragraph>
          Oud (agarwood) stands as the crown jewel of Middle Eastern perfumery,
          valued for its complex, woody aroma that can take decades to develop
          naturally. Other signature ingredients include rose, saffron, amber,
          and various resins that create rich, enveloping scent experiences.
        </S.Paragraph>
        <S.Paragraph>
          Unlike Western fragrances that often prioritize projection, Middle
          Eastern scents focus on personal enjoyment and intimate scent bubbles.
          The tradition of layering multiple fragrances and using fragrance oils
          rather than alcohol-based sprays creates unique, personalized scent
          signatures.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Italian Passion: Creativity and Flair</S.SectionTitle>
        <S.Paragraph>
          Italian perfumery combines artistic passion with technical innovation,
          reflecting the country's rich history in both art and commerce.
          Italian fragrances often feature bold, expressive notes and a
          celebration of Mediterranean ingredients.
        </S.Paragraph>
        <S.Paragraph>
          Houses like Acqua di Parma, Bottega Veneta, and Bulgari showcase the
          Italian talent for creating fragrances that feel both luxurious and
          accessible. There's a particular emphasis on citrus notes, reflecting
          the sun-drenched landscapes of Southern Italy, and a willingness to
          experiment with unconventional combinations.
        </S.Paragraph>
        <S.Paragraph>
          The Italian approach balances respect for tradition with modern
          innovation, creating fragrances that tell stories of la dolce vita—the
          sweet life filled with beauty, pleasure, and sensory enjoyment.
        </S.Paragraph>
      </S.Section>
    </AcademyWrapper>
  );
};

export default PerfumeryAroundTheWorld;
