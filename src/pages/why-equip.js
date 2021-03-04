import React from "react"
import { graphql } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { SignUpButton } from "../components/Forms"
import PageHeader from "../components/PageHeader"
import { Callout, IndustryQuotes } from "../components/Blocks"

const WhyEquip = ({
  data: {
    takeshape: {
      getWhyEquip: { callout, highlights, insurance, industryQuotes, seo },
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
      <div className="bleed pb-16">
        <PageHeader title={highlights.title} />

        <div>
          {highlights.highlights.map((highlight, index) => (
            <Highlight
              highlight={highlight}
              key={highlight._id}
              index={index}
            />
          ))}
        </div>
      </div>

      <Callout {...callout} />

      <section
        className="bg-navy-300 text-sky-300 border-b border-navy-400 px-8 py-12 lg:py-24"
        id="insurance"
      >
        <div className="max-w-xl text-center mx-auto">
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
            {insurance.title}
          </h2>
          <div
            className="lg:text-2xl content"
            dangerouslySetInnerHTML={{ __html: insurance.contentHtml }}
          />
          <SignUpButton className="text-navy-300 mt-12 grow" />
        </div>
      </section>

      <IndustryQuotes data={industryQuotes} />
    </Layout>
  )
}

export default WhyEquip

const Highlight = ({
  highlight: { title, whatHtml, whyHtml, image },
  index,
}) => {
  const even = index % 2 === 0

  return (
    <div className="bg-white rounded-xl mb-24 shadow-2xl overflow-hidden border border-navy-300">
      <div className="flex items-center bg-blue-300">
        <h3
          className={`text-2xl lg:text-5xl leading-tight lg:flex-grow px-6 lg:px-16 py-6 ${
            !even && "order-1"
          }`}
        >
          {title}
        </h3>
        <div className="flex-shrink p-4 bg-navy-300 items-center justify-center hidden lg:flex">
          <img
            className="w-48 h-48"
            src={image && getImageUrl(image.path)}
            alt={title}
          />
        </div>
      </div>

      <div className="lg:flex border-t border-navy-300 bg-blue-100">
        <div className="lg:w-1/2 p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-navy-300 bg-white last:border-0">
          <h4 className="text-2xl tracking-wider mb-6 leading-tight">
            What it looks like
          </h4>
          <article
            className="content leading-snug prose prose-navy"
            dangerouslySetInnerHTML={{ __html: whatHtml }}
          />
        </div>

        <div className="lg:w-1/2 p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-navy-300 bg-white last:border-0">
          <h4 className="text-2xl tracking-wider mb-6 leading-tight">
            Why it matters
          </h4>
          <article
            className="content leading-snug prose prose-navy"
            dangerouslySetInnerHTML={{ __html: whyHtml }}
          />
        </div>
      </div>
    </div>
  )
}

export const WhyEquipPageQuery = graphql`
  query WhyEquipPageQuery {
    takeshape {
      getWhyEquip {
        callout {
          title
          callToAction
          ctaPath
        }
        highlights {
          callToAction
          title
          highlights {
            _id
            title
            whatHtml
            whyHtml
            image {
              path
            }
          }
        }
        industryQuotes {
          title
          quotes {
            quoteHtml
            name
            title
          }
        }
        insurance {
          contentHtml
          title
          formIntro
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
