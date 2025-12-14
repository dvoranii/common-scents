import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { Seasons } from "./Seasons/Seasons";
import { EventsActivities } from "./EventsActivities/EventsActivities";
import * as S from "./Occasions.styled";
import { SectionContent } from "../../../../styles/CommonStyles";

export const ScentOccasions: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_seasonColor, setSeasonColor] = useState("#263246");
  const [brightness, setBrightness] = useState(0);
  const [bgColor, setBgColor] = useState("#000000");

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("events-section");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.max(
        0,
        Math.min(1, (1 - rect.top / windowHeight) * 2)
      );

      setBrightness(scrollProgress);

      const colorValue = Math.round(scrollProgress * 255);
      setBgColor(`rgb(${colorValue}, ${colorValue}, ${colorValue})`);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <S.OccasionsWrapper as="section">
      <Seasons onSeasonChange={setSeasonColor} />
      <Element name="events-section" id="events-section">
        <S.EventsWrapper $brightness={brightness} $bgColor={bgColor}>
          <SectionContent>
            <EventsActivities />
          </SectionContent>
        </S.EventsWrapper>
      </Element>
    </S.OccasionsWrapper>
  );
};
