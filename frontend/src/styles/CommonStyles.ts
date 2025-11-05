import styled from "styled-components";
import WhiteTextureBG from "../assets/white-texture-bg.jpg";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: white;
`;

export const Section = styled.section<{ altBg?: boolean; $hasBgImg?: boolean }>`
  padding: ${(props) =>
    `${props.theme.spacing.xxxl} ${props.theme.spacing.lg}`};
  background-color: ${(props) =>
    props.altBg ? props.theme.colors.backgroundAlt : "transparent"};

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
  max-width: 1280px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2<{
  $leftAligned?: boolean;
  $marginBottom?: string;
}>`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  text-align: ${(props) => (props.$leftAligned ? "left" : "center")};
  margin-bottom: ${(props) =>
    props.$marginBottom ? props.$marginBottom : props.theme.spacing.xxl};
  color: ${(props) => props.theme.colors.text};

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
