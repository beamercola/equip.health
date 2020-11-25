import React from "react"
import Carousel from "@brainhubeu/react-carousel"

export default ({ data: { title, quotes } }) => (
  <section className="text-navy-300 py-24 text-center px-8 lg:px-12 border-b border-navy-300">
    <h2 className="text-5xl">{title}</h2>
    <Carousel arrows>
      {quotes.map((quote, i) => (
        <Quote key={i} author={{ name: quote.name, title: quote.title }}>
          {quote.quoteHtml}
        </Quote>
      ))}
    </Carousel>
  </section>
)

const Quote = ({ children, author }) => (
  <div className="px-8 lg:px-24">
    <div
      className="md:text-2xl py-12 prse prose-navy"
      dangerouslySetInnerHTML={{ __html: children }}
    />
    <p className="text-xl">{author.name}</p>
    <p>
      <em className="italic text-sm">{author.title}</em>
    </p>
  </div>
)
