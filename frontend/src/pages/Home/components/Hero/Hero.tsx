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
  SpotlightCanvas,
} from "../../../../styles/CommonStyles";
import useSpotlightAnimation from "../../../../hooks/useSpotlightAnimation";

export const Hero: React.FC = () => {
  const secondaryButtonRef = usePositionAwareButton();
  const canvasRef = useSpotlightAnimation();

  return (
    <HeroSection $height>
      <SpotlightCanvas ref={canvasRef} />
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

        <ButtonGroup $paddingTop="0">
          <Link to="/fragrance-reviews">
            <PrimaryButton $animate>Explore Reviews</PrimaryButton>
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
