import React from "react";
import AcademyWrapper from "../../../components/AcademyWrapper/AcademyWrapper";
import * as S from "../../../components/AcademyTemplate/AcademyTemplate.styled";

const GlobalPerfumery: React.FC = () => {
  return (
    <AcademyWrapper
      slug="middle-eastern-vs-french-perfumery"
      seoTitle="Middle Eastern vs. French Perfumery: Clones and Originals | Common Scents Academy"
      seoDescription="A deep dive into the cultural and technical differences between Middle Eastern and French perfumery, and the reality of the clone industry."
    >
      <S.Intro>
        The fragrance world is currently a battleground between the traditional
        French 'Grasset' style and the rising dominance of Middle Eastern
        houses. To understand the modern market, we must look at how these two
        cultures approach the art of the blend differently.
      </S.Intro>

      <S.Section>
        <S.SectionTitle>
          The Performance Powerhouse: Middle Eastern Style
        </S.SectionTitle>
        <S.Paragraph>
          Middle Eastern perfumery (think houses like Lattafa, Rasasi, or Afnan)
          prioritizes <S.Highlight>density and longevity</S.Highlight>.
          Culturally, fragrance is meant to stand up to high heat, leading to a
          heavy reliance on base notes like Oud, Musk, and Amber.
        </S.Paragraph>
        <S.Paragraph>
          This is why Middle Eastern "clones" often feel more powerful than the
          French originals they mimic. They frequently use higher concentrations
          of synthetic fixatives to ensure the scent "sticks" to the skin for
          12+ hours.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>The French Art of Transparency</S.SectionTitle>
        <S.Paragraph>
          Traditional French perfumery (Chanel, Dior, Creed) focuses on
          <S.Highlight>transparency and evolution</S.Highlight>. The goal is
          often a "3D" structure where the scent breathes and changes on the
          skin. While a French fragrance might not last as long as its Middle
          Eastern counterpart, it often offers a more sophisticated evaporation
          timeline—what we call the "vertical blend."
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>
          Clones vs. Originals: The Technical Reality
        </S.SectionTitle>
        <S.Paragraph>
          When comparing a clone like <strong>Afnan 9pm</strong> to
          <strong>JPG Ultra Male</strong>, the difference isn't just price. A
          clone captures the "accord" (the general smell), but the original
          usually wins on the "architecture." The original will have smoother
          bridges between notes, whereas a clone might feel "linear" or
          "2D"—smelling the same from spray to drydown without that artistic
          transition.
        </S.Paragraph>
      </S.Section>
    </AcademyWrapper>
  );
};

export default GlobalPerfumery;
