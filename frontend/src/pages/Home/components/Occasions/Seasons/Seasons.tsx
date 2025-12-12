import React, { useEffect, useState, useRef } from "react";
import * as S from "./Seasons.styled";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AutumnBg from "/assets/images/Occasions/Seasons/autumn.webp";
// import WinterBg from "../../../../../assets/Occasions/Seasons/winter-lake.jpg";
import SpringBg from "/assets/images/Occasions/Seasons/spring.webp";
import SeasonDonutWheel from "./SeasonDonutWheel/SeasonDonutWheel";

interface SeasonData {
  name: string;
  desktopDescription: string;
  mobileDescription: string;
  backgroundColor: string;
  backgroundImg?: string;
  backgroundGradient?: string;
  slug: string;
}

const SEASONS: SeasonData[] = [
  {
    name: "Winter",
    mobileDescription:
      "The coldest season, bringing snow, shorter days, and cozy indoor activities with rich, warm fragrances perfect for intimate settings.",
    desktopDescription:
      "A season of crisp, cold air and cozy warmth indoors. Winter fragrances often feature rich, enveloping notes of amber, vanilla, and spices like cinnamon and clove, mixed with the fresh chill of pine, cedar, or mint. These scents evoke imagery of crackling fireplaces, wool blankets, and the clean, silent beauty of snowfall—perfect for creating intimate, comforting atmospheres during the year's shortest days.",
    backgroundColor: "#49a2bf",
    backgroundGradient: "linear-gradient(to top, #7BA5C1 0%, #ADD8E6 100%)",
    backgroundImg:
      "https://images.unsplash.com/photo-1642517358623-a59b74fbb228?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "winter",
  },
  {
    name: "Autumn",
    mobileDescription:
      "A season of transition with cooler temperatures, changing leaves, and earthy, spicy fragrances that capture the essence of harvest time.",
    desktopDescription:
      "The season of transformation, where warm days give way to cool evenings and landscapes blaze with color. Autumn fragrances capture this transition with earthy, spicy, and woody accords—think vetiver, patchouli, and oakmoss blended with apple, pumpkin, and nutmeg. These scents mirror the crunch of fallen leaves, the smoky aroma of bonfires, and the comforting sweetness of harvest bounty, creating sophisticated, nostalgic olfactory experiences.",
    backgroundColor: "#8b4513",
    backgroundGradient: "linear-gradient(to top, #5c2d0c 0%, #8b4513 100%)",
    backgroundImg: AutumnBg,
    slug: "autumn",
  },
  {
    name: "Summer",
    mobileDescription:
      "The hottest season with long sunny days, perfect for fresh, light fragrances with citrus and aquatic notes that capture summer energy.",
    desktopDescription:
      "A season of vibrant energy, long sun-drenched days, and carefree evenings. Summer fragrances burst with freshness and lightness—citrus notes like bergamot and lemon, aquatic accords reminiscent of ocean spray, and airy florals such as jasmine and gardenia. These scents capture the essence of salty sea breezes, tropical fruits, sun-warmed skin, and blooming gardens, perfect for creating an uplifting, energetic presence during the year's most social season.",
    backgroundColor: "#E88F45",
    backgroundGradient: "linear-gradient(to top, #c45a0e 0%, #f97316 100%)",
    backgroundImg:
      "https://images.fineartamerica.com/images-medium-large-5/summer-sky-with-bright-sun-rike-.jpg",
    slug: "summer",
  },
  {
    name: "Spring",
    mobileDescription:
      "A season of renewal with blooming flowers, warmer temperatures, and delicate, optimistic fragrances that capture nature's awakening.",
    desktopDescription:
      "The season of rebirth and renewal, where nature awakens in a symphony of color and fragrance. Spring scents are characterized by delicate, optimistic notes—dewy greens, tender blossoms like lily of the valley and peony, and soft fruits such as pear and raspberry. These fragrances evoke the feeling of morning dew on fresh grass, the first warm breeze carrying flower pollen, and the gentle optimism of longer, brighter days returning after winter's slumber.",
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
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const elementTop = rect.top + scrollPosition;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      const scrollProgress =
        (scrollPosition + windowHeight - elementTop) /
        (windowHeight + elementHeight);

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        setParallaxOffset(scrollProgress * 100 * 0.4);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      ref={sectionRef}
      $backgroundColor={currentSeason.backgroundColor}
      $backgroundImg={currentSeason.backgroundImg}
      $parallaxOffset={parallaxOffset}
    >
      <S.SeasonsContent>
        <SeasonDonutWheel
          activeIndex={currentIndex}
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
