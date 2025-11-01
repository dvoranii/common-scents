import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import { CarouselWrapper, CarouselSlide } from "./Carousel.styled";

interface CarouselProps {
  children: React.ReactNode;
  options?: Flickity.Options;
}

const defaultOptions: Flickity.Options = {
  cellAlign: "left",
  contain: true,
  pageDots: true,
  prevNextButtons: true,
  draggable: true,
  wrapAround: true,
  groupCells: false,
  adaptiveHeight: false,
};

export const Carousel: React.FC<CarouselProps> = ({ children, options }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const flickityRef = useRef<Flickity | null>(null);

  useEffect(() => {
    if (carouselRef.current && !flickityRef.current) {
      flickityRef.current = new Flickity(carouselRef.current, {
        ...defaultOptions,
        ...options,
      });
    }

    return () => {
      if (flickityRef.current) {
        flickityRef.current.destroy();
        flickityRef.current = null;
      }
    };
  }, [options]);

  return (
    <CarouselWrapper>
      <div ref={carouselRef}>{children}</div>
    </CarouselWrapper>
  );
};

export { CarouselSlide };
