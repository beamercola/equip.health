import React, { useState } from "react"
import { getImageUrl } from "@takeshape/routing"

const Press = ({ press: { title, companies } }) => {
  const [company, setCompany] = useState(companies[0])

  return (
    <div className="px-16 py-16">
      <h2 className="text-5xl text-center text-navy-300 mb-4">{title}</h2>
      <blockquote
        className="py-12 px-48 text-4xl italic text-center"
        dangerouslySetInnerHTML={{ __html: company.quoteHtml }}
      />
      <div className="flex -mx-8 items-center justify-center">
        {companies.map(company => (
          <div
            className="px-8 w-1/5 cursor-pointer"
            onClick={() => setCompany(company)}
            onMouseEnter={() => setCompany(company)}
          >
            <img className="h-16" src={getImageUrl(company.logo.path)} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Press
