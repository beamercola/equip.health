import React from "react"
import { getImageUrl } from "@takeshape/routing"
import { Swiper, SwiperSlide } from "swiper/react"
import { Fade } from "../Animations"

const classNames = require("classnames")

const Testimonials = ({ items }) => (
  <div className="px-4 grid grid-cols-2 gap-32">
    <div className="flex flex-col justify-center">
      <Fade direction="up" duration={500} cascade>
        <p className="font-heading text-xs mb-2">Testimonials</p>
        <h1 className="font-heading text-3xl mb-8">
          We believe recovery is not only possible, it's worth it.
        </h1>
        <div className="">
          <div
            className="prose leading-snug"
            dangerouslySetInnerHTML={{ __html: items[0].quoteHtml }}
          />
          <p className="text-sm mt-4 font-semibold">
            &mdash; {items[0].name}, {items[0].title}
          </p>
        </div>
      </Fade>
    </div>
    <div className="flex items-center">
      <Swiper
        className="max-w-sm h-full md:h-96"
        direction="vertical"
        spaceBetween={48}
        slidesPerView={2}
        // breakpoints={{ 500: { slidesPerView: 2, spaceBetween: 48 } }}
      >
        {items.slice(1).map((testimonial, i) => (
          <SwiperSlide
            className={classNames(
              "flex",
              i % 2 === 0 ? "items-end" : "items-start"
            )}
            key={i}
          >
            <Fade direction="up" delay={i * 100}>
              <Testimonial {...testimonial} />
            </Fade>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)

export default Testimonials

const Testimonial = ({ quoteHtml, name, title, photo }) => (
  <div className="">
    <p className="font-heading text-5xl leading-none -mb-5">&ldquo;</p>
    <div
      className="text-sm mb-4 font-light prose"
      dangerouslySetInnerHTML={{ __html: quoteHtml }}
    />
    <div className="flex items-center">
      {/* {photo && (
        <img
          className="w-10 h-10 mr-3 flex-shrink-0 bg-navy-300 rounded-full"
          src={getImageUrl(photo.path)}
          alt=""
        />
      )} */}
      <p className="text-xs font-heading font-medium">
        &mdash; {name}, <span>{title}</span>
      </p>
    </div>
  </div>
)
