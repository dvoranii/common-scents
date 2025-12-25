import { useRef, useEffect } from "react";

export const usePositionAwareButton = <
  T extends HTMLElement = HTMLButtonElement
>() => {
  const elementRef = useRef<T>(null);

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updatePosition = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const span = element.querySelector("span") as HTMLElement;
      if (span) {
        span.style.top = `${relY}px`;
        span.style.left = `${relX}px`;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }

      requestRef.current = requestAnimationFrame(() => updatePosition(e));
    };

    element.addEventListener("mouseenter", onMouseMove);
    element.addEventListener("mousemove", onMouseMove);

    return () => {
      element.removeEventListener("mouseenter", onMouseMove);
      element.removeEventListener("mousemove", onMouseMove);

      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return elementRef;
};
