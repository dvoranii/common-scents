import React from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  getAllCategories,
  getCategoryBySlug,
} from "../../../utils/categoriesUtils";
import { categoriesDetail } from "../../../data/categoriesDetails";
import * as S from "./CategoryDetailPage.styled";
import { SectionTitle } from "../../../styles/CommonStyles";
import Tilt from "react-vanilla-tilt";
import PageNavigation from "../../../components/PageNavigation/PageNavigation";
import { renderToStaticMarkup } from "react-dom/server";
import type { LucideIcon } from "lucide-react";
import KeyboardNavTooltip from "../../../components/KeyboardNavTooltip/KeyboardNavTooltip";

interface TiltOptions {
  max?: number;
  speed?: number;
  glare?: boolean;
  "max-glare"?: number;
  scale?: number;
  perspective?: number;
  transition?: boolean;
  easing?: string;
}

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

const CategoryDetailPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const details = categorySlug ? categoriesDetail[categorySlug] : undefined;
  const categories = getAllCategories();

  const iconPattern = getIconDataUri(
    category?.icon,
    category?.iconBg || "#000000"
  );

  const tiltOptions: TiltOptions = {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
    scale: 1.02,
    perspective: 1000,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  if (!category) {
    return <Navigate to="/" replace />;
  }

  return (
    <S.PageWrapper>
      <KeyboardNavTooltip section="scent-categories" />
      <S.CategoryHeader $bgColor={category.color} $iconPattern={iconPattern}>
        <S.CategoryIcon $bgColor={category.iconBg} $color={category.iconColor}>
          <category.icon size={96} />
        </S.CategoryIcon>
        <S.CategoryName>{category.name}</S.CategoryName>
        {details?.subtitle && (
          <S.CategorySubtitle>{details.subtitle}</S.CategorySubtitle>
        )}
      </S.CategoryHeader>

      <S.CategoryBodyWrapper>
        <S.ImgAndDescriptionWrapper>
          <S.ImgWrapper>
            <S.CategoryImg src={details?.image} />
          </S.ImgWrapper>
          <S.DescriptionWrapper>
            <S.Description>
              {details?.fullDescription || category.description}
            </S.Description>
          </S.DescriptionWrapper>
        </S.ImgAndDescriptionWrapper>

        {details?.noteProfiles && details.noteProfiles.length > 0 && (
          <S.NoteProfilesSection>
            <SectionTitle $leftAligned $color>
              Signature Notes
            </SectionTitle>
            <S.NoteProfileGrid>
              {details.noteProfiles.map((profile) => (
                <Tilt key={profile.title} options={tiltOptions}>
                  <S.NoteProfileCard key={profile.title}>
                    <S.NoteProfileTitle>{profile.title}</S.NoteProfileTitle>
                    <S.NoteProfileDescription>
                      {profile.description}
                    </S.NoteProfileDescription>
                    <S.ExampleNotes>
                      {profile.examples.map((example, index) => (
                        <S.ExampleImage
                          key={index}
                          src={example.image}
                          alt={example.alt}
                          title={example.title}
                        />
                      ))}
                    </S.ExampleNotes>
                  </S.NoteProfileCard>
                </Tilt>
              ))}
            </S.NoteProfileGrid>
          </S.NoteProfilesSection>
        )}

        <S.CharactersticsAndBestForSection>
          {details?.characteristics && details.characteristics.length > 0 && (
            <S.CharacteristicsSection>
              <S.SectionTitle>Key&nbsp;Characteristics</S.SectionTitle>
              <S.CharacteristicsGrid>
                {details.characteristics.map((characteristic) => (
                  <S.CharacteristicChip
                    key={characteristic.text}
                    $bgColour={characteristic.color}
                  >
                    {characteristic.text}
                  </S.CharacteristicChip>
                ))}
              </S.CharacteristicsGrid>
            </S.CharacteristicsSection>
          )}

          {details?.bestFor && details.bestFor.length > 0 && (
            <S.BestForSection>
              <S.SectionTitle>Perfect&nbsp;For</S.SectionTitle>
              <S.CharacteristicsGrid>
                {details.bestFor.map((useCase) => (
                  <S.CharacteristicChip
                    key={useCase.text}
                    $bgColour={useCase.color}
                  >
                    {useCase.text}
                  </S.CharacteristicChip>
                ))}
              </S.CharacteristicsGrid>
            </S.BestForSection>
          )}
        </S.CharactersticsAndBestForSection>

        <PageNavigation
          center
          stackMobile={false}
          currentSlug={categorySlug!}
          items={categories.map((cat) => ({ slug: cat.slug, title: cat.name }))}
          basePath="/categories"
        />
      </S.CategoryBodyWrapper>
    </S.PageWrapper>
  );
};

export default CategoryDetailPage;
