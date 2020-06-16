import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"

const HowItWorks = ({
  data: {
    takeshape: {
      howItWorks: { callout, feature, philosophy, logos },
    },
  },
}) => {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-7xl pt-16 pb-24 tracking-wider">{feature.title}</h1>

        <div className="flex flex-col">
          {feature.features.map(({ title, contentHtml }) => (
            <div className="flex mb-24 -mx-12 content">
              <h4 className="w-1/3 px-12 text-2xl font-semibold tracking-wider">
                {title}
              </h4>
              <div
                className="w-2/3 px-12 text-2xl leading-snug"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          ))}
        </div>
      </div>
      <section className="bg-blue-800 text-blue-200 py-24">
        <div className="container">
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
      <div className="container">
        <section className="my-24">
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
        feature {
          callToAction
          features {
            title
            contentHtml
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
      }
    }
  }
`
