import React, { useMemo } from "react";
import { Link } from "react-router-dom";
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
  const categories = getAllCategories();

  const processedCategories = useMemo(() => {
    return categories.map((category) => ({
      ...category,
      iconPattern: getIconDataUri(category.icon, category.iconColor || "#ccc"),
    }));
  }, [categories]);

  return (
    <Section
      $altBg
      $hasBgImg
      $paddingBottom="8vw"
      aria-label="Scent Categories"
    >
      <SectionContent>
        <SectionTitle $color>Scent Categories</SectionTitle>

        <S.ScentCategoriesContainer>
          <Carousel>
            {processedCategories.map((category) => (
              <CarouselSlide key={category.slug}>
                <S.CategoryCard
                  as={Link}
                  to={`/categories/${category.slug}`}
                  $iconPattern={category.iconPattern}
                  $bgColor={category.iconBg}
                  aria-label={`Browse ${category.name} scents`}
                >
                  <S.CategoryIcon $color={category.iconBg}>
                    <category.icon size={48} aria-hidden="true" />
                  </S.CategoryIcon>
                  <S.CategoryName>{category.name}</S.CategoryName>
                </S.CategoryCard>
              </CarouselSlide>
            ))}
          </Carousel>
        </S.ScentCategoriesContainer>
      </SectionContent>
    </Section>
  );
};
