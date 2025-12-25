import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { getAllSeasons, getSeasonBySlug } from "../../../utils/seasonsUtils";
import { seasonDetails } from "../../../data/seasonDetail";
import * as S from "./SeasonDetailPage.styled";
import { MainTitle } from "../../../styles/CommonStyles";
import PageNavigation from "../../../components/PageNavigation/PageNavigation";
import Tilt from "react-vanilla-tilt";
import {
  getTitleColor,
  getSubtitleColor,
  subtitleBGColour,
  titleBGColour,
  overlayOpacity,
} from "../../../utils/seasonThemeUtils";
import KeyboardNavTooltip from "../../../components/KeyboardNavTooltip/KeyboardNavTooltip";

const TILT_OPTIONS = {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
  scale: 1.02,
  perspective: 2000,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const SeasonDetailPage: React.FC = () => {
  const { seasonSlug } = useParams<{ seasonSlug: string }>();
  const season = seasonSlug ? getSeasonBySlug(seasonSlug) : undefined;
  const details = seasonSlug ? seasonDetails[seasonSlug] : undefined;
  const seasons = getAllSeasons();

  if (!season) {
    return <Navigate to="/" replace />;
  }

  return (
    <S.PageWrapper>
      <KeyboardNavTooltip section="seasons" />

      <S.HeroHeader>
        <S.HeroBgImage
          src={season.image}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <S.HeroOverlay $opacity={overlayOpacity(season.slug)} />

        <S.HeroContent>
          <MainTitle
            $center
            $color={getTitleColor(season.slug)}
            $bgColor={titleBGColour(season.slug)}
          >
            <S.Uppercase>{season.name}</S.Uppercase>
          </MainTitle>

          {details?.subtitle && (
            <S.SeasonSubtitle
              $color={getSubtitleColor(season.slug)}
              $bgColor={subtitleBGColour(season.slug)}
            >
              {details.subtitle}
            </S.SeasonSubtitle>
          )}
        </S.HeroContent>
      </S.HeroHeader>

      <S.ContentContainer>
        <S.Description>
          {details?.fullDescription || season.description}
        </S.Description>

        {details?.settings && details.settings.length > 0 && (
          <S.SettingsSection aria-label="Perfect Settings">
            <S.SectionTitle>Perfect For</S.SectionTitle>

            <S.SettingGrid>
              {details.settings.map((setting) => (
                <S.GridItem key={setting.title}>
                  <Tilt
                    options={TILT_OPTIONS}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "16px",
                      background: "white",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <S.SettingCard>
                      <S.SettingTitle>{setting.title}</S.SettingTitle>
                      <S.SettingDescription>
                        {setting.description}
                      </S.SettingDescription>
                      <S.SettingImage
                        src={setting.image}
                        alt=""
                        loading="lazy"
                        width="300"
                        height="200"
                      />
                    </S.SettingCard>
                  </Tilt>
                </S.GridItem>
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
          currentSlug={seasonSlug!}
          items={seasons.map((s) => ({ slug: s.slug, title: s.name }))}
          basePath="/seasons"
        />

        <S.SeeEventsLink to="/occasions/daily-driver">
          See Events & Activities
        </S.SeeEventsLink>
      </S.ContentContainer>
    </S.PageWrapper>
  );
};

export default SeasonDetailPage;
