import React from "react"
import { graphql } from "gatsby"
import { getAssetUrl, getImageUrl } from "@takeshape/routing"
import { Logo } from "../components/SVG"
import Link from "../components/Link"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {
  Philosophy,
  Hero,
  Callout,
  Highlight,
  Works,
  Press,
  FeatureTable,
  Testimonials,
} from "../components/Blocks"
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
}) => (
  <Layout>
    <SEO
      title={seo.title}
      description={seo.description}
      image={seo.image && seo.image.path}
    />

    <Hero className="bg-teal-300">
      <div className="md:flex md:justify-between items-center py-16 container">
        <div className="md:max-w-md md:mr-12">
          <h1 className="text-4xl leading-tight mb-2">{hero.title}</h1>
          <div
            className="prose text-white"
            dangerouslySetInnerHTML={{ __html: hero.subtitleHtml }}
          />
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

        <div className="md:max-w-lg mt-12 md:mt-0">
          <ReactPlayer
            className="w-full"
            width="100%"
            height="100%"
            url={getAssetUrl(hero.image.path)}
            controls={false}
            muted
            playing
            loop
            playsinline
          />
        </div>
      </div>
    </Hero>

    <Section className="container px-4 my-24" title={philosophy.title}>
      <Philosophy items={philosophy.items} />
    </Section>

    <Section
      className="bg-sky-100 text-navy-400 py-12 border-sky-200 border-t border-b"
      title={highlights.title}
    >
      <div className="container px-4">
        <Works items={highlights.highlights} />
        <div className="text-center mt-12">
          <Link
            className="text-2xl py-1 border-b border-cream-300 grow inline-block"
            to={highlights.ctaPath}
          >
            {highlights.callToAction}
          </Link>
        </div>
      </div>
    </Section>

    <Section className="lg:text-base container px-4" title={compare.title}>
      <FeatureTable features={compare.features} />
    </Section>

    <div className="overflow-hidden">
      <Section className="container pb-24">
        <Testimonials items={testimonials.testimonials} />
      </Section>
    </div>

    <Section className="bg-cream-300 border-t border-cream-400">
      <div className="lg:container px-8">
        <Press press={press} />
      </div>
    </Section>

    <Callout {...callout} />
  </Layout>
)

export default IndexPage

const Section = ({ className, children, title, titleClassName }) => (
  <section className={`py-12 md:py-16 ${className}`}>
    {title && (
      <h2
        className={`container px-4 text-3xl md:text-5xl md:text-center mb-12 md:mb-16 ${titleClassName}`}
      >
        {title}
      </h2>
    )}
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
        ...Press
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
