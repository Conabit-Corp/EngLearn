import * as React from "react"
import { SVGProps } from "react"

export const MyDictionaryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M14.167 0H5.834a4.172 4.172 0 0 0-4.167 4.167v12.5A3.333 3.333 0 0 0 5 20h9.167a4.171 4.171 0 0 0 4.167-4.167V4.167A4.172 4.172 0 0 0 14.167 0Zm2.5 4.167v9.166h-10V1.667h7.5a2.5 2.5 0 0 1 2.5 2.5ZM5 1.81v11.523c-.585 0-1.16.154-1.666.448V4.167A2.5 2.5 0 0 1 5 1.81Zm9.167 16.523H5A1.667 1.667 0 0 1 5 15h11.667v.833a2.5 2.5 0 0 1-2.5 2.5Z"
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
