import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Press from "../components/blocks/press"
import FeatureTable from "../components/blocks/features"
import Testimonials from "../components/blocks/testimonials"

const IndexPage = ({
  data: {
    takeshape: {
      home: { press, hero, highlights, testimonials, compare },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="overflow-x-hidden pb-24">
        <div className="container">
          <div className="flex flex-col items-center mt-12 -mx-4 lg:flex-row">
            <div className="px-4 mb-8 lg:mb-0 lg:w-3/5">
              <h1 className="text-5xl xl:text-6xl font-semibold leading-tight tracking-wider mb-8">
                {hero.title}
              </h1>
              <button className="bg-teal-600 text-yellow-100 px-6 py-3 text-2xl rounded-lg tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                {hero.callToAction}
              </button>
            </div>
            <div className="w-full px-4 lg:w-2/5">
              <div className="-mx-4 lg:-ml-0 lg:-mr-32">
                <img
                  className="bg-gray-200 shadow-2xl w-full rounded"
                  src={getImageUrl(hero.image.path)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-teal-700 text-yellow-100 py-12 container">
        <h2 className="text-4xl lg:text-5xl tracking-wider leading-none mb-12 text-center">
          {highlights.title}
        </h2>
        <div className="flex flex-col -mx-8 lg:mt-12 lg:flex-row">
          {highlights.highlights.map(
            ({ captionHtml, title, image: { path: image } }) => (
              <div className="px-8 mb-12 lg:mb-0 lg:w-1/3 lg:text-center">
                <div className="bg-blue-200 w-48 h-48 flex items-center justify-center rounded-full mx-auto mb-12 p-2">
                  <img
                    className="h-full w-full flex-shrink-0 lg:mx-auto"
                    src={getImageUrl(image)}
                    alt=""
                  />
                </div>

                <div>
                  <h4 className="text-xl lg:text-xl tracking-wider leading-snug mb-2">
                    {title}
                  </h4>
                  <div
                    className="font-light"
                    dangerouslySetInnerHTML={{ __html: captionHtml }}
                  />
                </div>
              </div>
            )
          )}
        </div>
        <div className="text-center lg:mt-12">
          <a
            className="text-2xl py-1 border-b border-yellow-100 grow inline-block"
            href=""
          >
            {highlights.callToAction}
          </a>
        </div>
      </section>

      <section className="py-16 container">
        <Testimonials testimonials={testimonials} />
      </section>

      <section className="container py-16">
        <FeatureTable features={compare.features} />
      </section>

      {/* <section className="bg-blue-900 text-white py-8">
        <Press press={press} />
      </section> */}
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
              path
            }
          }
          title
        }
        hero {
          image {
            path
          }
          title
          callToAction
          ctaPath
        }
        compare {
          features {
            feature
            availability
          }
        }
        highlights {
          title
          highlights {
            captionHtml
            image {
              path
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
