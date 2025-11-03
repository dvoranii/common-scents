import styled from "styled-components";

export const HeroSection = styled.section`
  color: ${(props) => props.theme.colors.black};
  padding: ${(props) => `${props.theme.spacing} ${props.theme.spacing.lg}`};
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

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 30vh;
    max-width: 250px;
  }
`;

export const TitleContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  font-weight: 700;
  letter-spacing: 0.1em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.xxxxl};
  }
`;

export const Tagline = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.xl};
  letter-spacing: 0.15em;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  margin-top: ${(props) => props.theme.spacing.sm};
  padding-bottom: ${(props) => props.theme.spacing.lg};
  border-bottom: 2px solid #451a03;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  padding-top: ${(props) => props.theme.spacing.md};
`;

export const PrimaryButton = styled.button`
  position: relative;
  background: linear-gradient(to bottom, #efad70, #e88e44);
  border: 2px solid #e78732;
  color: white;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  padding: ${(props) => `${props.theme.spacing.md} ${props.theme.spacing.xl}`};
  border-radius: ${(props) => props.theme.spacing.sm};
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease;
  letter-spacing: 1px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #efad70, #e88e44);
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: ${(props) => props.theme.colors.black};
    border: 2px solid #efad70;

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const SecondaryButton = styled.button`
  position: relative;
  background-color: transparent;
  color: ${(props) => props.theme.colors.black};
  border: 2px solid #c7c6cb;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  padding: ${(props) => `${props.theme.spacing.md} ${props.theme.spacing.xl}`};
  border-radius: ${(props) => props.theme.spacing.sm};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  z-index: 1;

  span {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: linear-gradient(to bottom, #92400e 4%, #451a03 96%);
    transition: width 0.6s ease-in-out, height 0.6s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: -1;
    pointer-events: none;
  }

  &:hover {
    color: white;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
    border: 2px solid transparent;

    span {
      width: 225%;
      height: 562.5px;
    }
  }

  &:active {
    background-color: ${(props) => props.theme.colors.backgroundAlt};
  }
`;
