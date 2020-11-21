import React from "react"

export default props => (
  <input
    {...props}
    className={`${props.className} rounded-full bg-white px-5 py-3 placeholder-gray-600 text-black bg-white px-3 py-2 w-full outline-none shadow`}
  />
)
