import { useParams, Navigate } from "react-router-dom";
import { useMemo } from "react";
import {
  getAllOccasions,
  getOccasionBySlug,
} from "../../../utils/occasionsUtils";
import { occasionDetails } from "../../../data/occasionDetails";
import * as S from "./OccasionDetailPage.styled";

import { MainTitle } from "../../../styles/CommonStyles";
import PageNavigation from "../../../components/PageNavigation/PageNavigation";

import { SettingCardWithSlideshow } from "./SettingCardWithSlideshow/SettingCardWithSlideshow";
import {
  getTitleColor,
  getSubtitleColor,
  overlayOpacity,
  subtitleBGColour,
  titleBGColour,
} from "../../../utils/occasionThemeUtils";

import KeyboardNavTooltip from "../../../components/KeyboardNavTooltip/KeyboardNavTooltip";
import { SEO } from "../../../components/SEO/SEO";

const OccasionDetailPage: React.FC = () => {
  const { occasionSlug } = useParams<{ occasionSlug: string }>();
  const occasion = occasionSlug ? getOccasionBySlug(occasionSlug) : undefined;
  const details = occasionSlug ? occasionDetails[occasionSlug] : undefined;
  const occasions = getAllOccasions();

  const structuredData = useMemo(() => {
    if (!occasion || !details) return undefined;

    return {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      name: `${occasion.name} Fragrances - Common Scents HQ`,
      description: details.fullDescription || occasion.description,
      url: `https://commonscentshq.com/occasions/${occasionSlug}`,
      mainEntity: {
        "@type": "DefinedTerm",
        name: occasion.name,
        description: details.fullDescription || occasion.description,
        inDefinedTermSet: "Fragrance Occasions",
      },
    };
  }, [occasion, details, occasionSlug]);

  if (!occasion) {
    return <Navigate to="/" replace />;
  }

  const tiltOptions = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
    scale: 1.02,
    perspective: 2000,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const seoTitle = `${occasion.name} Fragrances | Best Scents & Recommendations`;
  const seoDescription =
    details?.fullDescription ||
    `Find the perfect ${occasion.name.toLowerCase()} fragrance. Explore scent recommendations and guidelines for ${occasion.name.toLowerCase()} occasions and settings.`;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={`https://commonscentshq.com/occasions/${occasionSlug}`}
        image={occasion.image}
        structuredData={structuredData}
      />
      <S.PageWrapper>
        <KeyboardNavTooltip section="occasions" />
        <S.HeroImageContainer
          $bgImg={occasion.image}
          $overlayOpacity={overlayOpacity(occasion.slug)}
        >
          <S.HeroImageContainerInner>
            <MainTitle
              $center
              $color={getTitleColor(occasion.slug)}
              $bgColor={titleBGColour(occasion.slug)}
            >
              {occasion.name}
            </MainTitle>

            {details?.subtitle && (
              <S.OccasionSubtitle
                $color={getSubtitleColor(occasion.slug)}
                $bgColor={subtitleBGColour(occasion.slug)}
              >
                {details.subtitle}
              </S.OccasionSubtitle>
            )}
          </S.HeroImageContainerInner>
        </S.HeroImageContainer>

        <S.ContentContainer>
          <S.Description>
            {details?.fullDescription || occasion.description}
          </S.Description>

          {details?.settings && details.settings.length > 0 && (
            <S.SettingsSection>
              <S.SectionTitle>Perfect For</S.SectionTitle>
              <S.SettingGrid>
                {details.settings.map((setting) => (
                  <SettingCardWithSlideshow
                    key={setting.title}
                    setting={setting}
                    tiltOptions={tiltOptions}
                  />
                ))}
              </S.SettingGrid>
            </S.SettingsSection>
          )}

          <S.FragranceListPlaceholder>
            <S.SectionTitle>Recommended Fragrances</S.SectionTitle>
            <p style={{ textAlign: "center", color: "#666" }}>
              Fragrance recommendations coming soon...
            </p>
          </S.FragranceListPlaceholder>

          <PageNavigation
            center
            stackMobile={false}
            currentSlug={occasionSlug!}
            items={occasions.map((cat) => ({
              slug: cat.slug,
              title: cat.name,
            }))}
            basePath="/occasions"
          />
          <S.SeeSeasonsLink to="/seasons/winter">View Seasons</S.SeeSeasonsLink>
        </S.ContentContainer>
      </S.PageWrapper>
    </>
  );
};

export default OccasionDetailPage;
