// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse1463IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse1463Icon(props: Ellipse1463IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"18"} cy={"18"} r={"18"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse1463Icon;
/* prettier-ignore-end */
