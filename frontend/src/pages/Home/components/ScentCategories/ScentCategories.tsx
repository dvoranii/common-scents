import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { getCategorySummaries } from "../../../../utils/categoriesUtils";
import { CarouselSlide, Carousel } from "../../../../components/Carousel";
import * as S from "./ScentCategories.styled";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../../../styles/CommonStyles";
import type { CategorySummary } from "../../../../types/summaries.types";

export const ScentCategories: React.FC = () => {
  const categories: CategorySummary[] = useMemo(
    () => getCategorySummaries(),
    []
  );

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
            {categories.map((category) => (
              <CarouselSlide key={category.slug}>
                <S.CategoryCard
                  as={Link}
                  to={`/categories/${category.slug}`}
                  $patternColor={category.iconColor || "#ccc"}
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
