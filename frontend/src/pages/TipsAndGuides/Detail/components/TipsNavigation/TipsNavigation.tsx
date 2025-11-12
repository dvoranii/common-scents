// components/TipsNavigation/TipsNavigation.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { guides } from "../../../../../data/guides";
import {
  NavigationContainer,
  NavSection,
  NavButtonWrapper,
  NavButton,
  NavTitle,
  //   NavButtonTextWrapper,
  GuideTitle,
} from "./TipsNavigation.styled";

interface TipsNavigationProps {
  currentSlug: string;
  basePath?: string;
}

const TipsNavigation: React.FC<TipsNavigationProps> = ({
  currentSlug,
  basePath = "/tips",
}) => {
  const navigate = useNavigate();

  const currentIndex = guides.findIndex((guide) => guide.slug === currentSlug);
  const nextGuide =
    currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;
  const prevGuide = currentIndex > 0 ? guides[currentIndex - 1] : null;

  const handleNext = () => {
    if (nextGuide) {
      navigate(`${basePath}/${nextGuide.slug}`);
    }
  };

  const handlePrev = () => {
    if (prevGuide) {
      navigate(`${basePath}/${prevGuide.slug}`);
    }
  };

  return (
    <NavigationContainer>
      <NavSection>
        {prevGuide && (
          <NavButtonWrapper $alignItems="flex-start">
            <NavButton onClick={handlePrev} $position="left">
              <ChevronLeft size={20} />
              <NavTitle>Previous</NavTitle>
            </NavButton>
            <GuideTitle $textAlign="left">{prevGuide.title}</GuideTitle>
          </NavButtonWrapper>
        )}
      </NavSection>

      <NavButtonWrapper $alignItems="flex-end">
        {nextGuide && (
          <NavSection>
            <NavButton onClick={handleNext} $position="right">
              <NavTitle>Next</NavTitle>

              <ChevronRight size={20} />
            </NavButton>
            <GuideTitle $textAlign="right">{nextGuide.title}</GuideTitle>
          </NavSection>
        )}
      </NavButtonWrapper>
    </NavigationContainer>
  );
};

export default TipsNavigation;
