import * as React from "react"
import { SVGProps } from "react"

export const CollectionsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={23}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={1}
      y={1}
      width={21}
      height={21}
      rx={4}
      stroke="#ACACAC"
      strokeWidth={2}
    />
    <path
      stroke="#ACACAC"
      strokeWidth={2}
      d="M12.04.92v21.16M12.88 13.88H.92M23 8.36H11.04"
    />
  </svg>
)
