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

export const ScentCategories: React.FC = () => {
  const navigate = useNavigate();
  const categories = getAllCategories();

  const handleCategoryClick = (slug: string) => {
    navigate(`/categories/${slug}`);
  };

  return (
    <Section altBg $hasBgImg $paddingBottom="8vw">
      <SectionContent>
        <SectionTitle>Scent Categories</SectionTitle>

        <Carousel>
          {categories.map((category) => (
            <CarouselSlide key={category.slug}>
              <S.CategoryCard
                bgColor={category.color}
                onClick={() => handleCategoryClick(category.slug)}
              >
                <S.CategoryIcon $color={category.iconColor}>
                  <category.icon size={48} />
                </S.CategoryIcon>
                <S.CategoryName>{category.name}</S.CategoryName>
              </S.CategoryCard>
            </CarouselSlide>
          ))}
        </Carousel>
      </SectionContent>
    </Section>
  );
};
