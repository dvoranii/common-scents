import React from "react";
import { usePositionAwareButton } from "../../../../hooks/usePositionAwareButton";
import CommonScentsLogo from "../../../../assets/cs-bulb.png";
import { SecondaryButton } from "./Hero.styled";
import { Link } from "react-router-dom";
import {
  MainTitle,
  TitleContainer,
  Tagline,
  LogoContainer,
  HeroSection,
  HeroContent,
  PrimaryButton,
  ButtonGroup,
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
          <MainTitle $center>Common Scents</MainTitle>
          <Tagline
            $capitalized
            $fontSize="lg"
            $color="#222"
            $letterSpacing="1.6px"
          >
            Demystifying Fragrance
          </Tagline>
        </TitleContainer>

        <ButtonGroup>
          <Link to="/fragrance-reviews">
            <PrimaryButton>Explore Reviews</PrimaryButton>
          </Link>

          <SecondaryButton
            ref={secondaryButtonRef}
            onClick={() => window.open("https://www.youtube.com", "_blank")}
          >
            Watch on YouTube
            <span></span>
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};
