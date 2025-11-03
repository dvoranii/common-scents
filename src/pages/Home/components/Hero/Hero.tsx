import React from "react";
import { usePositionAwareButton } from "../../../../hooks/usePositionAwareButton";
import CommonScentsLogo from "../../../../assets/cs-bulb.png";
import {
  HeroSection,
  HeroContent,
  LogoContainer,
  TitleContainer,
  MainTitle,
  Tagline,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "./Hero.styled";

export const Hero: React.FC = () => {
  const secondaryButtonRef = usePositionAwareButton();

  return (
    <HeroSection>
      <HeroContent>
        <LogoContainer>
          <img src={CommonScentsLogo} alt="Common Scents Logo" />
        </LogoContainer>

        <TitleContainer>
          <MainTitle>COMMON SCENTS</MainTitle>
          <Tagline>MAKING SCENTS MAKE SENSE</Tagline>
        </TitleContainer>

        <ButtonGroup>
          <PrimaryButton>Explore Reviews</PrimaryButton>
          <SecondaryButton ref={secondaryButtonRef}>
            Watch on YouTube
            <span></span>
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};
