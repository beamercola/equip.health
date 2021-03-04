import React from "react"
import { getImageUrl } from "@takeshape/routing"
import { Swiper, SwiperSlide } from "swiper/react"
import { Fade } from "../Animations"
import { Fade as AwesomeFade } from "react-awesome-reveal"

const classNames = require("classnames")

const Testimonials = ({ items }) => (
  <div className="px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24 lg:gap-32">
    <div className="flex flex-col justify-center">
      <Fade direction="up" duration={400} cascade>
        {/* <img
          className="mb-8 rounded-xl shadow-lg"
          src="/hero.jpg"
          alt="Testimonials"
        /> */}
        <div className="">
          <p className="font-heading text-xs mb-2">Testimonials</p>
          <h1 className="font-heading text-3xl mb-8">
            We believe recovery is not only possible, it's worth it.
          </h1>
        </div>
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
    <div className="flex md:justify-center">
      {/* <div className="grid grid-cols-1 gap-12 max-w-md">
        {items.slice(1).map((testimonial, i) => (
          <AwesomeFade direction="right" delay={i * 100} key={i}>
            <Testimonial {...testimonial} />
          </AwesomeFade>
        ))}
      </div> */}
      <Swiper
        className="max-w-sm md:h-full"
        breakpoints={{
          0: { direction: "horizontal", slidesPerView: 1, spaceBetween: 48 },
          500: {
            // direction: "horizontal",
            slidesPerColumn: 2,
            slidesPerView: 1,
            spaceBetween: 32,
          },
        }}
      >
        {items.slice(1).map((testimonial, i) => (
          <SwiperSlide
            className={classNames(
              "flex",
              i % 2 === 0 ? "items-end" : "items-start"
            )}
            key={i}
          >
            {/* <AwesomeFade direction="right" delay={i * 100}> */}
            <Testimonial {...testimonial} />
            {/* </AwesomeFade> */}
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
      className="text-sm lg:text-base mb-4 font-light prose"
      dangerouslySetInnerHTML={{ __html: quoteHtml }}
    />
    <div className="">
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
