import React, { useState, useEffect, useRef, useMemo } from "react";
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
  index?: number;
}

export const SettingCardWithSlideshow: React.FC<
  SettingCardWithSlideshowProps
> = ({ setting, tiltOptions, index = 0 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = useMemo(
    () => setting.images || (setting.image ? [setting.image] : []),
    [setting.images, setting.image]
  );

  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (images.length <= 1) return;

    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        console.error("Failed to preload images:", error);
      }
    };

    preloadImages();
  }, [images]);

  useEffect(() => {
    if (!isHovered || !hasMultipleImages) return;

    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, hasMultipleImages, images.length]);

  const handleMouseEnter = () => {
    if (hasMultipleImages) {
      setIsHovered(true);
      setCurrentImageIndex(0);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const loadingStrategy = index < 3 ? "eager" : "lazy";

  return (
    <Tilt options={tiltOptions} aria-label={`${setting.title} setting card`}>
      <S.SettingCard
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="article"
        aria-labelledby={`setting-title-${setting.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <S.SettingTitle
          as="h3"
          id={`setting-title-${setting.title
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          {setting.title}
        </S.SettingTitle>

        <S.SettingDescription>{setting.description}</S.SettingDescription>

        {images.length > 0 && (
          <S.SettingImage
            src={images[currentImageIndex]}
            alt={`${setting.title} setting`}
            width="275"
            height="207"
            loading={loadingStrategy}
            decoding="async"
          />
        )}
      </S.SettingCard>
    </Tilt>
  );
};
