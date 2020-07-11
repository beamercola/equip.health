import React, { useState } from "react"

const FAQs = ({ questions }) => {
  return (
    <div>
      {questions.map(question => (
        <Question {...question} key={question._id} />
      ))}
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
        <article dangerouslySetInnerHTML={{ __html: answerHtml }} />
      </dd>
    </dl>
  )
}

export default FAQs