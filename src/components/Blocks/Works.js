import React from "react"
import { getImageUrl } from "@takeshape/routing"

const Works = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
    {items.map((item, i) => (
      <div className="md:text-center flex flex-col md:block items-start">
        <img
          className="flex-shrink-0 w-24 h-24 md:w-48 md:h-48 mr-4 md:mr-auto rounded-full mb-4 md:mb-12"
          src={getImageUrl(item.image?.path)}
          alt={item.heading}
        />
        <div className="">
          <h2 className="mb-2">{item.title}</h2>
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: item.captionHtml }}
          />
        </div>
      </div>
    ))}
  </div>
)

export default Works
