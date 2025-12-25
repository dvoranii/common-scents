import React from "react";
import AcademyWrapper from "../../../components/AcademyWrapper/AcademyWrapper";
import * as S from "../../../components/AcademyTemplate/AcademyTemplate.styled";

const NotePyramidsExplained: React.FC = () => {
  return (
    <AcademyWrapper
      slug="note-pyramids-explained"
      seoTitle="Fragrance Note Pyramids Explained: Top, Middle & Base Notes Guide"
      seoDescription="Learn how fragrance note pyramids work. Understand top notes, middle notes, and base notes. Discover how perfumers create scent journeys that evolve over hours."
    >
      <S.Intro>
        Like a musical composition or architectural structure, every fragrance
        is built with intention and artistry. The note pyramid—comprising top,
        middle, and base notes—creates the temporal journey of a scent,
        unfolding over hours to tell a complete olfactory story from first
        impression to final memory.
      </S.Intro>

      <S.Section>
        <S.SectionTitle>Top Notes: The First Impression</S.SectionTitle>
        <S.Paragraph>
          <S.Highlight>Top notes</S.Highlight> are the initial scent you
          experience when you first spray a fragrance. These volatile molecules
          evaporate quickly, typically lasting 15 minutes to 2 hours, and serve
          as the introduction to the fragrance's character.
        </S.Paragraph>
        <S.Paragraph>
          Common top notes include citrus (bergamot, lemon, orange), light
          fruits (apple, berries), herbs (lavender, rosemary), and green notes
          (grass, leaves). Their purpose is to create an appealing first
          impression and transition smoothly into the heart of the fragrance.
        </S.Paragraph>
        <S.Paragraph>
          Many purchasing decisions are influenced by top notes, which is why
          they're often bright, fresh, and immediately likeable. However,
          judging a fragrance solely by its top notes is like judging a book by
          its cover—you miss the deeper story that unfolds over time.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Middle Notes: The Heart of the Matter</S.SectionTitle>
        <S.Paragraph>
          Also known as <S.Highlight>heart notes</S.Highlight>, the middle notes
          emerge as the top notes fade, typically lasting 2-4 hours after
          application. These form the core character of the fragrance and
          represent its true personality.
        </S.Paragraph>
        <S.Paragraph>
          Floral notes (rose, jasmine, lily), spices (cinnamon, cardamom),
          fruits (peach, plum), and green notes (violet leaf, geranium) often
          occupy the middle layer. The heart notes bridge the initial freshness
          of the top notes with the depth of the base notes, creating a cohesive
          scent experience.
        </S.Paragraph>
        <S.Paragraph>
          This is the stage where you truly get to know a fragrance—where
          complexity emerges and the scent becomes more personal as it interacts
          with your skin chemistry.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Base Notes: The Lasting Memory</S.SectionTitle>
        <S.Paragraph>
          <S.Highlight>Base notes</S.Highlight> are the foundation of the
          fragrance, providing depth, richness, and longevity. These molecules
          evaporate slowly and can last 4-8 hours or more, creating the scent
          trail you leave behind and the memory that lingers on your skin.
        </S.Paragraph>
        <S.Paragraph>
          Common base notes include woods (sandalwood, cedar, vetiver), resins
          (frankincense, myrrh), musk, amber, vanilla, and leather. These
          ingredients fix the fragrance to your skin and slow the evaporation of
          more volatile notes above them.
        </S.Paragraph>
        <S.Paragraph>
          The base notes are what you smell hours after application—the dry down
          that many fragrance enthusiasts consider the true test of a perfume's
          quality. A well-constructed base provides satisfying closure to the
          fragrance journey.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Understanding Fragrance Evolution</S.SectionTitle>
        <S.Paragraph>
          The magic of fine fragrance lies in how these three layers interact
          and evolve over time. A skilled perfumer considers not just individual
          notes, but how they transition into one another and how the complete
          composition develops on skin.
        </S.Paragraph>
        <S.Paragraph>
          When testing fragrances, always allow time for full development:
        </S.Paragraph>
        <S.List role="list" aria-label="Fragrance testing timeline">
          <S.ListItem role="listitem">
            <S.Highlight>First 15 minutes:</S.Highlight> Evaluate top notes and
            initial impression
          </S.ListItem>
          <S.ListItem role="listitem">
            <S.Highlight>1-2 hours:</S.Highlight> Experience the heart notes and
            true character
          </S.ListItem>
          <S.ListItem role="listitem">
            <S.Highlight>4+ hours:</S.Highlight> Judge the base notes and
            overall longevity
          </S.ListItem>
        </S.List>
        <S.Paragraph>
          Understanding note pyramids helps you appreciate the artistry behind
          your favorite fragrances and make more informed choices when expanding
          your collection. It transforms fragrance from a simple scent into a
          temporal art form that unfolds across hours.
        </S.Paragraph>
      </S.Section>
    </AcademyWrapper>
  );
};

export default NotePyramidsExplained;
