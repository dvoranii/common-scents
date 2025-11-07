import { useState } from "react";
import "./Tooltip.styled";
import {
  TooltipContainer,
  TooltipContent,
  TooltipIcon,
} from "./Tooltip.styled";
interface TooltipProps {
  textContent: string | (() => string);
  position?: "top" | "bottom" | "right";
  children?: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  textContent,
  position = "bottom",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const tooltipContent =
    typeof textContent === "function" ? textContent() : textContent;

  return (
    <TooltipContainer
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children || <TooltipIcon>?</TooltipIcon>}
      <TooltipContent $visible={isVisible} $position={position}>
        {tooltipContent}
      </TooltipContent>
    </TooltipContainer>
  );
};

export default Tooltip;
