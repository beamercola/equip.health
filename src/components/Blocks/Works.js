import React from "react"
import { getImageUrl } from "@takeshape/routing"

const Works = ({ items }) => (
  <div className="grid grid-cols-3 gap-24">
    {items.map((item, i) => (
      <div className="text-center">
        <img
          className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 mx-auto mr-4 md:mr-auto rounded-full mb-12"
          src={getImageUrl(item.image?.path)}
          alt={item.heading}
        />
        <h2 className="mb-2">{item.title}</h2>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: item.captionHtml }}
        />
      </div>
    ))}
  </div>
)

export default Works
