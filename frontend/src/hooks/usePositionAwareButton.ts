import { useRef, useEffect } from "react";

export const usePositionAwareButton = <
  T extends HTMLElement = HTMLButtonElement
>() => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const span = element.querySelector("span");
      if (span) {
        (span as HTMLElement).style.top = `${relY}px`;
        (span as HTMLElement).style.left = `${relX}px`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const span = element.querySelector("span");
      if (span) {
        (span as HTMLElement).style.top = `${relY}px`;
        (span as HTMLElement).style.left = `${relX}px`;
      }
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mousemove", handleMouseMove);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return elementRef;
};
