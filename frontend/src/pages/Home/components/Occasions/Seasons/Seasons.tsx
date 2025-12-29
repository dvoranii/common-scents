import React, { useEffect, useState, useRef, useMemo } from "react";
import * as S from "./Seasons.styled";
import { ChevronLeft, ChevronRight } from "lucide-react";

import SeasonDonutWheel from "./SeasonDonutWheel/SeasonDonutWheel";
import SeasonIndicator from "./SeasonIndicator/SeasonIndicator";

import { getSeasonSummaries } from "../../../../../utils/seasonsUtils";
import type { SeasonSummary } from "../../../../../types/summaries.types";

interface SeasonsProps {
  onSeasonChange?: (backgroundColor: string) => void;
}

export const Seasons: React.FC<SeasonsProps> = ({ onSeasonChange }) => {
  const seasonData: SeasonSummary[] = useMemo(() => getSeasonSummaries(), []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const currentSeason = seasonData[currentIndex];

  const seasonImageMap = useMemo(
    () => ({
      winter: seasonData.find((s) => s.name === "Winter")?.thumbnail || "",
      autumn: seasonData.find((s) => s.name === "Autumn")?.thumbnail || "",
      summer: seasonData.find((s) => s.name === "Summer")?.thumbnail || "",
      spring: seasonData.find((s) => s.name === "Spring")?.thumbnail || "",
    }),
    [seasonData]
  );

  useEffect(() => {
    if (onSeasonChange) {
      onSeasonChange(currentSeason.backgroundColor);
    }
  }, [currentIndex, currentSeason.backgroundColor, onSeasonChange]);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.bottom < 0 || rect.top > windowHeight) return;

        const scrollProgress =
          (window.scrollY + windowHeight - (rect.top + window.scrollY)) /
          (windowHeight + rect.height);

        if (scrollProgress >= 0 && scrollProgress <= 1) {
          const offset = scrollProgress * 40;
          sectionRef.current.style.setProperty("--parallax-y", `${offset}%`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setRotation((prev) => prev + 90);
    setCurrentIndex((prev) => (prev + 1) % seasonData.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setRotation((prev) => prev - 90);
    setCurrentIndex(
      (prev) => (prev - 1 + seasonData.length) % seasonData.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <S.SeasonsSection
      ref={sectionRef}
      $backgroundColor={currentSeason.backgroundColor}
      $backgroundImg={currentSeason.image}
      aria-label="Seasonal Fragrance Collections"
    >
      <SeasonIndicator activeSeason={currentSeason.name} />

      <S.SeasonsContent>
        <SeasonDonutWheel
          activeIndex={currentIndex}
          rotation={rotation}
          winterImg={seasonImageMap.winter}
          springImg={seasonImageMap.spring}
          summerImg={seasonImageMap.summer}
          autumnImg={seasonImageMap.autumn}
        />

        <S.SeasonInfo aria-live="polite">
          <S.SeasonTitleWrapper>
            <S.SeasonTitle key={currentSeason.name}>
              {currentSeason.name}
            </S.SeasonTitle>
          </S.SeasonTitleWrapper>

          <S.SeasonDescription
            className="mobile-only"
            key={`${currentSeason.name}-mobile`}
          >
            {currentSeason.mobileDescription}
          </S.SeasonDescription>

          <S.SeasonDescription
            className="desktop-only"
            key={`${currentSeason.name}-desktop`}
          >
            {currentSeason.desktopDescription}
          </S.SeasonDescription>

          <S.SeeMoreLink
            key={`${currentSeason.slug}-link`}
            to={`/seasons/${currentSeason.slug}`}
            aria-label={`Learn more about ${currentSeason.name} fragrances`}
          >
            Explore {currentSeason.name} Fragrances
          </S.SeeMoreLink>
        </S.SeasonInfo>

        <S.NavigationControls>
          <S.NavButton
            onClick={handlePrev}
            disabled={isAnimating}
            aria-label="Previous season"
          >
            <ChevronLeft size={24} />
          </S.NavButton>
          <S.NavButton
            onClick={handleNext}
            disabled={isAnimating}
            aria-label="Next season"
          >
            <ChevronRight size={24} />
          </S.NavButton>
        </S.NavigationControls>
      </S.SeasonsContent>
    </S.SeasonsSection>
  );
};
