import styled from "styled-components";

export const OccasionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${(props) => props.theme.spacing.lg};
  margin-top: ${(props) => props.theme.spacing.xl};
`;

export const OccasionCard = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.spacing.md};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: block;

  &:hover {
    filter: brightness(0.8);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const OccasionImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
`;

export const OccasionOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    transparent 100%
  );
  padding: ${(props) => props.theme.spacing.xl};
  color: white;

  p {
    margin: ${(props) => props.theme.spacing.xs} 0 0;
    font-size: ${(props) => props.theme.fontSizes.sm};
    opacity: 0.9;
    line-height: 1.4;
  }
`;

export const OccasionTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xl};
  margin: 0;
  color: white;
`;
