import React from "react"
import Link from "../Link"
const classNames = require("classnames")

export default ({ icon, theme, children, flip, to }) => (
  <div
    className={classNames("flex items-stretch", { "flex-row-reverse": flip })}
  >
    <div className={classNames("p-16 w-1/2", theme.background, theme.text)}>
      {to ? (
        <Link className="block" to={to}>
          {children}
        </Link>
      ) : (
        children
      )}
    </div>
    <div className={classNames("w-1/2", theme.overlay)}></div>
  </div>
)

// Takes a string (TakeShape _id), converts to int
// and returns a unique theme
export const getTheme = id => {
  const number = parseInt(id.replace(/\D+/g, ""))
  return themes[number % themes.length]
}

export const themes = [
  {
    text: "text-navy-400",
    background: "bg-navy-100",
    overlay: "bg-navy-400",
    icon: ["text-navy-200", "text-navy-100"],
  },
  {
    text: "text-teal-400",
    background: "bg-teal-100",
    overlay: "bg-teal-400",
    icon: ["text-teal-200", "text-teal-100"],
  },
  {
    text: "text-gold-400",
    background: "bg-gold-100",
    overlay: "bg-gold-400",
    icon: ["text-gold-200", "text-gold-100"],
  },
  {
    text: "text-navy-300",
    background: "bg-sky-100",
    overlay: "bg-sky-400",
    icon: ["text-sky-200", "text-sky-100"],
  },
  {
    text: "text-navy-300",
    background: "bg-cream-100",
    overlay: "bg-cream-400",
    icon: ["text-cream-200", "text-cream-100"],
  },
]
