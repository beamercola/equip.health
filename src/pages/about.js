import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const About = ({
  data: {
    takeshape: {
      about: { callout, feature, philosophy, logos },
    },
  },
}) => {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-7xl py-12 tracking-wider">{feature.title}</h1>

        <div className="flex flex-col py-24">
          {feature.features.map(({ title, contentHtml }) => (
            <div className="flex mb-24 -mx-12">
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
            <Link className="px-12 w-1/2 text-2xl underline" to={callout.path}>
              {callout.linkText}
            </Link>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="my-24">
          <div className="flex flex-wrap -mx-8">
            {philosophy.items.map(({ heading, contentHtml, image }) => (
              <div className="w-1/3 mb-20 px-8">
                <img
                  className="w-32 h-32 mb-8"
                  src={image && image.sourceUrl}
                  alt=""
                />
                <h4 className="font-semibold tracking-wider mb-2 text-blue-900">
                  {heading}
                </h4>
                <div
                  className="text- text-gray-600"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                ></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About

export const AboutPageQuery = graphql`
  query AboutPageQuery {
    takeshape {
      about {
        callout {
          heading
          linkText
          path
        }
        feature {
          buttonTitle
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
              sourceUrl
            }
          }
          title
        }
        logos {
          logo {
            sourceUrl
          }
        }
      }
    }
  }
`
