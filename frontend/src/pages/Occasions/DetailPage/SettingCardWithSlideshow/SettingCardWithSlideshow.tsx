import React, { useState, useEffect } from "react";
import Tilt from "react-vanilla-tilt";
import * as S from "../OccasionDetailPage.styled";

interface TiltOptions {
  max?: number;
  speed?: number;
  glare?: boolean;
  "max-glare"?: number;
  scale?: number;
  perspective?: number;
  transition?: boolean;
  easing?: string;
}

interface Setting {
  title: string;
  description: string;
  image?: string;
  images?: string[];
}

interface SettingCardWithSlideshowProps {
  setting: Setting;
  tiltOptions: TiltOptions;
}

export const SettingCardWithSlideshow: React.FC<
  SettingCardWithSlideshowProps
> = ({ setting, tiltOptions }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Get images array, fallback to single image if needed
  const images = setting.images || (setting.image ? [setting.image] : []);

  useEffect(() => {
    if (!isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1500); // Change image every 1.5 seconds

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentImageIndex(0); // Reset to first image on hover
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0); // Reset when hover ends
  };

  return (
    <Tilt options={tiltOptions}>
      <S.SettingCard
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <S.SettingTitle>{setting.title}</S.SettingTitle>
        <S.SettingDescription>{setting.description}</S.SettingDescription>
        {images.length > 0 && (
          <S.SettingImage src={images[currentImageIndex]} alt={setting.title} />
        )}
      </S.SettingCard>
    </Tilt>
  );
};
