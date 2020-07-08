import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Press from "../components/blocks/press"
import FeatureTable from "../components/blocks/feature_table"
import Testimonials from "../components/blocks/testimonials"
import Highlight from "../components/blocks/highlight"
import Callout from "../components/blocks/callout"

const IndexPage = ({
  data: {
    takeshape: {
      home: {
        press,
        hero,
        highlights,
        testimonials,
        compare,
        callout,
        philosophy,
      },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />

      <div className="overflow-x-hidden pb-16 container">
        <div className="flex flex-col items-center mt-12 -mx-8 lg:flex-row">
          <div className="px-8 mb-8 lg:mb-0 lg:w-3/5">
            <h1 className="text-5xl xl:text-5xl font-semibold leading-tight tracking-wider mb-8">
              {hero.title}
            </h1>
            <p>{hero.subtitle}</p>
            <button className="bg-teal-300 text-white px-6 py-4 text-2xl rounded-full leading-none shadow-2xl tracking-wide grow">
              {hero.callToAction}
            </button>
          </div>
          <div className="w-full px-8 lg:w-2/5">
            <div className="-mx-4 lg:-ml-0 lg:-mr-32">
              <img
                className="bg-gray-200 shadow-2xl w-full rounded"
                src={getImageUrl(hero.image.path)}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-teal-300 text-cream-300 py-12 container border-teal-400 border-t border-b">
        <h2 className="text-4xl lg:text-5xl tracking-wider leading-none mb-12 text-center">
          {highlights.title}
        </h2>
        <div className="flex flex-col lg:-mx-8 lg:mt-12 lg:flex-row">
          {highlights.highlights.map(highlight => (
            <Highlight {...highlight} />
          ))}
        </div>
        <div className="text-center lg:mt-12">
          <a
            className="text-2xl py-1 border-b border-cream-300 grow inline-block"
            href=""
          >
            {highlights.callToAction}
          </a>
        </div>
      </section>

      <section className="container py-16">
        <FeatureTable features={compare.features} />
      </section>

      <section className="py-16 container">
        <Testimonials testimonials={testimonials} />
      </section>

      <Callout {...callout} />

      {/* <section className="bg-navy-300 text-white py-8">
        <Press press={press} />
      </section> */}

      <div className="container">
        <section className="my-24">
          <h2 className="text-5xl text-center text-navy-300 mb-4">
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
                <h4 className="text-lg tracking-wider mb-2 text-navy-300">
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
          subtitleHtml
          callToAction
          ctaPath
        }
        compare {
          features {
            feature
            general
            family
            equip
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
        callout {
          title
          subtitleHtml
          callToAction
          ctaPath
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
      }
    }
  }
`
