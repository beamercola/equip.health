import React from "react"
import Link from "../Link"
import { getIcon } from "../SVG/Icons"
import { getTheme } from "../../utils/ArticleTheme"
const classNames = require("classnames")

const widthFromSize = size => {
  switch (size) {
    case "wide":
      return "w-3/4"
    default:
      return "w-1/2"
  }
}

const iconSize = size => {
  switch (size) {
    case "wide":
      return "w-full"
    default:
      return "w-2/3"
  }
}

const iconPadding = size => {
  switch (size) {
    case "wide":
      return "p-12"
    default:
      return "p-24"
  }
}

export default ({ theme: theTheme, children, flip, to, size, uuid }) => {
  const theme = theTheme || getTheme(uuid)
  const icon = getIcon({
    uuid,
    colors: theme.icon.dark,
    className: iconSize(size),
  })

  return (
    <div
      className={classNames("flex items-stretch", { "flex-row-reverse": flip })}
    >
      <div
        className={classNames(
          "p-16 flex flex-col justify-center flex-shrink-0",
          widthFromSize(size),
          theme.background,
          theme.text
        )}
      >
        {to ? (
          <Link className="block" to={to}>
            {children}
          </Link>
        ) : (
          children
        )}
      </div>
      <div
        className={classNames(
          "flex-grow flex items-center justify-center",
          iconPadding(size),
          theme.overlay
        )}
      >
        {icon}
      </div>
    </div>
  )
}
