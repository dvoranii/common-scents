import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-vanilla-tilt";
import * as S from "./EventsActivities.styled";
import { occasions } from "../../../../../data/occasions";
import { VideoHover } from "../../../../../components/VideoHover/VideoHover";

export const EventsActivities: React.FC = () => {
  const tiltOptions = {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
    scale: 1.02,
    perspective: 1000,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <S.EventsWrapperInner>
      <S.EventsSubtitle>Events & Activities</S.EventsSubtitle>
      <S.EventsGrid>
        {occasions.map((occasion) => (
          <Tilt key={occasion.slug} options={tiltOptions}>
            <S.EventCard
              key={occasion.slug}
              as={Link}
              to={`/occasions/${occasion.slug}`}
            >
              {occasion.video ? (
                <VideoHover
                  videoSrc={occasion.video}
                  thumbnailSrc={occasion.thumbnail}
                  alt={occasion.name}
                />
              ) : (
                <S.EventImage
                  src={occasion.thumbnail}
                  alt={occasion.name}
                  loading="lazy"
                />
              )}
              <S.EventOverlay>
                <S.EventTitle>{occasion.name}</S.EventTitle>
                <p>{occasion.description}</p>
              </S.EventOverlay>
            </S.EventCard>
          </Tilt>
        ))}
      </S.EventsGrid>
    </S.EventsWrapperInner>
  );
};
