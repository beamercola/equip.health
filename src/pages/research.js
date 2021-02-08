import React from "react"
import { graphql } from "gatsby"
import { Fade } from "react-awesome-reveal"
import Layout from "../components/Layout"
import Hero from "../components/Blocks/Hero"
import Accordion from "../components/Accordion"
import Stat from "../components/Stat"

const classNames = require("classnames")

const Research = ({
  data: {
    takeshape: { getResearch: page },
  },
}) => {
  return (
    <Layout>
      <Hero className="bg-sky-200 border-b border-sky-300">
        <StatBlock block={page.hero} />
      </Hero>

      <div className="py-24 container px-4">
        <div className="mb-12 text-center">
          <h1 className="text-3xl">{page.callouts.title}</h1>
          <p>{page.callouts.paragraph}</p>
        </div>
        <div className="md:flex justify-center items-stretch">
          {page.callouts.cards.map((card, i) => (
            <Fade delay={i * 500} triggerOnce>
              <div
                className="bg-white h-full rounded-xl border border-navy-300 w-full max-w-sm md:mx-6 shadow-xl p-6 flex flex-col justify-end overflow-hidden mb-4 md:mb-0"
                key={i}
              >
                <Fade
                  className="h-full"
                  direction="up"
                  delay={(i + 1) * 250}
                  triggerOnce
                >
                  <h1 className="font-sans text-3xl leading-none">
                    {card.paragraph}
                  </h1>
                </Fade>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      <div className="bg-cream-300 py-12">
        <StatBlock block={page.section2} reverse />
      </div>

      <div className="container mx-auto pt-24 px-3">
        <h2 className="text-5xl text-center mb-2">{page.research.title}</h2>
        <p className="text-center mb-12">{page.research.subtitle}</p>
        <Fade className="w-full max-w-2xl mx-auto" duration={1000}>
          <Accordion
            className="border border-navy-300 rounded-lg"
            items={page.research.accordion}
          />
        </Fade>
      </div>

      <div className="container py-12 text-navy-300 px-4 mb-12 md:mt-24">
        <div className="max-w-2xl mx-auto w-full">
          {/* <h1 className="font-heading text-3xl mb-8">Resources</h1> */}
          <h2 className="text-5xl text-center mb-2 mb-12">Resources</h2>
          <div
            className="prose prose-sm text-navy-300 w-full break-words max-w-none"
            dangerouslySetInnerHTML={{ __html: page.appendixHtml }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Research

const StatBlock = ({ block, reverse }) => (
  <div className={classNames("py-12 container")}>
    <div
      className={classNames("md:-mx-6 md:flex mx-4", {
        "flex-row-reverse": reverse,
      })}
    >
      <div className="text-navy-300 flex flex-col justify-center md:w-1/2 md:px-6 mb-12 md:mb-0">
        <Fade>
          <h1 className="text-4xl mb-2">{block.title}</h1>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: block.paragraph }}
          />
        </Fade>
      </div>
      <div className="md:w-1/2 md:px-6 flex justify-center">
        <div className="grid grid-cols-1 gap-4">
          <Fade
            className="flex justify-center w-full"
            duration={1000}
            direction="up"
            cascade
            triggerOnce
          >
            {block.stats.map((stat, i) => (
              <Stat
                end={stat.number}
                delay={i * 0.6}
                label={stat.numberLabel}
                key={i}
              >
                {stat.description}
              </Stat>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  </div>
)

export const query = graphql`
  query {
    takeshape {
      getResearch {
        hero {
          title
          paragraph
          stats {
            description
            number
            numberLabel
          }
        }
        section2 {
          title
          paragraph
          stats {
            description
            number
            numberLabel
          }
        }
        callouts {
          title
          paragraph
          cards {
            paragraph
          }
        }
        research {
          title
          subtitle
          accordion {
            title
            bodyHtml
          }
        }
        appendixHtml
      }
    }
  }
`
