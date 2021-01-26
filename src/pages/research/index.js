import React from "react"
import { graphql } from "gatsby"
import { Fade } from "react-awesome-reveal"
import Layout from "../../components/Layout"
import Hero from "../../components/Blocks/Hero"
import Accordion from "./Accordion"
import Stat from "./Stat"

const classNames = require("classnames")

const Research = ({
  data: {
    takeshape: {
      getResearch: { hero, accordion },
    },
  },
}) => {
  return (
    <Layout>
      <Hero className="bg-sky-200 border-b border-sky-300">
        <div className="grid grid-cols-2 gap-12 py-12">
          <div className="text-navy-300 flex flex-col justify-center">
            <h1 className="text-4xl mb-2">{hero.title}</h1>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: hero.paragraph }}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 px-12">
            <Fade duration={1000} direction="up" cascade triggerOnce={true}>
              {hero.stats.map((stat, i) => (
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
      </Hero>
      <div className="container">
        <div className="py-24">
          <h2 className="text-5xl">Accordion</h2>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <Fade duration={1000}>
              <Accordion
                className="border border-navy-300 rounded-lg mb-24"
                items={accordion}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Layout>
  )
}

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
        accordion {
          title
          bodyHtml
        }
      }
    }
  }
`
