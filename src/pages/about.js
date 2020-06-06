import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const About = ({
  data: {
    prismicAbout: {
      data: {
        features,
        philosophy,
        callout_title: { text: calloutTitle },
        callout_link_title: { text: calloutLinkTitle },
      },
    },
  },
}) => {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-7xl py-12 tracking-wider">What You Get At Equip</h1>

        <div className="flex flex-col py-24">
          {features.map(
            ({ title: { text: title }, content: { html: content } }) => (
              <div className="flex mb-24 -mx-12">
                <h4 className="w-1/3 px-12 text-2xl font-semibold tracking-wider">
                  {title}
                </h4>
                <div
                  className="w-2/3 px-12 text-2xl leading-snug"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            )
          )}
        </div>
      </div>
      <section className="bg-blue-800 text-blue-200 py-24">
        <div className="container">
          <div className="-mx-12 flex items-center">
            <h3 className="text-5xl w-1/2 px-12">{calloutTitle}</h3>
            <Link className="px-12 w-1/2 text-2xl underline" to="/">
              {calloutLinkTitle}
            </Link>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="my-24">
          <div className="flex flex-wrap -mx-8">
            {philosophy.map(({ title, description: { html: description } }) => (
              <div className="w-1/3 mb-20 px-8">
                <img className="w-32 h-32 mb-8" src="" alt="" />
                <h4 className="font-semibold tracking-wider mb-2 text-blue-900">
                  {title}
                </h4>
                <div
                  className="text- text-gray-600"
                  dangerouslySetInnerHTML={{ __html: description }}
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
    prismicAbout {
      data {
        features {
          title {
            text
          }
          image {
            url
          }
          content {
            html
          }
        }
        callout_title {
          text
        }
        callout_link_title {
          text
        }
        philosophy {
          title
          description {
            html
          }
        }
      }
    }
  }
`
