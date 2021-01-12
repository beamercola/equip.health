import React from "react"
const classNames = require("classnames")

export const getIcon = ({ uuid, colors, size, className }) => {
  const id = parseInt(uuid.replace(/[\D]+/g, "").slice(0, 5))
  return (
    <Icon
      className={className}
      variant={icons[id % icons.length]}
      colors={colors}
      size={size}
    />
  )
}

const Wrapper = ({ children, className, size = 250 }) => (
  <svg
    className={classNames("icon", className)}
    // width={`${size}px`}
    // height={`${size}px`}
    viewBox="0 0 250 250"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {children}
  </svg>
)

const Path = ({ d, color }) => (
  <path className={color} d={d} fill="currentColor" />
)

export const A = ({ colors }) => (
  <>
    <path
      className={colors[0]}
      d="M187.5,312.5 L187.5,62.5 C118.464406,62.5 62.5,118.464406 62.5,187.5 C62.5,256.535594 118.464406,312.5 187.5,312.5 Z"
      id="color-2"
      fill="currentColor"
      transform="translate(125.000000, 187.500000) rotate(-270.000000) translate(-125.000000, -187.500000) "
    />
    <path
      className={colors[1]}
      d="M187.5,187.5 L187.5,-62.5 C118.464406,-62.5 62.5,-6.53559373 62.5,62.5 C62.5,131.535594 118.464406,187.5 187.5,187.5 Z"
      id="color-1"
      fill="currentColor"
      transform="translate(125.000000, 62.500000) rotate(-270.000000) translate(-125.000000, -62.500000) "
    />
  </>
)

export const B = ({ colors }) => (
  <Path
    d="M125,250 L125,0 C55.9644063,0 0,55.9644063 0,125 C0,194.035594 55.9644063,250 125,250 Z"
    index={0}
    color={colors[0]}
  />
)

export const C = ({ colors }) => (
  <>
    <Path
      d="M249.689622,125.434638 L-0.310377893,125.434638 C-0.310377893,194.470232 55.6540284,250.434638 124.689622,250.434638 C193.725216,250.434638 249.689622,194.470232 249.689622,125.434638 Z"
      color={colors[0]}
    />
    <circle
      className={colors[1]}
      fill="currentColor"
      cx="62.5"
      cy="62.5"
      r="62.5"
    />
  </>
)

const components = {
  A,
  B,
  C,
}

export const icons = Object.keys(components)

export const Icon = props => {
  const Tag = components[props.variant]
  return (
    <Wrapper className={props.className} size={props.size}>
      <Tag {...props} />
    </Wrapper>
  )
}
