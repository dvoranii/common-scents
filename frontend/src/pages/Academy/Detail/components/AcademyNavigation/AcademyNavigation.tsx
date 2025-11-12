import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { academy } from "../../../../../data/academy";
import {
  NavigationContainer,
  NavSection,
  NavButtonWrapper,
  NavButton,
  NavTitle,
  GuideTitle,
} from "./AcademyNavigation.styled";

interface AcademyNavigationProps {
  currentSlug: string;
  basePath?: string;
}

const AcademyNavigation: React.FC<AcademyNavigationProps> = ({
  currentSlug,
  basePath = "/academy",
}) => {
  const navigate = useNavigate();

  const currentIndex = academy.findIndex((item) => item.slug === currentSlug);
  const nextItem =
    currentIndex < academy.length - 1 ? academy[currentIndex + 1] : null;
  const prevItem = currentIndex > 0 ? academy[currentIndex - 1] : null;

  const handleNext = () => {
    if (nextItem) {
      navigate(`${basePath}/${nextItem.slug}`);
    }
  };

  const handlePrev = () => {
    if (prevItem) {
      navigate(`${basePath}/${prevItem.slug}`);
    }
  };

  return (
    <NavigationContainer>
      <NavSection>
        {prevItem && (
          <NavButtonWrapper $alignItems="flex-start">
            <NavButton onClick={handlePrev} $position="left">
              <ChevronLeft size={20} />
              <NavTitle>Previous</NavTitle>
            </NavButton>
            <GuideTitle $textAlign="left">{prevItem.title}</GuideTitle>
          </NavButtonWrapper>
        )}
      </NavSection>

      <NavSection>
        {nextItem && (
          <NavButtonWrapper $alignItems="flex-end">
            <NavButton onClick={handleNext} $position="right">
              <NavTitle>Next</NavTitle>
              <ChevronRight size={20} />
            </NavButton>
            <GuideTitle $textAlign="right">{nextItem.title}</GuideTitle>
          </NavButtonWrapper>
        )}
      </NavSection>
    </NavigationContainer>
  );
};

export default AcademyNavigation;
