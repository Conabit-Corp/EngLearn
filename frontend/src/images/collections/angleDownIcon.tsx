import * as React from "react"
import { SVGProps } from "react"

export const AngleDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M10 14.308a4.167 4.167 0 0 1-2.95-1.216L.242 6.283A.837.837 0 0 1 1.425 5.1l6.808 6.808a2.5 2.5 0 0 0 3.534 0L18.575 5.1a.837.837 0 1 1 1.183 1.183l-6.808 6.809A4.167 4.167 0 0 1 10 14.308Z"
        fill="#ACACAC"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
