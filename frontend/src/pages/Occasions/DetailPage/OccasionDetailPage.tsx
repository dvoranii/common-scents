import { useParams, Navigate } from "react-router-dom";
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

const OccasionDetailPage: React.FC = () => {
  const { occasionSlug } = useParams<{ occasionSlug: string }>();
  const occasion = occasionSlug ? getOccasionBySlug(occasionSlug) : undefined;
  const details = occasionSlug ? occasionDetails[occasionSlug] : undefined;
  const occasions = getAllOccasions();

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

  return (
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
          items={occasions.map((cat) => ({ slug: cat.slug, title: cat.name }))}
          basePath="/occasions"
        />
        <S.SeeSeasonsLink to="/seasons/winter">View Seasons</S.SeeSeasonsLink>
      </S.ContentContainer>
    </S.PageWrapper>
  );
};

export default OccasionDetailPage;
