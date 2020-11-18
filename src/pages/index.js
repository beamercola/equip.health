import React from "react"
import { graphql } from "gatsby"
import { getAssetUrl, getImageUrl } from "@takeshape/routing"
import { Logo } from "../components/SVG"
import Link from "../components/Link"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import FeatureTable from "../components/Blocks/FeatureTable"
import Testimonials from "../components/Blocks/Testimonials"
import Press from "../components/Blocks/Press"
import Highlight from "../components/Blocks/Highlight"
import Callout from "../components/Blocks/Callout"
import { Features } from "../components/Blocks"
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

      <div className="hero overflow-x-hidden pb-16 px-8 md:px-12">
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

      <Section
        className="bg-teal-300 text-white py-12 border-teal-400 border-t border-b"
        title={highlights.title}
      >
        <div className="container px-8">
          <Features
            className="flex-col lg:flex-row lg:-mx-8 lg:mt-12"
            itemClassName="lg:px-8 mb-12 lg:mb-0 lg:w-1/3 lg:text-center flex items-center lg:block"
            imageWrapperClassName="bg-navy-300 w-32 h-32 lg:w-48 lg:h-48 mr-8 lg:mr-auto flex items-center justify-center rounded-full border border-navy-400 mx-auto p-2 overflow-hidden md:mb-6"
            imageClassName="h-full w-full flex-shrink-0 lg:mx-auto"
            titleClassName="text-base md:text-lg tracking-wider leading-snug mb-2"
            contentClassName="font-light text-xs md:text-base"
            items={highlights.highlights.map(h => ({
              title: h.title,
              content: h.captionHtml,
              image: h.image.path,
            }))}
          />
          <div className="text-center lg:mt-12">
            <Link
              className="text-2xl py-1 border-b border-cream-300 grow inline-block"
              to={highlights.ctaPath}
            >
              {highlights.callToAction}
            </Link>
          </div>
        </div>
      </Section>

      <Section className="text-xs lg:text-base" title={compare.title}>
        <div className="container text-xs lg:text-base lg:px-24">
          <FeatureTable features={compare.features} />
        </div>
      </Section>

      <Section className="pt- pb-24">
        <div className="container">
          <Testimonials items={testimonials.testimonials} />
        </div>
      </Section>

      <Callout {...callout} />

      <Section title={press.title}>
        <Press press={press} />
      </Section>

      <Section
        className="my-24 text-navy-400 max-w-6xl mx-auto px-8"
        title={philosophy.title}
      >
        <Features
          className="flex-wrap -mx-8"
          itemClassName="md:w-1/2 lg:w-1/3 mb-12 px-8 md:text-center flex md:flex-col"
          titleClassName=""
          imageClassName="w-32 h-32 md:w-48 md:h-48 mx-auto mr-4 md:mr-auto"
          contentClassName="text-xs md:text-sm"
          items={philosophy.items.map(p => ({
            title: p.heading,
            content: p.contentHtml,
            image: p.image.path,
          }))}
        />
      </Section>
    </Layout>
  )
}

export default IndexPage

const Section = ({ className, children, title, titleClassName }) => (
  <section className={`py-12 md:py-16 ${className}`}>
    <h2
      className={`text-3xl md:text-5xl text-center mb-12 md:mb-8 ${titleClassName}`}
    >
      {title}
    </h2>
    {children}
  </section>
)

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
