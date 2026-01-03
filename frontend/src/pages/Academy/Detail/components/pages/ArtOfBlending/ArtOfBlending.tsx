import React from "react";
import AcademyWrapper from "../../../components/AcademyWrapper/AcademyWrapper";
import * as S from "../../../components/AcademyTemplate/AcademyTemplate.styled";

const ArtOfBlending: React.FC = () => {
  return (
    <AcademyWrapper
      slug="the-art-of-the-blend"
      seoTitle="The Art of the Blend: 3D Evolution vs Linear Scents | Common Scents Academy"
      seoDescription="Explore the architecture of horizontal and vertical blending. Learn why 3D masterpieces differ from linear clones and simple accords."
    >
      <S.Intro>
        The difference between a "good smell" and a "masterpiece" lies in the
        structure of the blend. To understand quality, we must look at how
        perfumers build a scent in three dimensions, ensuring a smooth,
        harmonious evolution rather than a series of abrupt changes.
      </S.Intro>

      <S.Section>
        <S.SectionTitle>
          Vertical Blending: The Friend Group Analogy
        </S.SectionTitle>
        <S.Paragraph>
          Think of a 3D fragrance as a well-managed friend group. The **Top
          Notes** are the loud, charismatic friends who start the party (The
          Hook). The **Mid Notes** are the "crucial liaisons"—the bridge that
          links the fading brightness of the opening with the depth of the base.
        </S.Paragraph>
        <S.Paragraph>
          Without these bridges, the sillage feels thin or disjointed. A great
          blend uses "Horizontal and Vertical" blending to ensure the transition
          feels like a story rather than a chemical collision.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>Dimensionality in Scent</S.SectionTitle>
        <S.Paragraph>
          Not all fragrances are created equal. We can categorize them by their
          complexity:
        </S.Paragraph>
        <S.List>
          <S.ListItem>
            <S.Highlight>1D (The Accord):</S.Highlight> Simple single-note
            interactions or basic 1v1 smells.
          </S.ListItem>
          <S.ListItem>
            <S.Highlight>2D (Linear):</S.Highlight> A "linear caricature." It
            smells the same from start to finish with no evolution.
          </S.ListItem>
          <S.ListItem>
            <S.Highlight>3D (The Masterpiece):</S.Highlight> A fragrance with
            true olfactory volume, where the scent deepens and transforms over 8
            hours.
          </S.ListItem>
        </S.List>
        <S.Paragraph>
          This explains why a clone like <S.Highlight>Afnan 9pm</S.Highlight>{" "}
          might hit the same "accord" as{" "}
          <S.Highlight>JPG Ultra Male</S.Highlight>, but often lacks the 3D
          evolution and "bridges" of the original composition.
        </S.Paragraph>
      </S.Section>
    </AcademyWrapper>
  );
};

export default ArtOfBlending;
