import React from "react";
import { getAllCategories } from "../../../../utils/categoriesUtils";
import { CarouselSlide, Carousel } from "../../../../components/Carousel";
import {
  CategoryCard,
  CategoryIcon,
  CategoryName,
} from "./ScentCategories.styled";
import {
  Section,
  SectionContent,
  SectionTitle,
} from "../../../../styles/CommonStyles";

export const ScentCategories: React.FC = () => {
  const categories = getAllCategories();

  return (
    <Section altBg $hasBgImg>
      <SectionContent>
        <SectionTitle>Scent Categories</SectionTitle>

        <Carousel>
          {categories.map((category) => (
            <CarouselSlide key={category.slug}>
              <CategoryCard bgColor={category.color}>
                <CategoryIcon $color={category.iconColor}>
                  <category.icon size={48} />
                </CategoryIcon>
                <CategoryName>{category.name}</CategoryName>
              </CategoryCard>
            </CarouselSlide>
          ))}
        </Carousel>
      </SectionContent>
    </Section>
  );
};
