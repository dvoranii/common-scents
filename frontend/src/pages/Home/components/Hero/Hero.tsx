import React from "react";
import { usePositionAwareButton } from "../../../../hooks/usePositionAwareButton";
import CommonScentsLogo from "/assets/images/cs-bulb.png";
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
  const secondaryButtonRef = usePositionAwareButton<HTMLAnchorElement>();
  const canvasRef = useSpotlightAnimation();

  return (
    <HeroSection $height aria-label="Introduction">
      <SpotlightCanvas ref={canvasRef} />
      <HeroContent>
        <LogoContainer $animateInfinity>
          <img
            src={CommonScentsLogo}
            alt="Common Scents - Fragrance Demystified"
            width="153"
            height="205"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </LogoContainer>

        <TitleContainer>
          <MainTitle $center>Common&nbsp;Scents</MainTitle>
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
          <PrimaryButton
            as={Link}
            to="/fragrance-reviews"
            $animate
            aria-label="Browse our fragrance reviews"
          >
            Explore Reviews
          </PrimaryButton>

          <SecondaryButton
            ref={secondaryButtonRef}
            as="a"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube
            <span></span>
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};
