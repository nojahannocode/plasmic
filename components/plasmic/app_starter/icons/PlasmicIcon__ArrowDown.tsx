// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDownIcon(props: ArrowDownIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 11.2a1.82 1.82 0 01-1.287-.533L2.367 6.32a.503.503 0 010-.707.503.503 0 01.706 0L7.42 9.96c.32.32.84.32 1.16 0l4.347-4.347a.503.503 0 01.706 0 .503.503 0 010 .707l-4.346 4.347A1.82 1.82 0 018 11.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowDownIcon;
/* prettier-ignore-end */
