import React, { useState } from "react"
import Accordion from "../Accordion"

const FAQs = ({ questions, title, descriptionHtml }) => {
  return (
    <div className="">
      <h2 className="text-5xl mb-4">{title}</h2>
      <div
        className="mb-8"
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      />

      <Accordion
        className="py-24 container lg:mx-32"
        items={questions.map(q => ({
          title: q.question,
          bodyHtml: q.answerHtml,
        }))}
      />
    </div>
  )
}

const Question = ({ question, answerHtml }) => {
  const [open, setOpen] = useState(false)

  return (
    <dl className="border-b border-navy-300">
      <dt>
        <a
          className="cursor-pointer block flex justify-between text-2xl py-6"
          onClick={() => setOpen(!open)}
        >
          {question}
          <button className="text-4xl leading-none ml-8">
            {open ? "-" : "+"}
          </button>
        </a>
      </dt>
      <dd className={`text-lg pb-8 ${!open && "hidden"}`}>
        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: answerHtml }}
        />
      </dd>
    </dl>
  )
}

export default FAQs
