import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Accordion from "../components/Accordion"

const FAQPage = ({
  data: {
    takeshape: {
      getFaq: { title, questions, seo, descriptionHtml },
    },
  },
}) => {
  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        image={seo.image && seo.image.path}
      />
      <div className="container py-24 px-8 max-w-3xl">
        <h2 className="text-5xl mb-4">{title}</h2>
        <article
          className="mb-8 prose text-navy-300"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        />

        <Accordion
          className="border border-navy-300 rounded-lg"
          items={questions.map(q => ({
            title: q.question,
            bodyHtml: q.answerHtml,
          }))}
        />
      </div>
    </Layout>
  )
}

export default FAQPage

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
          className="prose text-navy-300"
          dangerouslySetInnerHTML={{ __html: answerHtml }}
        />
      </dd>
    </dl>
  )
}

export const query = graphql`
  query FAQQuery {
    takeshape {
      getFaq {
        title
        descriptionHtml
        questions {
          question
          answerHtml
        }
        seo {
          title
          description
          image {
            path
          }
        }
      }
    }
  }
`
