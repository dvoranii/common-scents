import React from "react";
import type { Accords } from "../../../types/fragrance.types";
import {
  AccordsColumn,
  SectionTitle,
  AccordsGrid,
  AccordItem,
} from "./AccordsDisplay.styled";
import { normalizeAccordName } from "../../../utils/accordMappings";

interface AccordsDisplayProps {
  accords?: Accords[];
  onAccordClick?: (accordName: string) => void;
  selectedAccord?: string | null;
  highlightedAccords?: string[];
}

export const AccordsDisplay: React.FC<AccordsDisplayProps> = ({
  accords,
  onAccordClick,
  selectedAccord,
  highlightedAccords = [],
}) => {
  if (!accords || accords.length === 0) return null;

  const handleAccordClick = (accordName: string) => {
    onAccordClick?.(accordName);
  };

  const isAccordHighlighted = (accordName: string): boolean => {
    const normalized = normalizeAccordName(accordName);
    const isHighlighted = highlightedAccords.includes(normalized);

    return isHighlighted;
  };
  return (
    <AccordsColumn>
      <SectionTitle>Main Accords</SectionTitle>
      <AccordsGrid>
        {accords.map((accord, index) => (
          <AccordItem
            key={index}
            $width={accord.width}
            $background={accord.background}
            $color={accord.color}
            $isSelected={selectedAccord === accord.name}
            $isHighlighted={isAccordHighlighted(accord.name)}
            $clickable={!!onAccordClick}
            onClick={() => handleAccordClick(accord.name)}
          >
            {accord.name}
          </AccordItem>
        ))}
      </AccordsGrid>
    </AccordsColumn>
  );
};
