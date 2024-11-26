// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProgressBarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProgressBarIcon(props: ProgressBarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".5"}
        d={"M7 0a7 7 0 11-7 7h1.54A5.46 5.46 0 107 1.54V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ProgressBarIcon;
/* prettier-ignore-end */
