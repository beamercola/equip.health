import React from "react"
import CountUp from "react-countup"

const classNames = require("classnames")

const Stat = ({ end, label, delay, children }) => (
  <div
    className={classNames(
      "border border-navy-300 text-navy-300 p-4 rounded-lg max-w-xs shadow-lg",
      "transition-all duration-500 transform",
      "hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:scale-101"
    )}
  >
    <h2 className="font-semibold text-4xl">
      <CountUp end={end} delay={delay} />
      {label}
    </h2>
    <p className="text-sm">{children}</p>
  </div>
)

export default Stat
