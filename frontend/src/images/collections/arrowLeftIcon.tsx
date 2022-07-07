import { SVGProps } from "react"

export const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M.733 11.742 3.958 15a.833.833 0 0 0 1.184 0 .833.833 0 0 0 0-1.183l-2.967-2.984h16.992a.833.833 0 0 0 0-1.666H2.125L5.142 6.15a.833.833 0 0 0 0-1.15.833.833 0 0 0-1.184 0L.733 8.208a2.5 2.5 0 0 0 0 3.534Z"
        fill="#D5D5D5"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
