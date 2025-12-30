import React, { useMemo } from "react";
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
import { SEO } from "../../../components/SEO/SEO";

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

  const structuredData = useMemo(() => {
    if (!category || !details) return undefined;

    return {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      name: `${category.name} Fragrances - Common Scents HQ`,
      description: details.fullDescription || category.description,
      url: `https://commonscentshq.com/categories/${categorySlug}`,
      mainEntity: {
        "@type": "DefinedTerm",
        name: category.name,
        description: details.fullDescription || category.description,
        inDefinedTermSet: "Fragrance Categories",
      },
    };
  }, [category, details, categorySlug]);

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

  const seoTitle = `${category.name} Fragrances | Notes, Characteristics & Recommendations`;
  const seoDescription =
    details?.fullDescription ||
    `${
      category.name
    } fragrances explained. Learn about signature notes, characteristics, and find the perfect ${category.name.toLowerCase()} scent for any occasion.`;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={`https://commonscentshq.com/categories/${categorySlug}`}
        image={details?.image}
        structuredData={structuredData}
      />

      <main>
        <KeyboardNavTooltip section="scent-categories" />
        <S.CategoryHeader
          $bgColor={category.color}
          $iconPattern={iconPattern}
          role="banner"
          aria-labelledby="category-title"
        >
          <S.CategoryIcon
            $bgColor={category.iconBg}
            $color={category.iconColor}
            aria-hidden="true"
          >
            <category.icon size={96} />
          </S.CategoryIcon>
          <S.CategoryName id="category-title">{category.name}</S.CategoryName>
          {details?.subtitle && (
            <S.CategorySubtitle>{details.subtitle}</S.CategorySubtitle>
          )}
        </S.CategoryHeader>

        <S.CategoryBodyWrapper>
          <S.ImgAndDescriptionWrapper>
            <S.ImgWrapper>
              <S.CategoryImg
                src={details?.image}
                alt={`${category.name} fragrance category visual representation`}
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
              />
            </S.ImgWrapper>
            <S.DescriptionWrapper>
              <S.Description>
                {details?.fullDescription || category.description}
              </S.Description>
            </S.DescriptionWrapper>
          </S.ImgAndDescriptionWrapper>

          {details?.noteProfiles && details.noteProfiles.length > 0 && (
            <S.NoteProfilesSection aria-labelledby="signature-notes">
              <SectionTitle $leftAligned $color id="signature-notes">
                Signature Notes
              </SectionTitle>
              <S.NoteProfileGrid
                role="list"
                aria-label={`${category.name} signature note profiles`}
              >
                {details.noteProfiles.map((profile) => (
                  <Tilt
                    key={profile.title}
                    options={tiltOptions}
                    aria-label={`${profile.title} note profile`}
                  >
                    <S.NoteProfileCard role="listitem">
                      <S.NoteProfileTitle>{profile.title}</S.NoteProfileTitle>
                      <S.NoteProfileDescription>
                        {profile.description}
                      </S.NoteProfileDescription>
                      <S.ExampleNotes aria-label="Example fragrances">
                        {profile.examples.map((example, index) => (
                          <S.ExampleImage
                            key={index}
                            src={example.image}
                            alt={example.alt}
                            title={example.title}
                            width="50"
                            height="50"
                            loading="lazy"
                            decoding="async"
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
              <S.CharacteristicsSection aria-labelledby="key-characteristics">
                <S.SectionTitle id="key-characteristics">
                  Key&nbsp;Characteristics
                </S.SectionTitle>
                <S.CharacteristicsGrid
                  role="list"
                  aria-label="Key characteristics"
                >
                  {details.characteristics.map((characteristic) => (
                    <S.CharacteristicChip
                      key={characteristic.text}
                      $bgColour={characteristic.color}
                      role="listitem"
                    >
                      {characteristic.text}
                    </S.CharacteristicChip>
                  ))}
                </S.CharacteristicsGrid>
              </S.CharacteristicsSection>
            )}

            {details?.bestFor && details.bestFor.length > 0 && (
              <S.BestForSection aria-labelledby="perfect-for">
                <S.SectionTitle id="perfect-for">
                  Perfect&nbsp;For
                </S.SectionTitle>
                <S.CharacteristicsGrid role="list" aria-label="Best use cases">
                  {details.bestFor.map((useCase) => (
                    <S.CharacteristicChip
                      key={useCase.text}
                      $bgColour={useCase.color}
                      role="listitem"
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
            items={categories.map((cat) => ({
              slug: cat.slug,
              title: cat.name,
            }))}
            basePath="/categories"
          />
        </S.CategoryBodyWrapper>
      </main>
    </>
  );
};

export default CategoryDetailPage;
