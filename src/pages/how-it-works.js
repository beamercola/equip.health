import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import { NotifyForm } from "../components/forms"
import useInView from "react-cool-inview"
import PageHeader from "../components/page_header"
import Callout from "../components/blocks/callout"
import FAQs from "../components/blocks/faqs"
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
      <div className="container pb-16">
        <PageHeader title={highlights.title} />

        <div className="lg:-my-24">
          {highlights.highlights.map((highlight, i) => (
            <Highlight highlight={highlight} index={i} />
          ))}
        </div>
      </div>

      <Callout {...callout} />

      <section className="bg-navy-300 text-sky-300">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="flex flex-col justify-center lg:w-1/2 p-8 lg:py-12 lg:px-16">
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

      <section className="mx-8 lg:mx-32 text-navy-300 py-24 text-center lg:px-24">
        <h2 className="text-5xl">Who we serve</h2>
        <p className="text-xl py-2">
          Equip aims to serve everyone. We are currently in-network with Optum
          in California, Texas, and New York.
        </p>
        <p className="text-xl py-2">
          If you live in another state, have another insurance provider, or are
          uninsured—let us know. We hope to help you in the near future.
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
    <div
      className="flex flex-col lg:flex-row mb-8 lg:my-24 items-center"
      ref={ref}
    >
      <div className="lg:w-1/2 flex items-center justify-center lg:order-1">
        <img
          className={`w-64 h-64 lg:w-96 lg:h-96 mb-4`}
          src={image && getImageUrl(image.path)}
          alt=""
        />
      </div>
      <div className={`lg:w-1/2 content ${even && "lg:order-2"}`}>
        <h4 className="text-2xl lg:text-2xl tracking-wider mb-4 leading-tight">
          {title}
        </h4>
        <div
          className="text-lg leading-snug"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
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
