import * as React from "react"
import { SVGProps } from "react"

export const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m24.084 9.447-7.9-7.902a5.217 5.217 0 0 0-7.367 0L.916 9.447A3.102 3.102 0 0 0 0 11.657v10.225a3.125 3.125 0 0 0 3.125 3.125h18.75A3.125 3.125 0 0 0 25 21.882V11.656a3.103 3.103 0 0 0-.916-2.21Zm-8.459 13.477h-6.25v-4.098a3.125 3.125 0 0 1 6.25 0v4.098Zm7.292-1.042a1.042 1.042 0 0 1-1.042 1.042h-4.167v-4.098a5.208 5.208 0 1 0-10.416 0v4.098H3.125a1.042 1.042 0 0 1-1.042-1.042V11.656c.001-.276.11-.54.306-.736l7.9-7.9a3.133 3.133 0 0 1 4.421 0l7.901 7.903c.194.195.304.458.306.733v10.226Z"
      fill="#0052FF"
    />
  </svg>
)
