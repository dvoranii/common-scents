// Update CategoryDetailPage.tsx
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { getCategoryBySlug } from "../../utils/categoriesUtils";
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
} from "./CategoryDetailPage.styled";
import { SectionTitle } from "../../styles/CommonStyles";

const CategoryDetailPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const details = categorySlug ? categoriesDetail[categorySlug] : undefined;

  if (!category) {
    return <Navigate to="/" replace />;
  }

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
    </PageWrapper>
  );
};

export default CategoryDetailPage;
