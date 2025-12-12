import { useEffect, useRef } from "react";

const useSpotlightAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const startTime = performance.now() + 150;
    const duration = 900;

    const animate = (time: number) => {
      const elapsed = time - startTime;

      if (elapsed < 0) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);

      let size;
      let brightness = 1;
      let fadeOpacity = 0.7;

      if (progress < 0.5) {
        size = easeOut * 40;
        fadeOpacity = 0.7;
      } else if (progress < 0.65) {
        const subProgress = (progress - 0.5) / 0.15;
        size = 40 + subProgress * 10;
        brightness = 1 + subProgress * 0.15;
        fadeOpacity = 0.7 + subProgress * 0.1;
      } else {
        const subProgress = (progress - 0.65) / 0.35;
        size = 50 + subProgress * 150;
        brightness = 1.15 - subProgress * 0.15;
        fadeOpacity = 0.8 + subProgress * 0.2;
      }

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2.8;
      const maxRadius = Math.max(canvas.width, canvas.height);
      const spotlightRadius = maxRadius * (size / 100);

      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        spotlightRadius
      );

      const primaryColor = `rgba(${255 * brightness}, ${248 * brightness}, ${
        238 * brightness
      }, 1)`;
      const fadeColor = `rgba(${255 * brightness}, ${248 * brightness}, ${
        238 * brightness
      }, ${fadeOpacity})`;

      gradient.addColorStop(0, primaryColor);
      gradient.addColorStop(0.5, fadeColor);
      gradient.addColorStop(0.85, "rgba(200, 195, 185, 0.5)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        const linearGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

        linearGradient.addColorStop(0, "#fff8ee");
        linearGradient.addColorStop(1, "#ffffff");

        ctx.fillStyle = linearGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    requestAnimationFrame(animate);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return canvasRef;
};

export default useSpotlightAnimation;
