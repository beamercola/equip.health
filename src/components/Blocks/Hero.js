import React from "react"

const Hero = ({ children }) => (
  <div className="hero bg-teal-300 overflow-x-hidden px-4 md:px-12 -mt-32 pt-24 text-white">
    {children}
  </div>
)

export default Hero
