import { useState } from "react";
import "./Tooltip.styled";
import {
  TooltipContainer,
  TooltipContent,
  TooltipIcon,
} from "./Tooltip.styled";
interface TooltipProps {
  content: string;
  position?: "top" | "bottom" | "right";
  children?: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = "bottom",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TooltipContainer
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children || <TooltipIcon>?</TooltipIcon>}
      <TooltipContent $visible={isVisible} $position={position}>
        {content}
      </TooltipContent>
    </TooltipContainer>
  );
};

export default Tooltip;
