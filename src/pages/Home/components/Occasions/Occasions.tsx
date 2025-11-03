import React from "react";
import { Link } from "react-router-dom";
import {
  OccasionsGrid,
  OccasionCard,
  OccasionTitle,
  OccasionOverlay,
  OccasionImage,
} from "./Occasions.styled";
import { occasions } from "../../../../data/occasions";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../../../styles/CommonStyles";

export const ScentOccasions: React.FC = () => {
  return (
    <Section>
      <SectionContent>
        <SectionTitle $leftAligned>Scent Occasions</SectionTitle>

        <OccasionsGrid>
          {occasions.map((occasion) => (
            <OccasionCard
              key={occasion.slug}
              as={Link}
              to={`/occasions/${occasion.slug}`}
            >
              <OccasionImage
                src={occasion.image}
                alt={occasion.title}
                loading="lazy"
              />
              <OccasionOverlay>
                <OccasionTitle>{occasion.title}</OccasionTitle>
                <p>{occasion.description}</p>
              </OccasionOverlay>
            </OccasionCard>
          ))}
        </OccasionsGrid>
      </SectionContent>
    </Section>
  );
};
