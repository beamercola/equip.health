import React from "react"
import { Fade as AwesomeFade } from "react-awesome-reveal"
import { keyframes } from "@emotion/react"

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

export const Fade = props => (
  <AwesomeFade keyframes={customAnimation} {...props} />
)
