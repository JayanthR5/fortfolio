/* Additional type declarations for modules without types */
declare module "react-parallax-tilt" {
  import { ComponentType, ReactNode, CSSProperties } from "react";
  interface TiltProps {
    children?: ReactNode;
    tiltMaxAngleX?: number;
    tiltMaxAngleY?: number;
    scale?: number;
    transitionSpeed?: number;
    className?: string;
    style?: CSSProperties;
    key?: string | number;
  }
  const Tilt: ComponentType<TiltProps>;
  export default Tilt;
}