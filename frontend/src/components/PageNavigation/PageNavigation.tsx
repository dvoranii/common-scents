import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  NavigationContainer,
  NavButtonWrapper,
  NavButton,
} from "./PageNavigation.styled";

interface NavigationItem {
  slug: string;
  title: string;
}

interface PageNavigationProps {
  currentSlug: string;
  items: NavigationItem[];
  basePath: string;
}

const PageNavigation: React.FC<PageNavigationProps> = ({
  currentSlug,
  items,
  basePath,
}) => {
  const navigate = useNavigate();

  const currentIndex = items.findIndex((item) => item.slug === currentSlug);
  const nextItem =
    currentIndex < items.length - 1 ? items[currentIndex + 1] : null;
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;

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
      <NavButtonWrapper>
        {prevItem && (
          <NavButton onClick={handlePrev} $position="left">
            <ChevronLeft size={20} />
            {prevItem.title}
          </NavButton>
        )}
      </NavButtonWrapper>

      <NavButtonWrapper>
        {nextItem && (
          <NavButton onClick={handleNext} $position="right">
            {nextItem.title}
            <ChevronRight size={20} />
          </NavButton>
        )}
      </NavButtonWrapper>
    </NavigationContainer>
  );
};

export default PageNavigation;
