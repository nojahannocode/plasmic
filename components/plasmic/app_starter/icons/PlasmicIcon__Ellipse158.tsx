// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse158IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse158Icon(props: Ellipse158IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"16"}
        cy={"16"}
        r={"16"}
        fill={"currentColor"}
        fillOpacity={".5"}
      ></circle>
    </svg>
  );
}

export default Ellipse158Icon;
/* prettier-ignore-end */
