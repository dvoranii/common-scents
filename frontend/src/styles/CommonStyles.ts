import styled from "styled-components";
import WhiteTextureBG from "../assets/white-texture-bg.jpg";

export const Section = styled.section<{ altBg?: boolean; $hasBgImg?: boolean }>`
  padding: ${(props) =>
    `${props.theme.spacing.xxxl}  ${props.theme.spacing.lg}`};
  background-color: ${(props) =>
    props.altBg ? props.theme.colors.backgroundAlt : "#fff"};

  ${(props) =>
    props.$hasBgImg &&
    `
    background: 
      linear-gradient(
        rgba(255, 255, 255, 1),  
        rgba(255, 255, 255, 0.65)   
      ),
      url(${WhiteTextureBG});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}
`;

export const SectionContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2<{
  $leftAligned?: boolean;
  $marginBottom?: string;
}>`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  text-align: ${(props) => (props.$leftAligned ? "left" : "center")};
  margin-bottom: ${(props) =>
    props.$marginBottom ? props.$marginBottom : props.theme.spacing.xxl};
  color: rgb(38, 50, 70);
  font-weight: 600;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.xxxl};
  }
`;

export const SectionSubtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.textLight};
  margin-top: -${(props) => props.theme.spacing.md};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  line-height: 1.4;
  text-align: center;
  max-width: 600px;
`;

export const MainTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading1};
  font-size: ${(props) => props.theme.fontSizes.xxxxxl};
  font-weight: 500;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: rgb(38, 50, 70);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.xxxxl};
  }
`;

export const TitleContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export const Tagline = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.xl};
  letter-spacing: 1px;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  margin-top: ${(props) => props.theme.spacing.sm};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 25vh;
    max-width: 250px;
  }
`;

export const HeroSection = styled.section`
  color: ${(props) => props.theme.colors.black};
  padding: 0px 40px 20px 40px;
  text-align: center;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.primary},
    white
  );
`;

export const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: ${(props) => props.theme.spacing.xxxxl};
`;
