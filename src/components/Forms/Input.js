import React from "react"
import NumberFormat from "react-number-format"
const classNames = require("classnames")

const className =
  "rounded-full bg-white px-5 py-3 placeholder-gray-600 text-black bg-white px-3 py-2 w-full outline-none shadow"

export default props => {
  if (props.type === "tel") {
    return (
      <NumberFormat
        {...props}
        format="(###) ###-####"
        allowEmptyFormatting
        className={classNames(props.className, className)}
      />
    )
  }

  return <input {...props} className={classNames(props.className, className)} />
}
