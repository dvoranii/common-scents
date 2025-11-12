import React from "react";
import AcademyWrapper from "../../../components/AcademyWrapper/AcademyWrapper";
import * as S from "../../../components/AcademyTemplate/AcademyTemplate.styled";

const WhatMakesAFragrance: React.FC = () => {
  return (
    <AcademyWrapper slug="what-makes-a-fragrance">
      <S.Intro>
        Every fragrance tells a story through chemistry—a carefully orchestrated
        symphony of natural essences and synthetic molecules that dance together
        on your skin. Understanding what goes into your favorite scents reveals
        the fascinating science and artistry behind modern perfumery, from field
        to flask.
      </S.Intro>

      <S.Section>
        <S.SectionTitle>
          The Building Blocks: Natural Ingredients
        </S.SectionTitle>
        <S.Paragraph>
          Natural ingredients form the historical foundation of perfumery,
          providing complexity and depth that synthetic molecules often struggle
          to replicate. These materials come from various sources around the
          world, each requiring specific expertise to harvest and process.
        </S.Paragraph>
        <S.Paragraph>
          <S.Highlight>Floral absolutes</S.Highlight> like rose, jasmine, and
          tuberose are obtained through solvent extraction, capturing the true
          essence of the flower. It takes thousands of petals to produce just a
          few grams of absolute, making these among the most precious materials
          in perfumery.
        </S.Paragraph>
        <S.Paragraph>
          <S.Highlight>Citrus oils</S.Highlight> from bergamot, lemon, and
          orange are typically cold-pressed from the fruit rinds, while{" "}
          <S.Highlight>wood and resin materials</S.Highlight> like sandalwood,
          cedar, and frankincense are obtained through steam distillation or
          solvent extraction.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>
          The Modern Revolution: Synthetic Molecules
        </S.SectionTitle>
        <S.Paragraph>
          Synthetic molecules have revolutionized perfumery, providing
          consistency, sustainability, and creative possibilities beyond what
          nature alone can offer. These laboratory-created compounds allow
          perfumers to achieve scents that don't exist in nature or to replicate
          rare and endangered materials.
        </S.Paragraph>
        <S.Paragraph>
          <S.Highlight>Calone</S.Highlight> introduced the aquatic note in the
          1990s, creating the fresh, marine scents we associate with modern
          masculine fragrances.
          <S.Highlight>Iso E Super</S.Highlight> provides a subtle, woody-amber
          background that enhances other notes without dominating them, while{" "}
          <S.Highlight>Ambroxan</S.Highlight>
          creates the warm, sensual amber character found in many contemporary
          fragrances.
        </S.Paragraph>
        <S.Paragraph>
          These synthetics aren't "cheap alternatives"—they're sophisticated
          tools that expand the perfumer's palette, enabling creations that
          would be impossible using only natural materials.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>
          The Creative Process: From Brief to Bottle
        </S.SectionTitle>
        <S.Paragraph>
          Creating a fragrance involves both science and art, with perfumers
          (known as "noses") combining hundreds of ingredients to achieve the
          desired effect. The process typically begins with a creative brief
          that outlines the fragrance's concept, target audience, and commercial
          requirements.
        </S.Paragraph>
        <S.Paragraph>
          Perfumers work with a "organ"—a workstation containing hundreds of raw
          materials— to build the fragrance note by note. They consider how each
          ingredient evaporates over time, how it interacts with other
          materials, and how it performs on skin versus on paper.
        </S.Paragraph>
        <S.Paragraph>
          The final composition must balance creativity with technical
          requirements like stability, safety, and cost. It's a process that can
          take months or even years, with countless iterations before achieving
          the perfect harmony that reaches the consumer as a finished fragrance.
        </S.Paragraph>
      </S.Section>
    </AcademyWrapper>
  );
};

export default WhatMakesAFragrance;
