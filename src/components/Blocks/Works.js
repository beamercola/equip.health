import React from "react"
import { getImageUrl } from "@takeshape/routing"
import { Fade } from "../Animations"

const Works = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
    {items.map((item, i) => (
      <div className="text-center" key={i}>
        <Fade direction="up" delay={i * 75 + 400} cascade>
          <img
            className="flex-shrink-0 h-24 md:h-32 mr-4 mb-4 md:mb-12 md:mx-auto"
            src={getImageUrl(item.imageLight?.path)}
            alt={item.heading}
          />
          <div className="">
            <Fade direction="up" cascade delay={400}>
              <h2 className="mb-2">{item.title}</h2>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: item.captionHtml }}
              />
            </Fade>
          </div>
        </Fade>
      </div>
    ))}
  </div>
)

export default Works
