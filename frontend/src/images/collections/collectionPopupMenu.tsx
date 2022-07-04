import * as React from "react";
import { SVGProps } from "react";

export const CollectionPopupMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={5}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={2.5} cy={2.5} r={2.5} fill="#ACACAC" />
    <circle cx={2.5} cy={12.5} r={2.5} fill="#ACACAC" />
    <circle cx={2.5} cy={22.5} r={2.5} fill="#ACACAC" />
  </svg>
);
