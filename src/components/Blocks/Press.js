import React from "react"
import { graphql } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import { Swiper, SwiperSlide } from "swiper/react"

const Press = ({ press }) => (
  <div className="px-8 press">
    <Swiper
      className="justify-center overflow-visible"
      // centeredSlides
      // loop
      pagination
      breakpoints={{
        500: { slidesPerView: 3 },
      }}
    >
      {press.map((item, i) => (
        <SwiperSlide key={i}>
          <a
            className="block opacity-50 hover:opacity-75 transition-opacity duration-500 px-8"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-32 h-12 object-contain mx-auto mb-2 md:mb-4"
              src={getImageUrl(item.logo.path)}
              alt=""
            />
            <blockquote
              className="text-black text-center font-light leading-snug text-sm md:text-sm"
              dangerouslySetInnerHTML={{ __html: item.quoteHtml }}
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)

export default Press

export const fragment = graphql`
  fragment Press on TS_Home {
    press {
      link
      quoteHtml
      logo {
        path
      }
    }
  }
`
