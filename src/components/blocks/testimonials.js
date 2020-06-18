import React from "react"

const Testimonials = ({ testimonials }) => {
  return (
    <div className="flex flex-col flex-wrap -mx-8 lg:flex-row -my-8">
      {testimonials.testimonials.map(({ quoteHtml, name, title }) => (
        <div className="px-8 py-8 lg:w-1/3">
          <img
            className="w-24 h-24 mb-8 flex-shrink-0 bg-blue-800 rounded-full"
            src=""
            alt=""
          />
          <div className="">
            <div
              className="text-lg lg:text-xl mb-4"
              dangerouslySetInnerHTML={{ __html: quoteHtml }}
            />
            <p className="italic">{name}</p>
            <p className="italic text-sm">{title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Testimonials
