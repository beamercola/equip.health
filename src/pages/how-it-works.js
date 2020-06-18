import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import { NotifyForm } from "../components/forms"
import useInView from "react-cool-inview"
import Modal from "react-modal"

const HowItWorks = ({
  data: {
    takeshape: {
      howItWorks: { callout, highlights, philosophy, insurance, logos },
    },
  },
}) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Layout>
      <div className="container">
        <h1 className="text-5xl lg:text-7xl pt-8 pb-12 lg:pt-16 lg:pb-24 tracking-wider text-blue-900 leading-none">
          {highlights.title}
        </h1>

        <div className="">
          {highlights.highlights.map((highlight, i) => (
            <Highlight highlight={highlight} index={i} />
          ))}
        </div>
      </div>

      <section className="bg-blue-200 text-blue-900 py-16 container">
        <div className="-mx-12 flex flex-col lg:flex-row items-center">
          <h3 className="text-5xl lg:w-1/2 px-12 mb-12 lg:mb-0">
            {callout.heading}
          </h3>
          <Link
            className="px-12 lg:w-1/2 text-2xl underline"
            to={callout.ctaPath}
          >
            {callout.callToAction}
          </Link>
        </div>
      </section>

      <section className="bg-blue-800 text-blue-200">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="flex flex-col justify-center lg:w-1/2 p-8 lg:py-12 lg:px-16">
            <h2 className="text-5xl mb-8 leading-tight">{insurance.title}</h2>
            <div
              className="text-xl lg:text-2xl content"
              dangerouslySetInnerHTML={{ __html: insurance.contentHtml }}
            />
            <button></button>
          </div>
          <div className="lg:w-1/2 bg-teal-600 text-white p-8 lg:py-12 lg:px-16">
            <p>
              Don’t see your plan listed? Sign up and we’ll notify you when it
              is.
            </p>
            <NotifyForm />
          </div>
        </div>
      </section>

      <section className="mx-8 lg:mx-32 border-b border-blue-900 text-blue-900 py-24 text-center lg:px-24">
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

      <div className="container">
        <section className="my-24">
          <h2 className="text-5xl text-center text-blue-900">
            {philosophy.title}
          </h2>
          <div className="flex flex-wrap -mx-8">
            {philosophy.items.map(({ heading, contentHtml, image }) => (
              <div className="lg:w-1/3 mb-12 px-8 text-center">
                <img
                  className="w-48 h-48 mx-auto"
                  src={image && getImageUrl(image.path)}
                  alt=""
                />
                <h4 className="text-lg tracking-wider mb-2 text-blue-900">
                  {heading}
                </h4>
                <div
                  className="text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
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
    <div className="flex flex-col lg:flex-row mb-12 lg:mb-24" ref={ref}>
      <div className="lg:w-1/2 flex items-center justify-center order-1">
        <img
          className={`w-64 h-64 mb-8 lg:w-96 lg:h-96`}
          src={image && getImageUrl(image.path)}
          alt=""
        />
      </div>
      <div className={`lg:w-1/2 content ${even && "lg:order-2"}`}>
        <h4 className="text-2xl lg:text-4xl tracking-wider mb-4 leading-tight">
          {title}
        </h4>
        <div
          className="text-lg lg:text-xl leading-snug"
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
          heading
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
        philosophy {
          items {
            heading
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
      }
    }
  }
`
