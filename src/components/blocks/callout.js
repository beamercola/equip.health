import React from "react"
import { Link } from "gatsby"

const Callout = ({ title, subtitleHtml, callToAction, ctaPath }) => {
  return (
    <section className="bg-blue-200 border-t border-b border-blue-900 text-blue-900 py-16 container">
      <div className="-container flex flex-col lg:flex-row items-center">
        <div className="lg:w-3/5 container mb-12 lg:mb-0">
          <h3 className="text-5xl leading-tight relative">
            <span className="z-50 relative">{title}</span>
            <span
              className="w-24 h-24 absolute bg-yellow-300 rounded-full"
              style={{ top: "-.8em", left: "-0.75em", zIndex: "0" }}
            ></span>
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
            className="py-4 px-8 inline-block text-2xl border-blue-900 bg-blue-100 border text-blue-900 rounded-full leading-none tracking-wider hover:bg-blue-900 hover:text-white shadow-2xl grow"
            to={ctaPath}
          >
            {callToAction}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Callout
