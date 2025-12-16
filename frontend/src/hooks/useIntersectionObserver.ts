import { useRef, useEffect, useState } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.15,
  rootMargin = "0px",
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (freezeOnceVisible) {
              observer.unobserve(entry.target);
            }
          } else if (!freezeOnceVisible) {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, freezeOnceVisible]);

  return [ref, isVisible] as const;
};
