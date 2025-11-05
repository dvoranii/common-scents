// src/components/FragranceReviews/PerfumersDisplay.tsx
import React from "react";
import type { Perfumer } from "../../types/fragrance.types";
import {
  PerfumersContainer,
  PerfumersContainerInner,
  PerfumerTitleBG,
  PerfumerSectionTitle,
  PerfumersWrapper,
  PerfumerItem,
  PerfumerImage,
  PerfumerName,
} from "./PerfumersDisplay.styled";

interface PerfumersDisplayProps {
  perfumers?: Perfumer[];
}

export const PerfumersDisplay: React.FC<PerfumersDisplayProps> = ({
  perfumers,
}) => {
  if (!perfumers || perfumers.length === 0) return null;

  return (
    <PerfumersContainer>
      <PerfumersContainerInner>
        <PerfumerTitleBG>
          <PerfumerSectionTitle>Perfumers</PerfumerSectionTitle>
        </PerfumerTitleBG>
        <PerfumersWrapper>
          {perfumers.map((perfumer, index) => (
            <PerfumerItem key={index}>
              <PerfumerImage src={perfumer.image} alt={perfumer.name} />
              <PerfumerName>{perfumer.name}</PerfumerName>
            </PerfumerItem>
          ))}
        </PerfumersWrapper>
      </PerfumersContainerInner>
    </PerfumersContainer>
  );
};
