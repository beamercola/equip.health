import React from "react"
import { getImageUrl } from "@takeshape/routing"

const Highlight = ({ captionHtml, title, image }) => {
  return (
    <div className="lg:px-8 mb-12 lg:mb-0 lg:w-1/3 lg:text-center">
      <div className="bg-sky-300 w-48 h-48 flex items-center justify-center rounded-full border border-navy-400 mx-auto mb-12 p-2 shadow-teal-xl">
        {/* <img
          className="h-full w-full flex-shrink-0 lg:mx-auto"
          src={getImageUrl(image.path)}
          alt=""
        /> */}
      </div>

      <div>
        <h4 className="text-lg tracking-wider leading-snug mb-2">{title}</h4>
        <div
          className="font-light"
          dangerouslySetInnerHTML={{ __html: captionHtml }}
        />
      </div>
    </div>
  )
}

export default Highlight
