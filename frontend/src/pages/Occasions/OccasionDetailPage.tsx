import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { getAllOccasions, getOccasionBySlug } from "../../utils/occasionsUtils";
import { occasionDetails } from "../../data/occasionDetails";
import {
  PageWrapper,
  HeroImage,
  ContentContainer,
  OccasionSubtitle,
  Description,
  SettingsSection,
  SectionTitle,
  SettingGrid,
  SettingCard,
  SettingTitle,
  SettingDescription,
  ExampleScents,
  FragranceListPlaceholder,
} from "./OccasionDetailPage.styled";
import { MainTitle } from "../../styles/CommonStyles";
import PageNavigation from "../../components/PageNavigation/PageNavigation";

const OccasionDetailPage: React.FC = () => {
  const { occasionSlug } = useParams<{ occasionSlug: string }>();
  const occasion = occasionSlug ? getOccasionBySlug(occasionSlug) : undefined;
  const details = occasionSlug ? occasionDetails[occasionSlug] : undefined;
  const occasions = getAllOccasions();

  if (!occasion) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageWrapper>
      <HeroImage src={occasion.image} alt={occasion.title} />

      <ContentContainer>
        <MainTitle $center>{occasion.title}</MainTitle>

        {details?.subtitle && (
          <OccasionSubtitle>{details.subtitle}</OccasionSubtitle>
        )}

        <Description>
          {details?.fullDescription || occasion.description}
        </Description>

        {details?.settings && details.settings.length > 0 && (
          <SettingsSection>
            <SectionTitle>Perfect For</SectionTitle>
            <SettingGrid>
              {details.settings.map((setting) => (
                <SettingCard key={setting.title}>
                  <SettingTitle>{setting.title}</SettingTitle>
                  <SettingDescription>{setting.description}</SettingDescription>
                  <ExampleScents>{setting.examples.join(" • ")}</ExampleScents>
                </SettingCard>
              ))}
            </SettingGrid>
          </SettingsSection>
        )}

        <FragranceListPlaceholder>
          <SectionTitle>Recommended Fragrances</SectionTitle>
          <p style={{ textAlign: "center", color: "#666" }}>
            Fragrance recommendations coming soon...
          </p>
        </FragranceListPlaceholder>

        <PageNavigation
          currentSlug={occasionSlug!}
          items={occasions.map((cat) => ({ slug: cat.slug, title: cat.title }))}
          basePath="/occasions"
        />
      </ContentContainer>
    </PageWrapper>
  );
};

export default OccasionDetailPage;
