import React, { useEffect, useState } from "react";
import * as S from "./Seasons.styled";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutumnBg from "../../../../../assets/Occasions/Seasons/autumn.webp";
import WinterBg from "../../../../../assets/Occasions/Seasons/winter-lake.jpg";
// import SummerBg from "../../../../../assets/Occasions/Seasons/big-beach.jpg";
import SpringBg from "../../../../../assets/Occasions/Seasons/spring.webp";
import SeasonDonutWheel from "./SeasonDonutWheel/SeasonDonutWheel";

interface SeasonData {
  name: string;
  emoji: string;
  description: string;
  backgroundColor: string;
  backgroundImg?: string;
  backgroundGradient?: string;
  slug: string;
}

const SEASONS: SeasonData[] = [
  {
    name: "Winter",
    emoji: "❄️",
    description:
      "The coldest season, often bringing snow, shorter days, and cozy indoor activities. Many animals hibernate, and nature rests.",
    backgroundColor: "#ADD8E6",
    backgroundGradient: "linear-gradient(to top, #7BA5C1 0%, #ADD8E6 100%)",
    backgroundImg: WinterBg,
    slug: "winter",
  },
  {
    name: "Autumn",
    emoji: "🍂",
    description:
      "A season of transition, with cooler temperatures, leaves changing color, and harvest time. It's a period of preparation for winter.",
    backgroundColor: "#8b4513",
    backgroundGradient: "linear-gradient(to top, #5c2d0c 0%, #8b4513 100%)",
    backgroundImg: AutumnBg,
    slug: "autumn",
  },

  {
    name: "Summer",
    emoji: "☀️",
    description:
      "The hottest season, known for long, sunny days, vacations, and outdoor activities. Plants and crops thrive under the sun.",
    backgroundColor: "#E88F45",
    backgroundGradient: "linear-gradient(to top, #c45a0e 0%, #f97316 100%)",
    backgroundImg:
      "https://images.fineartamerica.com/images-medium-large-5/summer-sky-with-bright-sun-rike-.jpg",
    slug: "summer",
  },
  {
    name: "Spring",
    emoji: "🌼",
    description:
      "A season of renewal, marked by blooming flowers, warmer temperatures, and longer days. Nature awakens, and animals become more active.",
    backgroundColor: "#51983C",
    backgroundGradient: "linear-gradient(to top, #3e742e 0%, #51983C 100%)",
    backgroundImg: SpringBg,
    slug: "spring",
  },
];

interface SeasonsProps {
  onSeasonChange?: (backgroundColor: string) => void;
}

export const Seasons: React.FC<SeasonsProps> = ({ onSeasonChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentSeason = SEASONS[currentIndex];

  useEffect(() => {
    onSeasonChange?.(
      currentSeason.backgroundGradient || currentSeason.backgroundColor
    );
  }, [
    currentSeason.backgroundColor,
    currentSeason.backgroundGradient,
    onSeasonChange,
  ]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setRotation((prev) => prev + 90);
    setCurrentIndex((prev) => (prev + 1) % SEASONS.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setRotation((prev) => prev - 90);
    setCurrentIndex((prev) => (prev - 1 + SEASONS.length) % SEASONS.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <S.SeasonsSection
      $backgroundColor={currentSeason.backgroundColor}
      $backgroundImg={currentSeason.backgroundImg}
    >
      {/* <S.SeasonsSubtitle>Seasons</S.SeasonsSubtitle> */}
      <S.SeasonsContent>
        <SeasonDonutWheel
          rotation={rotation}
          winterBg="url(https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1974&auto=format&fit=crop)"
          springBg="url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1974&auto=format&fit=crop)"
          summerBg="url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1974&auto=format&fit=crop)"
          autumnBg="url(https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
        />

        <S.SeasonInfo>
          <S.SeasonTitleWrapper>
            <S.SeasonTitle key={currentSeason.name}>
              {currentSeason.name}
            </S.SeasonTitle>
            <S.SeasonEmoji key={currentSeason.emoji}>
              {currentSeason.emoji}
            </S.SeasonEmoji>
          </S.SeasonTitleWrapper>

          <S.SeasonDescription key={`${currentSeason.name}-desc`}>
            {currentSeason.description}
          </S.SeasonDescription>
          <S.SeeMoreLink
            key={`${currentSeason.slug}-link`}
            to={`/seasons/${currentSeason.slug}`}
          >
            See More
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
