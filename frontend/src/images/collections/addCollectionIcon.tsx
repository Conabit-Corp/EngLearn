import * as React from "react";
import { SVGProps } from "react";

export const AddCollectionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#fff"
      d="M18.75 8.75h-7.5v-7.5a1.25 1.25 0 10-2.5 0v7.5h-7.5a1.25 1.25 0 000 2.5h7.5v7.5a1.25 1.25 0 102.5 0v-7.5h7.5a1.25 1.25 0 100-2.5z"
    ></path>
  </svg>
);
