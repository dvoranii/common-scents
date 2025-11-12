import React from "react";
import AcademyWrapper from "../../../components/AcademyWrapper/AcademyWrapper";
import * as S from "../../../components/AcademyTemplate/AcademyTemplate.styled";

const SustainablePerfumery: React.FC = () => {
  return (
    <AcademyWrapper slug="sustainable-perfumery">
      <S.Intro>
        As consumers become increasingly conscious of their environmental
        impact, the fragrance industry is undergoing a quiet revolution.
        Sustainable perfumery represents a new paradigm that balances olfactory
        artistry with environmental responsibility, ethical sourcing, and social
        consciousness— proving that beautiful scents and beautiful ethics can
        coexist harmoniously.
      </S.Intro>

      <S.Section>
        <S.SectionTitle>
          Ethical Sourcing: Protecting People and Planet
        </S.SectionTitle>
        <S.Paragraph>
          The journey toward sustainability begins at the source. Many
          traditional perfume ingredients come from vulnerable ecosystems or
          developing regions where fair trade practices are essential.
          Sustainable perfumery prioritizes transparent supply chains that
          benefit both the environment and local communities.
        </S.Paragraph>
        <S.Paragraph>
          Initiatives like{" "}
          <S.Highlight>Fair Trade certified vanilla</S.Highlight> from
          Madagascar and{" "}
          <S.Highlight>responsibly harvested sandalwood</S.Highlight> from
          Australia ensure that farmers receive fair compensation while
          implementing sustainable agricultural practices. Similarly, rose and
          jasmine growers in Grasse and Bulgaria are adopting organic farming
          methods that protect biodiversity and soil health.
        </S.Paragraph>
        <S.Paragraph>
          These efforts not only preserve traditional cultivation knowledge but
          also ensure that future generations will continue to enjoy these
          precious natural materials.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>
          Green Chemistry: The Rise of Bio-Based Synthetics
        </S.SectionTitle>
        <S.Paragraph>
          Synthetic molecules often get a bad reputation, but when created
          through green chemistry principles, they can be more sustainable than
          their natural counterparts. Modern biotechnology allows perfumers to
          create scent molecules that are identical to natural ones but produced
          sustainably through fermentation rather than resource-intensive
          agriculture.
        </S.Paragraph>
        <S.Paragraph>
          <S.Highlight>Bio-vetiverol</S.Highlight>, for example, replicates the
          scent of vetiver without the environmental impact of harvesting the
          roots.
          <S.Highlight>Ambrox</S.Highlight> derived from sustainable sugar cane
          provides the warm amber notes once obtained from ambergris. These
          innovations reduce pressure on endangered species and vulnerable
          ecosystems while ensuring scent consistency and availability.
        </S.Paragraph>
        <S.Paragraph>
          Advanced synthesis methods also minimize waste, reduce energy
          consumption, and eliminate harmful byproducts, making modern synthetic
          ingredients an environmentally responsible choice.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>
          Circular Thinking: Packaging and Production
        </S.SectionTitle>
        <S.Paragraph>
          Sustainability extends beyond ingredients to packaging and production
          methods. Forward-thinking fragrance houses are implementing circular
          economy principles that minimize waste and maximize resource
          efficiency.
        </S.Paragraph>
        <S.Paragraph>
          Refillable bottle programs, recycled glass and paper packaging, and
          concentrated formats that reduce shipping weight are becoming industry
          standards. Some companies are even exploring waterless fragrances and
          solid perfume formats that eliminate alcohol and reduce packaging
          altogether.
        </S.Paragraph>
        <S.Paragraph>
          Production facilities are adopting renewable energy, water recycling
          systems, and carbon-neutral manufacturing processes. These
          comprehensive approaches demonstrate that every aspect of fragrance
          creation—from field to finished product—offers opportunities for
          environmental improvement.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>The Conscious Consumer's Role</S.SectionTitle>
        <S.Paragraph>
          As consumers, our purchasing decisions drive industry change. By
          supporting brands that prioritize sustainability and transparency, we
          encourage wider adoption of ethical practices throughout the fragrance
          industry.
        </S.Paragraph>
        <S.Paragraph>
          Look for certifications like <S.Highlight>Leaping Bunny</S.Highlight>{" "}
          (cruelty-free),
          <S.Highlight>Fair Trade</S.Highlight>, and{" "}
          <S.Highlight>organic ingredients</S.Highlight>
          when selecting fragrances. Research brands' sustainability initiatives
          and transparency about their supply chains. Consider concentrating
          your collection on fewer, higher-quality fragrances rather than
          accumulating many rarely-worn bottles.
        </S.Paragraph>
        <S.Paragraph>
          Sustainable perfumery isn't about sacrifice—it's about smarter choices
          that allow us to enjoy beautiful fragrances while respecting the
          planet and its inhabitants. As this movement grows, it promises a
          future where every scent tells not just a story of artistry, but also
          one of responsibility and care.
        </S.Paragraph>
      </S.Section>
    </AcademyWrapper>
  );
};

export default SustainablePerfumery;
