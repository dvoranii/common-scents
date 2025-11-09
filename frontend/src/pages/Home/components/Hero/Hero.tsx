import React from "react";
import { usePositionAwareButton } from "../../../../hooks/usePositionAwareButton";
import CommonScentsLogo from "../../../../assets/cs-bulb.png";
import { ButtonGroup, PrimaryButton, SecondaryButton } from "./Hero.styled";
import { Link } from "react-router-dom";
import {
  MainTitle,
  TitleContainer,
  Tagline,
  LogoContainer,
  HeroSection,
  HeroContent,
} from "../../../../styles/CommonStyles";

export const Hero: React.FC = () => {
  const secondaryButtonRef = usePositionAwareButton();

  return (
    <HeroSection>
      <HeroContent>
        <LogoContainer>
          <img src={CommonScentsLogo} alt="Common Scents Logo" />
        </LogoContainer>

        <TitleContainer>
          <MainTitle>Common Scents</MainTitle>
          <Tagline>Making Scents Make Sense</Tagline>
        </TitleContainer>

        <ButtonGroup>
          <Link to="/fragrance-reviews">
            <PrimaryButton>Explore Reviews</PrimaryButton>
          </Link>

          <SecondaryButton ref={secondaryButtonRef}>
            Watch on YouTube
            <span></span>
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};
