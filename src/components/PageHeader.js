import React from "react"

const PageHeader = ({ className, title, children }) => (
  <div className={`pt-8 pb-12 lg:pt-16 lg:pb-24 ${className}`}>
    <h1 className="text-4xl lg:text-5xl tracking-wider leading-none">
      {title}
    </h1>
    <div className="mt-2">{children}</div>
  </div>
)

export default PageHeader
