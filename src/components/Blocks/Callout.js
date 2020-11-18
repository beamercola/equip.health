import React from "react"
import { Link } from "gatsby"

export default ({ title, subtitleHtml, callToAction, ctaPath }) => (
  <section className="bg-sky-300 border-t border-b border-navy-300 text-navy-300 py-16">
    <div className="container flex flex-col lg:flex-row items-center">
      <div className="lg:w-3/5 container mb-12 lg:mb-0">
        <h3 className="text-5xl leading-tight relative">
          <span className="z-30 relative">{title}</span>
          <span
            className="w-24 h-24 absolute bg-gold-200 rounded-full"
            style={{ top: "-.8em", left: "-0.75em", zIndex: "0" }}
          />
        </h3>
        {subtitleHtml && (
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: subtitleHtml }}
          />
        )}
      </div>

      <div className="lg:w-2/5 text-center container">
        <Link
          className="py-4 px-8 inline-block text-2xl border-navy-300 bg-sky-200 border text-navy-300 rounded-full leading-none tracking-wider hover:bg-navy-300 hover:text-white shadow-2xl grow"
          to={ctaPath}
        >
          {callToAction}
        </Link>
      </div>
    </div>
  </section>
)
