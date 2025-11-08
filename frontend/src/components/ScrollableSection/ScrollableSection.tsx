import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

interface ScrollableSectionProps {
  id: string;
  children: React.ReactNode;
}

const ScrollableSection: React.FC<ScrollableSectionProps> = ({
  id,
  children,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === `#${id}` && sectionRef.current) {
      const scrollToElement = () => {
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      };

      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToElement);
      });
    }
  }, [hash, id]);

  return (
    <div id={id} ref={sectionRef}>
      {children}
    </div>
  );
};

export default ScrollableSection;
