import * as React from "react"
import { SVGProps } from "react"

export const CollectionsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={1}
      y={1}
      width={18}
      height={18}
      rx={4}
      stroke="#ACACAC"
      strokeWidth={2}
    />
    <path
      stroke="#ACACAC"
      strokeWidth={2}
      d="m10.565 1.737.035 17.461M9.651 12.304H1.738M18.265 7.165h-6.961"
    />
  </svg>
)
