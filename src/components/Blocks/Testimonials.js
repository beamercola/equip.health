import React from "react"
import { getImageUrl } from "@takeshape/routing"

export default ({ items }) => (
  <div className="flex flex-col flex-wrap items-center lg:-mx-8 lg:flex-row -my-6">
    {items.map((testimonial, i) => (
      <Testimonial key={i} {...testimonial} />
    ))}
  </div>
)

const Testimonial = ({ quoteHtml, name, title, photo }) => (
  <div className="lg:px-6 lg:w-1/3 mb-4">
    <div className="bg-white rounded-lg border-navy-300 border p-6">
      <div
        className="mb-4 text-sm"
        dangerouslySetInnerHTML={{ __html: quoteHtml }}
      />
      <div className="flex items-center">
        {photo && (
          <img
            className="w-10 h-10 mr-3 flex-shrink-0 bg-navy-300 rounded-full"
            src={getImageUrl(photo.path)}
            alt=""
          />
        )}
        <div>
          <hr className="border-navy-300 w-4 mb-2" />
          <p className="font-heading text-sm">{name}</p>
          <p className="italic text-xs">{title}</p>
        </div>
      </div>
    </div>
  </div>
)
