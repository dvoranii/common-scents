import React from "react";
import { Link } from "react-router-dom";
import * as S from "./EventsActivities.styled";
import { occasions } from "../../../../../data/occasions";

export const EventsActivities: React.FC = () => {
  return (
    <>
      <S.EventsSubtitle>Events & Activities</S.EventsSubtitle>
      <S.EventsGrid>
        {occasions.map((occasion) => (
          <S.EventCard
            key={occasion.slug}
            as={Link}
            to={`/occasions/${occasion.slug}`}
          >
            <S.EventImage
              src={occasion.thumbnail}
              alt={occasion.name}
              loading="lazy"
            />
            <S.EventOverlay>
              <S.EventTitle>{occasion.name}</S.EventTitle>
              <p>{occasion.description}</p>
            </S.EventOverlay>
          </S.EventCard>
        ))}
      </S.EventsGrid>
    </>
  );
};
