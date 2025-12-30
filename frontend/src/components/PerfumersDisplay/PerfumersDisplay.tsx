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
import { Link } from "react-router-dom";

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
            <Link
              key={index}
              to={`/fragrance-reviews?tags=${encodeURIComponent(
                perfumer.name
              )}`}
              style={{ textDecoration: "none" }}
            >
              <PerfumerItem>
                <PerfumerImage src={perfumer.image} alt={perfumer.name} />
                <PerfumerName>{perfumer.name}</PerfumerName>
              </PerfumerItem>
            </Link>
          ))}
        </PerfumersWrapper>
      </PerfumersContainerInner>
    </PerfumersContainer>
  );
};
