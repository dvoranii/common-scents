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

  @media screen and (max-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4vw;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-rows: 0.4fr 0.5fr 0.5fr;
    grid-template-columns: 1fr;
    column-gap: 0;
    padding: ${(props) => props.theme.spacing.md};
    width: 100%;
  }
`;

export const BottleLongevityWrapper = styled.div`
  flex: 1;
`;

export const LongevityTable = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  /* border: 1px solid black; */
  margin-top: ${(props) => props.theme.spacing.md};
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-top: 2.4rem;
  }
`;

export const TableHeader = styled.div`
  padding: ${(props) => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  font-weight: 600;
  text-align: center;
  background-color: #eee;
  color: ${(props) => props.theme.colors.text};
  letter-spacing: 0.25px;
  font-size: ${(props) => props.theme.fontSizes.base};

  &:nth-child(1),
  &:nth-child(2) {
    border-right: 1px solid white;
  }

  &:nth-child(3) {
    border-right: none;
  }

  &:last-child {
    border-right: none;
  }
`;

export const TableCell = styled.div`
  padding: ${(props) => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  text-align: center;
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;

  &:nth-child(4) {
    border-left: 1px solid lightgrey;
  }

  &:last-child {
    border-right: 1px solid lightgrey;
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
        return "215px";
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
  padding-top: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    justify-content: center;

    a {
      display: flex;
      justify-content: center;
    }
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
    padding-top: 1.2rem;
  }
`;

export const CurrencySelect = styled.select`
  padding: 2px 4px;
  font-size: 12px;
  color: #333;
  letter-spacing: 1px;
  font-family: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;

export const ProjectionAndSillageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1.2rem;
  font-size: ${(props) => props.theme.fontSizes.base};
`;

export const ContentWrapper = styled.div`
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-width: 30%;

  p {
    font-size: clamp(0.8rem, 1vw, 1.125rem);
    text-align: center;
  }
  p > span {
    font-weight: 900;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    p {
      font-size: clamp(1rem, 1vw, 1.125rem);
    }
  }

  @media screen and (max-width: 436px) {
    p {
      font-size: clamp(0.8rem, 1vw, 1.125rem);
    }
  }
`;

export const RatingBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const RatingFill = styled.div<{
  $percentage: number;
  $ratingFill?: string;
}>`
  height: 100%;
  width: ${(props) => props.$percentage}%;
  background-color: ${(props) =>
    props.$ratingFill ? props.$ratingFill : "#007bff"};
  border-radius: 4px;
  transition: width 0.3s ease;
`;
