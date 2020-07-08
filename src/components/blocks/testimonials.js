import React from "react"

const Testimonials = ({ testimonials }) => {
  return (
    <div className="flex flex-col flex-wrap items-center lg:-mx-8 lg:flex-row -my-8">
      {testimonials.testimonials.map((testimonial, i) => (
        <Testimonial key={i} {...testimonial} />
      ))}
    </div>
  )
}

const Testimonial = ({ quoteHtml, name, title }) => {
  return (
    <div className="lg:px-8 py-8 lg:w-1/3">
      <div className="">
        <div
          className="text-lg lg:text-xl mb-4"
          dangerouslySetInnerHTML={{ __html: quoteHtml }}
        />
        <div className="flex items-center">
          <img
            className="w-10 h-10 mr-3 flex-shrink-0 bg-blue-800 rounded-full"
            src=""
            alt=""
          />
          <div className="">
            <p className="italic">{name}</p>
            <p className="italic text-sm">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
