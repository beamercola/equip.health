import React from "react"
import { getImageUrl } from "@takeshape/routing"
import { Swiper, SwiperSlide } from "swiper/react"

const Testimonials = ({ items }) => (
  <div className="press px-4">
    <Swiper
      spaceBetween={12}
      slidesPerView={1}
      breakpoints={{ 500: { slidesPerView: 2, spaceBetween: 48 } }}
    >
      {items.map((testimonial, i) => (
        <SwiperSlide key={i}>
          <Testimonial key={i} {...testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)

export default Testimonials

const Testimonial = ({ quoteHtml, name, title, photo }) => (
  <div className="bg-white p-8">
    <div
      className="mb-4 text-sm md:text-lg text-navy-300 text-center"
      dangerouslySetInnerHTML={{ __html: quoteHtml }}
    />
    <div className="flex items-center">
      {photo && (
        <img
          className="w-10 h-10 mr-3 flex-shrink-0 bg-navy-300 rounded-full"
          src={getImageUrl(photo.path)}
          alt=""
        />
      )}
      <div>
        <hr className="border-navy-300 w-4 mb-2" />
        <p className="font-heading text-sm">{name}</p>
        <p className="italic text-xs">{title}</p>
      </div>
    </div>
  </div>
)
