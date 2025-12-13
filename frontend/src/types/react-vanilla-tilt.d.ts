declare module "react-vanilla-tilt" {
  import { ComponentType, ReactNode } from "react";

  interface TiltOptions {
    reverse?: boolean;
    max?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: "x" | "y" | null;
    reset?: boolean;
    easing?: string;
    glare?: boolean;
    "max-glare"?: number;
    "glare-prerender"?: boolean;
  }

  interface TiltProps {
    options?: TiltOptions;
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }

  const Tilt: ComponentType<TiltProps>;
  export default Tilt;
}
