import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import { NotifyForm } from "../components/forms"

const HowItWorks = ({
  data: {
    takeshape: {
      howItWorks: { callout, highlights, philosophy, insurance, logos },
    },
  },
}) => {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-7xl pt-16 pb-24 tracking-wider text-blue-900">
          {highlights.title}
        </h1>

        <div className="">
          {highlights.highlights.map(({ title, contentHtml, image }, i) => {
            const even = i % 2 === 0
            return (
              <div className="flex mb-24">
                <div className={`w-1/2 content ${even && "order-2"}`}>
                  <h4 className="text-4xl tracking-wider mb-4">{title}</h4>
                  <div
                    className="text-xl leading-snug"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                  />
                </div>
                <div className="flex items-center justify-center w-1/2">
                  <img
                    className="w-96 h-96"
                    src={image && getImageUrl(image.path)}
                    alt=""
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <section className="bg-blue-200 text-blue-900 py-24">
        <div className="px-12">
          <div className="-mx-12 flex items-center">
            <h3 className="text-5xl w-1/2 px-12">{callout.heading}</h3>
            <Link
              className="px-12 w-1/2 text-2xl underline"
              to={callout.ctaPath}
            >
              {callout.callToAction}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-800 text-blue-200">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="flex flex-col justify-center lg:w-1/2 p-8 lg:py-12 lg:px-16">
            <h2 className="text-5xl mb-8 leading-tight">{insurance.title}</h2>
            <div
              className="text-xl lg:text-2xl"
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

      <section className="mx-32 border-b border-blue-900 text-blue-900 py-24 text-center lg:px-24">
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
              <div className="w-1/3 mb-12 px-8 text-center">
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
