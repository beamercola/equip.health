import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    takeshape: {
      home: { press, hero, features, testimonials },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div className="flex flex-col items-center mt-12 -mx-8 lg:flex-row">
          <div className="w-full px-8 mb-8 lg:mb-0 lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-wider mr-8 mb-8">
              {hero.title}
            </h1>
            <button className="bg-teal-600 text-yellow-100 px-6 py-3 text-2xl rounded-lg tracking-wider">
              {hero.callToAction}
            </button>
          </div>
          <div className="w-full px-8 lg:w-1/2">
            <img
              className="bg-gray-200 shadow-2xl w-full"
              src="https://source.unsplash.com/random/600x400"
            />
          </div>
        </div>

        <section className="my-32">
          <h2 className="text-3xl lg:text-6xl mb-8 tracking-wider">
            {features.title}
          </h2>
          <div className="flex flex-col -mx-8 lg:flex-row">
            {features.items.map(({ contentHtml, title }) => (
              <div className="flex flex-row px-8 mb-12 lg:mb-0 lg:w-1/3 lg:flex-col">
                <img
                  className="w-16 h-16 bg-gray-100 mb-4 flex-shrink-0 mr-8"
                  src=""
                  alt=""
                />
                <div>
                  <h4 className="text-xl lg:text-2xl font-semibold tracking-wider leading-snug mb-2">
                    {title}
                  </h4>
                  <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center lg:mt-16">
            <button className="text-2xl py-4 px-6 bg-teal-600 text-yellow-100 rounded-lg tracking-wider">
              {features.callToAction}
            </button>
          </div>
        </section>
        <section className="my-32">
          <div className="flex flex-col flex-wrap -mx-8 lg:flex-row">
            {testimonials.testimonials.map(({ quoteHtml, name, title }) => (
              <div className="flex items-center px-8 mb-8 lg:mb-0 lg:w-1/2">
                <img className="w-24 h-24 mr-8 flex-shrink-0" src="" alt="" />
                <div className="">
                  <div
                    className="text-sm lg:text-base"
                    dangerouslySetInnerHTML={{ __html: quoteHtml }}
                  />
                  <p className="italic">{name}</p>
                  <p className="italic text-sm">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="bg-blue-900 text-white py-8">
        <div className="container">
          <h2 className="text-6xl tracking-widest">{press.title}</h2>
          <blockquote
            className="py-12 px-48 text-4xl italic text-center"
            dangerouslySetInnerHTML={{ __html: press.companies[0].quoteHtml }}
          />
          <div className="flex -mx-8">
            {press.companies.map(() => (
              <div className="px-8 w-1/5">
                <img className="w-64 h-16" src="" alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexQuery {
    takeshape {
      home {
        testimonials {
          title
          testimonials {
            name
            quoteHtml
            title
          }
        }
        press {
          companies {
            quoteHtml
            logo {
              sourceUrl
            }
          }
          title
        }
        hero {
          image {
            sourceUrl
          }
          title
          callToAction
          ctaPath
        }
        features {
          title
          items {
            contentHtml
            image {
              sourceUrl
            }
            title
          }
          callToAction
          ctaPath
        }
      }
    }
  }
`
