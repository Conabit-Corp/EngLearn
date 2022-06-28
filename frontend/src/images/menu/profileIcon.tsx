import * as React from "react"
import { SVGProps } from "react"

export const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#ACACAC">
      <path d="M17.5 20h-1.667v-4.202a2.467 2.467 0 0 0-2.464-2.465H6.631a2.467 2.467 0 0 0-2.464 2.465V20H2.5v-4.202a4.136 4.136 0 0 1 4.13-4.131h6.74a4.136 4.136 0 0 1 4.13 4.13V20ZM10 10a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8.333a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
