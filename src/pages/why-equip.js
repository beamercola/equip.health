import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import { NotifyForm } from "../components/forms"
import useInView from "react-cool-inview"
import PageHeader from "../components/page_header"
import Callout from "../components/blocks/callout"
import FAQs from "../components/blocks/faqs"
import SEO from "../components/seo"
import IndustryQuotes from "../components/blocks/industry_quotes"
import Modal from "react-modal"

const WhyEquip = ({
  data: {
    takeshape: {
      whyEquip: { callout, highlights, insurance, industryQuotes, faqs },
    },
  },
}) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Layout>
      <SEO title={highlights.title} />
      <div className="container pb-16">
        <PageHeader title={highlights.title} />

        <div>
          {highlights.highlights.map((highlight, index) => (
            <Highlight
              highlight={highlight}
              key={highlight._id}
              index={index}
            />
          ))}
        </div>
      </div>

      <Callout {...callout} />

      <section className="bg-navy-300 text-sky-300 border-b border-navy-400">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="flex flex-col justify-center border-r border-navy-400 lg:w-1/2 p-8 lg:py-12 lg:px-16">
            <h2 className="text-5xl mb-8 leading-tight">{insurance.title}</h2>
            <div
              className="text-xl lg:text-2xl content"
              dangerouslySetInnerHTML={{ __html: insurance.contentHtml }}
            />
            <button></button>
          </div>
          <div className="lg:w-1/2 bg-teal-300 text-white p-8 lg:py-12 lg:px-16">
            <p className="bg-teal-400 px-3 py-2 rounded-lg text-teal-200 text-sm">
              {insurance.formIntro}
            </p>
            <NotifyForm />
          </div>
        </div>
      </section>

      <IndustryQuotes data={industryQuotes} />

      <section className="py-24 container lg:mx-32">
        <h2 className="text-5xl mb-8">{faqs.title}</h2>
        <FAQs questions={faqs.questions} />
      </section>
    </Layout>
  )
}

export default WhyEquip

const Highlight = ({
  highlight: { title, whatHtml, whyHtml, image },
  index,
}) => {
  const even = index % 2 === 0

  return (
    <div className="bg-white rounded-xl mb-24 shadow-2xl overflow-hidden border border-navy-300">
      <div className="flex items-center bg-blue-300">
        <h3
          className={`text-2xl lg:text-5xl leading-tight lg:flex-grow px-6 lg:px-16 py-6 ${
            !even && "order-1"
          }`}
        >
          {title}
        </h3>
        <div className="flex-shrink p-4 bg-navy-300 items-center justify-center hidden lg:flex">
          <img
            className="w-48 h-48"
            src={image && getImageUrl(image.path)}
            alt={title}
          />
        </div>
      </div>

      <div className="lg:flex border-t border-navy-300 bg-blue-100">
        <div className="lg:w-1/2 p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-navy-300 bg-white last:border-0">
          <h4 className="text-2xl tracking-wider mb-6 leading-tight">
            What it looks like
          </h4>
          <article
            className="content leading-snug"
            dangerouslySetInnerHTML={{ __html: whatHtml }}
          />
        </div>

        <div className="lg:w-1/2 p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-navy-300 bg-white last:border-0">
          <h4 className="text-2xl tracking-wider mb-6 leading-tight">
            Why it matters
          </h4>
          <article
            className="content leading-snug"
            dangerouslySetInnerHTML={{ __html: whyHtml }}
          />
        </div>
      </div>
    </div>
  )
}

export const WhyEquipPageQuery = graphql`
  query WhyEquipPageQuery {
    takeshape {
      whyEquip {
        callout {
          title
          callToAction
          ctaPath
        }
        highlights {
          callToAction
          highlights {
            _id
            title
            whatHtml
            whyHtml
            image {
              path
            }
          }
          title
        }
        industryQuotes {
          title
          quotes {
            quoteHtml
            name
            title
          }
        }
        insurance {
          contentHtml
          title
          formIntro
        }
        faqs {
          title
          questions {
            _id
            question
            answerHtml
          }
        }
      }
    }
  }
`
