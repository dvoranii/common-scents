// VideoHoverOptimized.tsx
import React, { useRef, useState, useCallback } from "react";
import * as S from "./VideoHover.styled";

interface VideoHoverProps {
  videoSrc: string;
  thumbnailSrc: string | undefined;
  alt: string;
}

export const VideoHover: React.FC<VideoHoverProps> = ({
  videoSrc,
  thumbnailSrc,
  alt,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true;

    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }

    hoverTimerRef.current = setTimeout(() => {
      if (isHoveredRef.current && videoRef.current && !isPlaying) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch((e) => console.debug("Video play prevented:", e));
        }
      }
    }, 50);
  }, [isPlaying]);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;

    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }

    hoverTimerRef.current = setTimeout(() => {
      if (!isHoveredRef.current && videoRef.current && isPlaying) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }, 150);
  }, [isPlaying]);

  const handleVideoEnded = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, []);

  React.useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <S.VideoContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <S.ThumbnailImage
        src={thumbnailSrc}
        alt={alt}
        $visible={!isPlaying}
        loading="lazy"
      />
      <S.HoverVideo
        ref={videoRef}
        muted
        playsInline
        loop
        preload="metadata"
        $visible={isPlaying}
        onEnded={handleVideoEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={videoSrc} type="video/webm" />
        <source src={videoSrc.replace(".webm", ".mp4")} type="video/mp4" />
        <img src={thumbnailSrc} alt={alt} />
      </S.HoverVideo>
    </S.VideoContainer>
  );
};
