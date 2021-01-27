import React from "react"
const classNames = require("classnames")

const Hero = ({ className, children }) => (
  <div
    className={classNames(
      "hero overflow-x-hidden px-4 md:px-12 -mt-32 pt-24 text-white overflow-hidden",
      className
    )}
  >
    {children}
  </div>
)

export default Hero
