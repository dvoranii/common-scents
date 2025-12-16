import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../../../utils/categoriesUtils";
import { CarouselSlide, Carousel } from "../../../../components/Carousel";
import * as S from "./ScentCategories.styled";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../../../styles/CommonStyles";

import { renderToStaticMarkup } from "react-dom/server";
import type { LucideIcon } from "lucide-react";

const getIconDataUri = (
  IconComponent: LucideIcon | undefined,
  color: string
): string => {
  if (!IconComponent) return "";

  const svgString = renderToStaticMarkup(
    <IconComponent color={color} size={24} strokeWidth={1.5} />
  );

  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svgString)}")`;
};

export const ScentCategories: React.FC = () => {
  const navigate = useNavigate();
  const categories = getAllCategories();

  const handleCategoryClick = (slug: string) => {
    navigate(`/categories/${slug}`);
  };

  return (
    <Section altBg $hasBgImg $paddingBottom="8vw">
      <SectionContent>
        <SectionTitle $color>Scent Categories</SectionTitle>

        <S.ScentCategoriesContainer>
          <Carousel>
            {categories.map((category) => {
              const iconPattern = getIconDataUri(
                category.icon,
                category.iconColor || ""
              );
              return (
                <CarouselSlide key={category.slug}>
                  <S.CategoryCard
                    $iconPattern={iconPattern}
                    bgColor={category.color}
                    onClick={() => handleCategoryClick(category.slug)}
                  >
                    <S.CategoryIcon $color={category.iconColor}>
                      <category.icon size={48} />
                    </S.CategoryIcon>
                    <S.CategoryName>{category.name}</S.CategoryName>
                  </S.CategoryCard>
                </CarouselSlide>
              );
            })}
          </Carousel>
        </S.ScentCategoriesContainer>
      </SectionContent>
    </Section>
  );
};
