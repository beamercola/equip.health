import React from "react"
import { Fade } from "react-awesome-reveal"
import { getImageUrl } from "@takeshape/routing"

const Philosophy = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 md:px-12">
    {items.map((item, i) => (
      <Fade delay={i * 100} direction="up" triggerOnce>
        <div className="md:text-center flex md:block items-center">
          <img
            className={`flex-shrink-0 w-28 h-28 md:w-48 md:h-48 mx-auto mr-4 md:mr-auto`}
            src={getImageUrl(item.image?.path)}
            alt={item.heading}
          />
          <div className="">
            <h2 className="mb-2 font-heading text-xl">{item.heading}</h2>
            <div
              className="text- leading-snug opacity-50"
              dangerouslySetInnerHTML={{ __html: item.contentHtml }}
            />
          </div>
        </div>
      </Fade>
    ))}
  </div>
)

export default Philosophy