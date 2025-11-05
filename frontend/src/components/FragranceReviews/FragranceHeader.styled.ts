// src/components/FragranceReview/FragranceHeader.styled.ts
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 80px 20px 0 20px;
  ${(props) => props.theme.spacing.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) => props.theme.spacing.xl};
    ${(props) => props.theme.spacing.md};
  }
`;

export const HeaderCol1 = styled.div`
  width: fit-content;
`;
export const HeaderCol2 = styled.div`
  display: flex;
  align-items: center;
`;

export const BrandWrapper = styled.div``;

export const BrandName = styled.p`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.xs};
    letter-spacing: 1.5px;
  }
`;

export const FragranceName = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.md};
  line-height: 1.2;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

// export const FragranceMetadata = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: ${(props) => props.theme.spacing.sm};
//   margin-bottom: ${(props) => props.theme.spacing.md};
//   flex-wrap: wrap;
// `;

export const MetadataItem = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export const RatingDisplay = styled.div`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.base};
  }
`;

export const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${(props) => props.theme.spacing.lg};
  max-width: 1600px;
  margin: 0 auto;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.xl};
    padding: ${(props) => props.theme.spacing.xl};
    ${(props) => props.theme.spacing.md};
  }
`;

export const BottleImage = styled.img<{
  $size?: "small" | "medium" | "large" | "xlarge";
}>`
  width: 100%;
  max-width: ${(props) => {
    switch (props.$size) {
      case "small":
        return "150px";
      case "medium":
        return "250px";
      case "large":
        return "350px";
      case "xlarge":
        return "450px";
      default:
        return "400px";
    }
  }};
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  display: block;
  border-radius: 12px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 300px;
  }
`;
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.md};
  }
`;

export const StatCard = styled.div`
  background: white;
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid ${(props) => props.theme.colors.border};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: ${(props) => props.theme.spacing.sm};
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: 700;
    color: ${(props) => props.theme.colors.text};
    margin: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) => props.theme.spacing.md};

    h4 {
      font-size: ${(props) => props.theme.fontSizes.xs};
    }

    p {
      font-size: ${(props) => props.theme.fontSizes.base};
    }
  }
`;

// RATING

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.sm};
  gap: 0.5rem;
`;

export const RatingValue = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-family: sans-serif;
  font-weight: bold;
  color: #1e293b;
`;

export const RatingCount = styled.span`
  color: #64748b;
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: sans-serif;
`;

// Logo

export const HouseLogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const HouseLogo = styled.img`
  width: clamp(150px, 15vw, 175px);
`;
