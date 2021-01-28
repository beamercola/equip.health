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

      <div className="py-24 container">
        <h1 className="text-center text-3xl mb-12">{page.callouts.title}</h1>
        <div className="flex justify-center">
          {page.callouts.cards.map((card, i) => (
            <Fade delay={i * 500} triggerOnce>
              <div
                className="bg-white rounded-xl h-72 border border-navy-300 w-full max-w-sm mx-6 shadow-xl p-6 flex flex-col justify-end overflow-hidden"
                key={i}
              >
                <Fade direction="up" delay={(i + 1) * 250} triggerOnce>
                  <h1 className="font-sans text-4xl leading-none">
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

      <div className="container mx-auto py-24">
        <h2 className="text-5xl text-center mb-12">{page.research.title}</h2>
        <Fade className="w-full max-w-2xl mx-auto" duration={1000}>
          <Accordion
            className="border border-navy-300 rounded-lg mb-24"
            items={page.research.accordion}
          />
        </Fade>
      </div>
    </Layout>
  )
}

export default Research

const StatBlock = ({ block, reverse }) => (
  <div
    className={classNames("py-12 container", {
      "flex-row-reverse": reverse,
    })}
  >
    <div className="-mx-6 flex">
      <div className="text-navy-300 flex flex-col justify-center w-1/2 px-6">
        <Fade>
          <h1 className="text-5xl mb-2">{block.title}</h1>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: block.paragraph }}
          />
        </Fade>
      </div>
      <div className="w-1/2 px-6 flex justify-center">
        <div className="grid grid-cols-1 gap-4">
          <Fade
            className="flex justify-center w-full"
            duration={1000}
            direction="up"
            cascade
            triggerOnce={true}
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
          accordion {
            title
            bodyHtml
          }
        }
      }
    }
  }
`
