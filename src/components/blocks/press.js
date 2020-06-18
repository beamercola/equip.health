import React from "react"

const Press = ({ press: { title, companies } }) => {
  return (
    <div className="px-16">
      <h2 className="text-6xl tracking-widest">{title}</h2>
      <blockquote
        className="py-12 px-48 text-4xl italic text-center"
        dangerouslySetInnerHTML={{ __html: companies[0].quoteHtml }}
      />
      <div className="flex -mx-8">
        {companies.map(() => (
          <div className="px-8 w-1/5">
            <img className="w-64 h-16" src="" alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Press
