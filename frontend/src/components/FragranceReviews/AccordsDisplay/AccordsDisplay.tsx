import React from "react";
import type { Accords } from "../../../types/fragrance.types";
import {
  AccordsColumn,
  SectionTitle,
  AccordsGrid,
  AccordItem,
} from "./AccordsDisplay.styled";

interface AccordsDisplayProps {
  accords?: Accords[];
}

export const AccordsDisplay: React.FC<AccordsDisplayProps> = ({ accords }) => {
  if (!accords || accords.length === 0) return null;

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
          >
            {accord.name}
          </AccordItem>
        ))}
      </AccordsGrid>
    </AccordsColumn>
  );
};
