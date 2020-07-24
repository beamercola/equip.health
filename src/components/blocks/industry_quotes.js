import React from "react"
import Carousel from "@brainhubeu/react-carousel"

const IndustryQuotes = ({ data: { title, quotes } }) => {
  return (
    <section className="text-navy-300 py-24 text-center lg:px-12 border-b border-navy-300">
      <h2 className="text-5xl">{title}</h2>
      <Carousel arrows>
        {quotes.map((quote, index) => (
          <div className="lg:px-24" key={index}>
            <div
              className="text-2xl py-12"
              dangerouslySetInnerHTML={{ __html: quote.quoteHtml }}
            />
            <p className="text-xl">{quote.name}</p>
            <p>
              <em className="italic text-sm">{quote.title}</em>
            </p>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default IndustryQuotes
