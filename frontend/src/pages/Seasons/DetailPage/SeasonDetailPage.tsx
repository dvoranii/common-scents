import { useParams, Navigate } from "react-router-dom";
import { getAllSeasons, getSeasonBySlug } from "../../../utils/seasonsUtils";
import { seasonDetails } from "../../../data/seasonDetail";
import * as S from "./SeasonDetailPage.styled";
import { MainTitle } from "../../../styles/CommonStyles";
import PageNavigation from "../../../components/PageNavigation/PageNavigation";
import Tilt from "react-vanilla-tilt";

import {
  getTitleColor,
  // getSubtitleWidth,
  getSubtitleColor,
  subtitleBGColour,
  titleBGColour,
  overlayOpacity,
} from "../../../utils/seasonThemeUtils";

const SeasonDetailPage: React.FC = () => {
  const { seasonSlug } = useParams<{ seasonSlug: string }>();
  const season = seasonSlug ? getSeasonBySlug(seasonSlug) : undefined;
  const details = seasonSlug ? seasonDetails[seasonSlug] : undefined;
  const seasons = getAllSeasons();

  if (!season) {
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
      <S.HeroImageContainer
        $bgImg={season.image}
        $overlayOpacity={overlayOpacity(season.slug)}
      >
        <S.HeroImageContainerInner>
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
        </S.HeroImageContainerInner>
      </S.HeroImageContainer>

      <S.ContentContainer>
        <S.Description>
          {details?.fullDescription || season.description}
        </S.Description>

        {details?.settings && details.settings.length > 0 && (
          <S.SettingsSection>
            <S.SectionTitle>Perfect For</S.SectionTitle>
            <S.SettingGrid>
              {details.settings.map((setting) => (
                <Tilt options={tiltOptions}>
                  <S.SettingCard key={setting.title}>
                    <S.SettingTitle>{setting.title}</S.SettingTitle>
                    <S.SettingDescription>
                      {setting.description}
                    </S.SettingDescription>
                    <S.SettingImage src={setting.image} />
                  </S.SettingCard>
                </Tilt>
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
