import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-vanilla-tilt";
import * as S from "./EventsActivities.styled";
import { occasions } from "../../../../../data/occasions";
import { VideoHover } from "../../../../../components/VideoHover/VideoHover";

const TILT_OPTIONS = {
  max: 12,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
  scale: 1.02,
  perspective: 1000,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  gyro: false,
};

export const EventsActivities: React.FC = () => {
  return (
    <S.EventsWrapperInner>
      <S.EventsSubtitle>Events & Activities</S.EventsSubtitle>
      <S.EventsGrid>
        {occasions.map((occasion) => (
          <S.GridItem key={occasion.slug}>
            <Tilt
              options={TILT_OPTIONS}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "20px",
                background: "transparent",
              }}
            >
              <S.EventCard
                as={Link}
                to={`/occasions/${occasion.slug}`}
                aria-label={`Explore fragrances for ${occasion.name}: ${occasion.description}`}
              >
                {occasion.video ? (
                  <VideoHover
                    videoSrc={occasion.video}
                    thumbnailSrc={occasion.thumbnail}
                    alt=""
                  />
                ) : (
                  <S.EventImage
                    src={occasion.thumbnail}
                    alt=""
                    loading="lazy"
                    width="328"
                    height="300"
                    decoding="async"
                  />
                )}
                <S.EventOverlay aria-hidden="true">
                  <S.EventTitle>{occasion.name}</S.EventTitle>
                  <p>{occasion.description}</p>
                </S.EventOverlay>
              </S.EventCard>
            </Tilt>
          </S.GridItem>
        ))}
      </S.EventsGrid>
    </S.EventsWrapperInner>
  );
};
