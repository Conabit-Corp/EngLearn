import * as React from "react"
import { SVGProps } from "react"

export const MyDictionaryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.708 0H5.292A5.215 5.215 0 0 0 .083 5.208v15.625A4.167 4.167 0 0 0 4.25 25h11.458a5.215 5.215 0 0 0 5.209-5.208V5.208A5.215 5.215 0 0 0 15.708 0Zm3.125 5.208v11.459h-12.5V2.083h9.375a3.125 3.125 0 0 1 3.125 3.125ZM4.25 2.262v14.405c-.732-.001-1.45.192-2.083.559V5.208A3.125 3.125 0 0 1 4.25 2.262Zm11.458 20.655H4.25a2.083 2.083 0 0 1 0-4.167h14.583v1.042a3.125 3.125 0 0 1-3.125 3.125Z"
      fill="#ACACAC"
    />
  </svg>
)
