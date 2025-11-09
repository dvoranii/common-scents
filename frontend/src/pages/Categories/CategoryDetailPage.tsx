// Update CategoryDetailPage.tsx
import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import {
  getAllCategories,
  getCategoryBySlug,
} from "../../utils/categoriesUtils";
import { categoriesDetail } from "../../data/categoriesDetails";
import {
  PageWrapper,
  CategoryHeader,
  CategoryIcon,
  CategoryName,
  CategorySubtitle,
  Description,
  NoteProfilesSection,
  NoteProfileGrid,
  NoteProfileCard,
  NoteProfileTitle,
  NoteProfileDescription,
  ExampleNotes,
  CharacteristicsSection,
  CharacteristicsGrid,
  CharacteristicChip,
  BestForSection,
  ImgAndDescriptionWrapper,
  ImgWrapper,
  CategoryImg,
  DescriptionWrapper,
  ExampleImage,
  CharactersticsAndBestForSection,
  CategoryNavigation,
  NavButton,
  NavButtonWrapper,
} from "./CategoryDetailPage.styled";
import { SectionTitle } from "../../styles/CommonStyles";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategoryDetailPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const details = categorySlug ? categoriesDetail[categorySlug] : undefined;

  const categories = getAllCategories();
  const currentIndex = categories.findIndex(
    (cat: { slug: string | undefined }) => cat.slug === categorySlug
  );
  const nextCategory =
    currentIndex < categories.length - 1 ? categories[currentIndex + 1] : null;
  const prevCategory = currentIndex > 0 ? categories[currentIndex - 1] : null;

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const handleNext = () => {
    if (nextCategory) {
      navigate(`/categories/${nextCategory.slug}`);
    }
  };

  const handlePrev = () => {
    if (prevCategory) {
      navigate(`/categories/${prevCategory.slug}`);
    }
  };

  return (
    <PageWrapper>
      <CategoryHeader $bgColor={category.color}>
        <CategoryIcon $color={category.iconColor}>
          <category.icon size={64} />
        </CategoryIcon>
        <CategoryName>{category.name}</CategoryName>
        {details?.subtitle && (
          <CategorySubtitle>{details.subtitle}</CategorySubtitle>
        )}
      </CategoryHeader>

      <ImgAndDescriptionWrapper>
        <ImgWrapper>
          <CategoryImg src={details?.image} />
        </ImgWrapper>
        <DescriptionWrapper>
          <Description>
            {details?.fullDescription || category.description}
          </Description>
        </DescriptionWrapper>
      </ImgAndDescriptionWrapper>

      {details?.noteProfiles && details.noteProfiles.length > 0 && (
        <NoteProfilesSection>
          <SectionTitle $leftAligned>Signature Notes</SectionTitle>
          <NoteProfileGrid>
            {details.noteProfiles.map((profile) => (
              <NoteProfileCard key={profile.title}>
                <NoteProfileTitle>{profile.title}</NoteProfileTitle>
                <NoteProfileDescription>
                  {profile.description}
                </NoteProfileDescription>
                <ExampleNotes>
                  {profile.examples.map((example, index) => (
                    <ExampleImage
                      key={index}
                      src={example.image}
                      alt={example.alt}
                      title={example.title}
                    />
                  ))}
                </ExampleNotes>
              </NoteProfileCard>
            ))}
          </NoteProfileGrid>
        </NoteProfilesSection>
      )}

      <CharactersticsAndBestForSection>
        {details?.characteristics && details.characteristics.length > 0 && (
          <CharacteristicsSection>
            <SectionTitle>Key Characteristics</SectionTitle>
            <CharacteristicsGrid>
              {details.characteristics.map((characteristic) => (
                <CharacteristicChip
                  key={characteristic.text}
                  $bgColour={characteristic.color}
                >
                  {characteristic.text}
                </CharacteristicChip>
              ))}
            </CharacteristicsGrid>
          </CharacteristicsSection>
        )}

        {details?.bestFor && details.bestFor.length > 0 && (
          <BestForSection>
            <SectionTitle>Perfect For</SectionTitle>
            <CharacteristicsGrid>
              {details.bestFor.map((useCase) => (
                <CharacteristicChip
                  key={useCase.text}
                  $bgColour={useCase.color}
                >
                  {useCase.text}
                </CharacteristicChip>
              ))}
            </CharacteristicsGrid>
          </BestForSection>
        )}
      </CharactersticsAndBestForSection>

      <CategoryNavigation>
        <NavButtonWrapper>
          {prevCategory && (
            <NavButton onClick={handlePrev} $position="left">
              <ChevronLeft size={20} />
              {prevCategory.name}
            </NavButton>
          )}
        </NavButtonWrapper>

        <NavButtonWrapper>
          {nextCategory && (
            <NavButton onClick={handleNext} $position="right">
              {nextCategory.name}
              <ChevronRight size={20} />
            </NavButton>
          )}
        </NavButtonWrapper>
      </CategoryNavigation>
    </PageWrapper>
  );
};

export default CategoryDetailPage;
