import React from "react"
import { Fade } from "../Animations"
import { getImageUrl } from "@takeshape/routing"
const classNames = require("classnames")

const Philosophy = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 md:px-12">
    {items.map((item, i) => (
      <Fade delay={i * 75} direction="up" triggerOnce key={i}>
        <div
          className={classNames("md:text-center flex md:block items-center", {
            // "flex-row-reverse": i % 2 === 1,
          })}
        >
          <img
            className={`flex-shrink-0 w-28 h-28 md:w-48 md:h-48 mx-auto mr-4 md:mr-auto`}
            src={getImageUrl(item.image?.path)}
            alt={item.heading}
          />
          <div className="">
            <h2 className="mb-2 font-heading text-xl">{item.heading}</h2>
            <div
              className="leading-tight lg:text-base leading-snug opacity-50"
              dangerouslySetInnerHTML={{ __html: item.contentHtml }}
            />
          </div>
        </div>
      </Fade>
    ))}
  </div>
)

export default Philosophy
