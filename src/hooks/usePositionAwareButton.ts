import { useRef, useEffect } from "react";

export const usePositionAwareButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const span = button.querySelector("span");
      if (span) {
        (span as HTMLElement).style.top = `${relY}px`;
        (span as HTMLElement).style.left = `${relX}px`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const span = button.querySelector("span");
      if (span) {
        (span as HTMLElement).style.top = `${relY}px`;
        (span as HTMLElement).style.left = `${relX}px`;
      }
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return buttonRef;
};
