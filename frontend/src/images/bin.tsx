import * as React from "react"
import { SVGProps } from "react"

export const BinSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="silver">
      <path d="M17.5 3.333h-2.583A4.174 4.174 0 0 0 10.834 0H9.167a4.174 4.174 0 0 0-4.083 3.333H2.5A.833.833 0 1 0 2.5 5h.834v10.833A4.172 4.172 0 0 0 7.5 20h5a4.171 4.171 0 0 0 4.167-4.167V5h.833a.833.833 0 0 0 0-1.667ZM9.167 1.667h1.667a2.505 2.505 0 0 1 2.357 1.666H6.81a2.505 2.505 0 0 1 2.358-1.666ZM15 15.833a2.5 2.5 0 0 1-2.5 2.5h-5a2.5 2.5 0 0 1-2.5-2.5V5h10v10.833Z" />
      <path d="M8.333 15a.833.833 0 0 0 .834-.833v-5a.833.833 0 1 0-1.667 0v5a.833.833 0 0 0 .833.833ZM11.666 15a.833.833 0 0 0 .834-.833v-5a.833.833 0 1 0-1.667 0v5a.833.833 0 0 0 .833.833Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
