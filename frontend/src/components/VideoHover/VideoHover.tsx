import React, { useRef, useState, useCallback, useEffect } from "react";
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
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    setCanHover(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (hasInteracted && isHoveredRef.current && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((e) => console.debug("Video play prevented: ", e));
      }
    }
  }, [hasInteracted]);

  const handleMouseEnter = useCallback(() => {
    if (!canHover) return;

    isHoveredRef.current = true;
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);

    hoverTimerRef.current = setTimeout(() => {
      if (!isHoveredRef.current) return;

      if (!hasInteracted) {
        setHasInteracted(true);
      } else {
        videoRef.current?.play().then(() => setIsPlaying(true));
      }
    }, 50);
  }, [canHover, hasInteracted]);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);

    hoverTimerRef.current = setTimeout(() => {
      if (!isHoveredRef.current && videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }, 150);
  }, []);

  useEffect(() => {
    const videoNode = videoRef.current;

    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);

      if (videoNode) {
        videoNode.pause();
        videoNode.src = "";
        videoNode.load();
      }
    };
  }, []);

  return (
    <S.VideoContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <S.ThumbnailImage
        src={thumbnailSrc}
        alt={alt}
        $visible={!isPlaying}
        loading="lazy"
      />
      {canHover && hasInteracted && (
        <S.HoverVideo
          ref={videoRef}
          muted
          playsInline
          loop
          preload="auto"
          $visible={isPlaying}
        >
          <source src={videoSrc} type="video/webm" />
          <source src={videoSrc.replace(".webm", ".mp4")} type="video/mp4" />
        </S.HoverVideo>
      )}
    </S.VideoContainer>
  );
};
