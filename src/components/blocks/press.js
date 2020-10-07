import React, { useState } from "react"
import { getImageUrl } from "@takeshape/routing"

const Press = ({ press: { title, companies } }) => {
  const [company, setCompany] = useState(companies[0])

  return (
    <div className="px-8 md:px-16 py-16">
      <h2 className="text-5xl text-center text-navy-300 mb-4">{title}</h2>
      <blockquote
        className="py-12 md:px-24 lg:px-48 text-xl md:text-3xl italic text-center"
        dangerouslySetInnerHTML={{ __html: company.quoteHtml }}
      />
      <div className="flex flex-wrap -mx-8 items-center justify-center">
        {companies.map((company, i) => (
          <div
            className="px-8 w-1/2 md:w-1/5 cursor-pointer text-center"
            onClick={() => setCompany(company)}
            onMouseEnter={() => setCompany(company)}
            key={i}
          >
            <img
              className="h-16 object-contain mx-auto"
              src={getImageUrl(company.logo.path)}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Press
