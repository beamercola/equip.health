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
import Modal from "react-modal"

const HowItWorks = ({
  data: {
    takeshape: {
      howItWorks: { callout, highlights, philosophy, insurance, logos, faqs },
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
          {highlights.highlights.map((highlight, i) => (
            <Highlight highlight={highlight} index={i} />
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
              Don’t see your plan listed? Sign up and we’ll notify you when it
              is.
            </p>
            <NotifyForm />
          </div>
        </div>
      </section>

      <section className="text-navy-300 py-24 text-center lg:px-48 border-b border-navy-300">
        <h2 className="text-5xl">Trusted by leading institutions</h2>
        <p className="text-2xl py-12">
          “Equip has revolutionized eating disorder care by creating a virtual,
          evidence-based treatment model that allows patients greater access to
          high quality, affordable care. Focusing on data-driven outcomes and
          working closely with health insurers to provide this high quality care
          for their members has set them far apart from the traditional
          treatment landscape - which is often opaque, ineffective and
          expensive. With treatment informed not only by research but also
          people who've been there, Equip is redefining success with eating
          disorders for the whole family.”
        </p>
        <p>
          Martha Temple Former
          <br />
          CEO of Optum Behavioral Health
        </p>
      </section>

      <section className="py-24 container lg:mx-32">
        <h2 className="text-5xl mb-8">{faqs.title}</h2>
        <FAQs questions={faqs.questions} />
      </section>
    </Layout>
  )
}

export default HowItWorks

const Highlight = ({ highlight: { title, contentHtml, image }, index }) => {
  const even = index % 2 === 0

  const { ref, inView } = useInView()

  const delay = [
    "",
    "delay-100",
    "delay-200",
    "delay-300",
    "delay-400",
    "delay-500",
  ][index]

  return (
    <div className="bg-white rounded-xl mb-24 shadow-2xl overflow-hidden border border-navy-300">
      <div className="flex items-center bg-teal-100">
        <h3
          className={`text-2xl lg:text-5xl leading-tight lg:w-2/3 px-6 lg:px-12 py-6 ${
            !even && "order-1"
          }`}
        >
          {title}
        </h3>
        <div className="w-1/3 px-12 py-8 bg-navy-300 items-center justify-center hidden lg:flex">
          <img
            className="w-48 h-48"
            src={image && getImageUrl(image.path)}
            alt={title}
          />
        </div>
      </div>

      <div className="lg:flex border-t border-navy-300">
        {[1, 2].map(i => (
          <div className="lg:w-1/2 p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-navy-300 bg-white last:border-0">
            <h4 className="text-2xl tracking-wider mb-6 leading-tight">
              {title}
            </h4>
            <article
              className="content leading-snug"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export const HowItWorksPageQuery = graphql`
  query HowItWorksPageQuery {
    takeshape {
      howItWorks {
        callout {
          title
          callToAction
          ctaPath
        }
        highlights {
          callToAction
          highlights {
            title
            contentHtml
            image {
              path
            }
          }
          title
        }
        logos {
          logo {
            path
          }
        }
        insurance {
          contentHtml
          title
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
