import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as S from "./PageNavigation.styled";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";

interface NavigationItem {
  slug: string;
  title: string;
}

interface PageNavigationProps {
  currentSlug: string;
  items: NavigationItem[];
  basePath: string;
  center?: boolean;
  stackMobile?: boolean;
  enableKeyboardNav?: boolean;
}

const PageNavigation: React.FC<PageNavigationProps> = ({
  currentSlug,
  items,
  basePath,
  center = false,
  stackMobile = true,
  enableKeyboardNav = true,
}) => {
  const navigate = useNavigate();

  const currentIndex = items.findIndex((item) => item.slug === currentSlug);
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextItem =
    currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  useKeyboardNavigation({
    prevPath: prevItem ? `${basePath}/${prevItem.slug}` : null,
    nextPath: nextItem ? `${basePath}/${nextItem.slug}` : null,
    enabled: enableKeyboardNav,
  });

  const renderNavSection = (
    item: NavigationItem | null,
    type: "left" | "right"
  ) => {
    if (!item) return <S.NavSection />;

    return (
      <S.NavSection $type={type}>
        <S.NavButtonWrapper
          $center={center}
          $alignItems={type === "left" ? "flex-start" : "flex-end"}
        >
          <S.NavButton
            onClick={() => navigate(`${basePath}/${item.slug}`)}
            $position={type}
          >
            {type === "left" ? (
              <ChevronLeft size={18} />
            ) : (
              <ChevronRight size={18} />
            )}
            <S.NavTitle>{type === "left" ? "Previous" : "Next"}</S.NavTitle>
          </S.NavButton>
          <S.GuideTitle $textAlign={type}>{item.title}</S.GuideTitle>
        </S.NavButtonWrapper>
      </S.NavSection>
    );
  };

  return (
    <S.NavigationContainer $stackMobile={stackMobile}>
      {renderNavSection(prevItem, "left")}
      {renderNavSection(nextItem, "right")}
    </S.NavigationContainer>
  );
};

export default PageNavigation;
