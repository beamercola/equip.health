import React from "react"

const contentClass = "prose text-navy-400"

const PageHeader = ({ className, title, children, html }) => (
  <div
    className={`pt-8 pb-12 lg:pt-12 lg:pb-16 flex flex-col justify-center ${className}`}
  >
    <h1 className="text-4xl lg:text-5xl leading-none mb-2">{title}</h1>
    {html ? (
      <div
        className={contentClass}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    ) : (
      <div className={contentClass}>{children}</div>
    )}
  </div>
)

export default PageHeader
