import React from "react"
import { graphql } from "gatsby"
import { getImageUrl } from "@takeshape/routing"

const Press = ({ press }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-24 justify-center">
    {press.map((item, i) => (
      <div
        className="opacity-50 hover:opacity-75 transition-opacity duration-500"
        key={i}
      >
        <img
          className="w-32 h-12 object-contain mx-auto mb-2 md:mb-4"
          src={getImageUrl(item.logo.path)}
          alt=""
        />
        <blockquote
          className="text-black text-center font-light leading-snug text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: item.quoteHtml }}
        />
      </div>
    ))}
  </div>
)

export default Press

export const fragment = graphql`
  fragment Press on TS_Home {
    press {
      quoteHtml
      logo {
        path
      }
    }
  }
`
