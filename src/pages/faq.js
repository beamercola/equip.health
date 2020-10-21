import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page_header"

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
      <div className="container">
        <div className="py-24 container lg:mx-32">
          <h2 className="text-5xl mb-4">{title}</h2>
          <article
            className="mb-8"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
          {questions.map(question => (
            <Question {...question} key={question._id} />
          ))}
        </div>
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
        <article dangerouslySetInnerHTML={{ __html: answerHtml }} />
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
