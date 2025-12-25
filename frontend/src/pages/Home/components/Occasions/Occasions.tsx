import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { Seasons } from "./Seasons/Seasons";
import { EventsActivities } from "./EventsActivities/EventsActivities";
import * as S from "./Occasions.styled";
import { SectionContent } from "../../../../styles/CommonStyles";

export const ScentOccasions: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let requestFile: number;

    const handleScroll = () => {
      requestFile = requestAnimationFrame(() => {
        const element = sectionRef.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const scrollProgress = Math.max(
          0,
          Math.min(1, (1 - rect.top / windowHeight) * 2.5)
        );

        element.style.setProperty("--opacity-level", scrollProgress.toString());

        const colorVal = Math.floor(scrollProgress * 255);
        element.style.setProperty(
          "--bg-rgb",
          `${colorVal}, ${colorVal}, ${colorVal}`
        );
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestFile);
    };
  }, []);

  return (
    <S.OccasionsWrapper as="section" aria-label="Occasions and Events">
      <Seasons />

      <Element name="events-section" id="events-section">
        <S.EventsWrapper ref={sectionRef}>
          <SectionContent>
            <EventsActivities />
          </SectionContent>
        </S.EventsWrapper>
      </Element>
    </S.OccasionsWrapper>
  );
};
