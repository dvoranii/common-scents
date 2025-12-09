import React, { useState } from "react";
import { Seasons } from "./Seasons/Seasons";
import { EventsActivities } from "./EventsActivities/EventsActivities";
import * as S from "./Occasions.styled";
import { SectionContent } from "../../../../styles/CommonStyles";

export const ScentOccasions: React.FC = () => {
  const [seasonColor, setSeasonColor] = useState("#263246");
  return (
    <S.OccasionsWrapper as="section">
      <S.OccasionsTitleWrapper $backgroundColor={seasonColor}>
        <S.OccasionsSectionTitle>Scent Occasions</S.OccasionsSectionTitle>
      </S.OccasionsTitleWrapper>

      <Seasons onSeasonChange={setSeasonColor} />

      <S.EventsWrapper>
        <SectionContent>
          <EventsActivities />
        </SectionContent>
      </S.EventsWrapper>
    </S.OccasionsWrapper>
  );
};
