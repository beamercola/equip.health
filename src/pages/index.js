import React from "react"
import { graphql, Link } from "gatsby"
import { getAssetUrl, getImageUrl } from "@takeshape/routing"
import { Logo } from "../components/svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeatureTable from "../components/blocks/feature_table"
import Testimonials from "../components/blocks/testimonials"
import Press from "../components/blocks/press"
import Highlight from "../components/blocks/highlight"
import Callout from "../components/blocks/callout"
import ReactPlayer from "react-player"

const IndexPage = ({
  data: {
    takeshape: {
      getHome: {
        hero,
        highlights,
        testimonials,
        compare,
        callout,
        philosophy,
        seo,
        press,
      },
    },
  },
}) => {
  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        image={seo.image && seo.image.path}
      />

      <div className="hero overflow-x-hidden pb-16 container">
        <div className="flex flex-col items-center mt-12 -mx-8 md:flex-row">
          <div className="px-8 mb-8 md:mb-0 md:w-7/12">
            <h1 className="text-5xl xl:text-5xl font-semibold leading-tight tracking-wider mb-2">
              {hero.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: hero.subtitleHtml }} />
            <div className="pt-8 flex">
              <Link
                to={hero.ctaPath}
                className="bg-white border-navy-300 border text-navy-300 pl-4 pr-6 py-4 text-2xl rounded-full leading-none shadow-2xl tracking-wide grow flex items-center"
              >
                <span className="inline-block">
                  <Logo className="h-8 w-8 mr-2" />
                </span>
                {hero.callToAction}
              </Link>
            </div>
          </div>
          <div className="w-full px-8 pt-24 md:pt-0 md:w-5/12">
            <ReactPlayer
              className="w-full"
              width="100%"
              height="100%"
              url={getAssetUrl(hero.image.path)}
              muted={true}
              controls={false}
              playing={true}
              loop={true}
              playsinline={true}
            />
          </div>
        </div>
      </div>

      <section className="bg-teal-300 text-cream-300 py-12 container border-teal-400 border-t border-b">
        <h2 className="text-4xl lg:text-5xl tracking-wider leading-none mb-12 text-center">
          {highlights.title}
        </h2>
        <div className="flex flex-col lg:-mx-8 lg:mt-12 lg:flex-row">
          {highlights.highlights.map(highlight => (
            <Highlight {...highlight} key={highlight._id} />
          ))}
        </div>
        <div className="text-center lg:mt-12">
          <a
            className="text-2xl py-1 border-b border-cream-300 grow inline-block"
            href={highlights.ctaPath}
          >
            {highlights.callToAction}
          </a>
        </div>
      </section>

      <section className="container py-24 lg:mx-24 text-xs lg:text-base">
        <h2 className="text-4xl lg:text-5xl tracking-wider leading-none mb-12 text-center">
          {compare.title}
        </h2>
        <FeatureTable features={compare.features} />
      </section>

      <Testimonials testimonials={testimonials} />

      <Callout {...callout} />

      <Press press={press} />

      <div className="container">
        <section className="my-24">
          <h2 className="text-5xl text-center text-navy-300 mb-4">
            {philosophy.title}
          </h2>
          <div className="flex flex-wrap -mx-8">
            {philosophy.items.map(({ heading, contentHtml, image }, index) => (
              <div
                className="lg:w-1/3 mb-12 px-8 text-center text-cream-300"
                key={`philosophy-${index}`}
              >
                <img
                  className="w-48 h-48 mx-auto text-cream-300"
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
      getHome {
        testimonials {
          title
          testimonials {
            name
            quoteHtml
            title
            photo {
              path
            }
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
          title
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
            _id
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
        seo {
          title
          description
          image {
            path
          }
        }
      }
    }
  }
`
