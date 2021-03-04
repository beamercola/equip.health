import React, { useEffect } from "react"
const classNames = require("classnames")

const Knack = ({ className }) => {
  useEffect(() => {
    const scriptVars = document.createElement("script")
    scriptVars.innerHTML = `app_id="603066805bb3cc001be7b0df";distribution_key="dist_2";`
    document.body.appendChild(scriptVars)

    const scriptSrc = document.createElement("script")
    scriptSrc.src =
      "https://loader.knack.com/603066805bb3cc001be7b0df/dist_2/knack.js"
    scriptSrc.async = false
    document.body.appendChild(scriptSrc)

    return () => {
      document.body.removeChild(scriptVars)
      document.body.removeChild(scriptSrc)
    }
  }, [])

  return (
    <div
      className={classNames(
        "max-w-xl relative border border-navy-300 bg-white max-w-xl p-8 mx-auto rounded-xl",
        className
      )}
      id="knack-dist_2"
    >
      Loading...
    </div>
  )
}

export default Knack
