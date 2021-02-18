import React from "react"
import { graphql } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import { Swiper, SwiperSlide } from "swiper/react"
import { CaretRight, CaretLeft } from "phosphor-react"

const Press = ({ press }) => (
  <div className="px-8 press">
    <Swiper
      className="justify-center overflow-visible"
      navigation={{
        nextEl: ".press-swiper-next",
        prevEl: ".press-swiper-prev",
        disabledClass: "opacity-50",
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
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
    <div className="flex justify-center mt-8">
      <button className="press-swiper-prev bg-cream-200 rounded-full p-2 text-black text-opacity-50 border border-cream-400 border-opacity-30 mx-6">
        <CaretLeft size={32} />
      </button>
      <button className="press-swiper-next bg-cream-200 rounded-full p-2 text-black text-opacity-50 border border-cream-400 border-opacity-30 mx-6">
        <CaretRight size={32} />
      </button>
    </div>
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
