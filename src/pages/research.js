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
        <div className="py-12 container text-navy-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="">
              <img
                className="w-32 md:w-56 mb-8"
                src="/icon-data.svg"
                alt="Data"
              />
              <Header title={page.hero.title} paragraph={page.hero.paragraph} />
            </div>
            <div>
              <StatStack
                className="grid grid-cols-1 gap-4"
                stats={page.hero.stats}
              />
            </div>
          </div>
        </div>
      </Hero>

      <section className="py-24 container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-8 mx-auto justify-center mb-12 max-w-3xl">
          <div className="max-w-sm">
            <img
              className="h-24 md:h-40 md:mx-auto"
              src="/icon-growth.svg"
              alt="Growth"
            />
          </div>
          <Header
            className="max-w-sm"
            title={page.callouts.title}
            paragraph={page.callouts.paragraph}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-12 justify-center items-stretch max-w-3xl mx-auto">
          {page.callouts.cards.map((card, i) => (
            <div
              className="bg-white rounded-xl border border-navy-300 w-full shadow-xl p-6 overflow-hidden mb-4 md:mb-0"
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
          ))}
        </div>
      </section>

      <section className="bg-sky-200 py-24 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center container">
          <div className="md:order-1 flex items-center justify-center">
            <img
              className="w-32 md:w-72 mr-auto md:mx-auto"
              src="/icon-balance.svg"
              alt="Balance"
            />
          </div>
          <div className="flex flex-col items-start">
            <Header
              className="mb-12"
              title={page.hero.title}
              paragraph={page.hero.paragraph}
            />
            <StatStack
              className="grid grid-cols-1 gap-4"
              stats={page.hero.stats}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto pt-24 px-3">
        <h2 className="text-5xl text-center mb-2">{page.research.title}</h2>
        <p className="text-center mb-12">{page.research.subtitle}</p>
        <Fade className="w-full max-w-2xl mx-auto" duration={1000}>
          <Accordion
            className="border border-navy-300 rounded-lg"
            items={page.research.accordion}
          />
        </Fade>
      </section>

      <section className="container py-12 text-navy-300 px-4 mb-12 md:mt-24">
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-5xl text-center mb-2 mb-12">Resources</h2>
          <div
            className="prose prose-sm text-navy-300 w-full break-words max-w-none"
            dangerouslySetInnerHTML={{ __html: page.appendixHtml }}
          />
        </div>
      </section>
    </Layout>
  )
}

const StatStack = ({ className, stats }) => (
  <div className={className}>
    <Fade
      className="flex justify-center w-full"
      duration={1000}
      direction="up"
      cascade
      triggerOnce
    >
      {stats.map((stat, i) => (
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
)

const Header = ({ className, center, title, paragraph }) => (
  <div className={className}>
    <Fade cascade>
      <h1 className="text-4xl mb-2">{title}</h1>
      <p
        className={classNames("prose leading-tight", {
          "text-center mx-auto": center,
        })}
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />
    </Fade>
  </div>
)

export default Research

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
