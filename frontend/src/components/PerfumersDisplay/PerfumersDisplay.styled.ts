// src/components/FragranceReviews/PerfumersDisplay.styled.ts
import styled from "styled-components";

export const PerfumersContainer = styled.section`
  padding: ${(props) => props.theme.spacing.xl} 0;
  margin: ${(props) => props.theme.spacing.xl} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const PerfumersContainerInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.lg};
`;

export const PerfumerTitleBG = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  gap: ${(props) => props.theme.spacing.lg};

  &:before,
  &:after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${(props) => props.theme.colors.border};
  }
`;

export const PerfumerSectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  white-space: nowrap;
  margin: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }
`;

export const PerfumersWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.xxl};
`;

export const PerfumerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const PerfumerImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: ${(props) => props.theme.spacing.md};
  border: 3px solid ${(props) => props.theme.colors.border};
  filter: grayscale(100%);
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    border-color: ${(props) => props.theme.colors.primary};
    transform: scale(1.05);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100px;
    height: 100px;
  }
`;

export const PerfumerName = styled.p`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;
