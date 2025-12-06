import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding: 80px 0px 0 0px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const BrandWrapper = styled.div``;

export const BrandName = styled.p`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.text};
`;

export const FragranceName = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  font-weight: 700;
  color: rgb(38, 50, 70);
  margin-bottom: ${(props) => props.theme.spacing.md};
  line-height: 1.2;
`;

export const MetadataItem = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
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
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: center;
  gap: 2vw;
  padding-top: ${(props) => props.theme.spacing.xl};

  @media screen and (max-width: 940px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-rows: 0.5fr 0.5fr 0.5fr;
    grid-template-columns: 1fr;
    column-gap: 0;
    padding: ${(props) => props.theme.spacing.md};
    width: 100%;
  }
`;

export const BottleWrapper = styled.div`
  flex: 1;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const BottleImage = styled.img<{
  $size?: "small" | "medium" | "large" | "xlarge";
}>`
  width: 70%;
  min-width: 200px;
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
`;

// RATING

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.sm};
  gap: 0.5rem;
`;

export const RatingValue = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-family: "Lato", sans-serif;
  font-weight: bold;
  color: #1e293b;
`;

export const RatingCount = styled.span`
  color: #64748b;
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-family: sans-serif;
`;

export const HouseLogoWrapper = styled.div`
  width: 100%;
  padding-top: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    justify-content: center;
  }
`;

export const HouseLogo = styled.img`
  min-width: 150px;
  width: clamp(150px, 8vw, 200px);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 40%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding-top: ${(props) => props.theme.spacing.xxl};
    padding-bottom: ${(props) => props.theme.spacing.xxl};
  }
`;

export const AccordsAndLogoWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-row: 2;
  }
`;

export const CurrencySelect = styled.select`
  padding: 2px 4px;
  font-size: inherit;
  font-family: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;
