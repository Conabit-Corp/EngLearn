import * as React from "react"
import { SVGProps } from "react"

export const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.875 25h-2.083v-5.253a3.084 3.084 0 0 0-3.08-3.08H5.288a3.083 3.083 0 0 0-3.08 3.08V25H.124v-5.253a5.17 5.17 0 0 1 5.164-5.164h8.422a5.17 5.17 0 0 1 5.164 5.164V25ZM9.5 12.5A6.25 6.25 0 1 1 9.5 0a6.25 6.25 0 0 1 0 12.5Zm0-10.417a4.167 4.167 0 1 0 0 8.334 4.167 4.167 0 0 0 0-8.334Z"
      fill="#ACACAC"
    />
  </svg>
)
