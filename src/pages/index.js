import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    prismicHome: {
      data: {
        title: { text: title },
        features,
        press,
        testimonials,
      },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div className="flex items-center mt-12">
          <div className="flex-grow pr-12">
            <h1 className="text-5xl font-semibold leading-tight tracking-wider mr-8 mb-8">
              {title}
            </h1>
            <button className="bg-teal-600 text-yellow-100 px-6 py-3 text-2xl rounded-lg tracking-wider">
              Get In Touch
            </button>
          </div>
          <img
            className="bg-gray-200 shadow-2xl"
            src="https://source.unsplash.com/random/600x400"
          />
        </div>

        <section className="my-32">
          <h2 className="text-6xl mb-8 tracking-wider">How It Works</h2>
          <div className="flex -mx-8">
            {features.map(
              ({ header: { text: header }, subtitle: { text: subtitle } }) => (
                <div className="w-1/3 px-8">
                  <img className="w-16 h-16 bg-gray-100 mb-4" src="" alt="" />
                  <h4 className="text-2xl font-semibold tracking-wider leading-snug mb-2">
                    {header}
                  </h4>
                  <p>{subtitle}</p>
                </div>
              )
            )}
          </div>
          <div className="text-center mt-16">
            <button className="text-2xl py-4 px-6 bg-teal-600 text-yellow-100 rounded-lg tracking-wider">
              Learn More
            </button>
          </div>
        </section>
        <section className="my-32">
          <div className="flex -mx-12">
            {testimonials.map(
              ({
                quote: { text: quote },
                name: { text: name },
                subtitle: { text: subtitle },
              }) => (
                <div className="flex items-center w-1/2 px-12">
                  <img className="w-24 h-24 mr-8 flex-shrink-0" src="" alt="" />
                  <div className="">
                    <p className="text-xl">{quote}</p>
                    <p className="italic">{name}</p>
                    <p className="italic text-sm">{subtitle}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </div>
      <section className="bg-blue-900 text-white py-8">
        <div className="container">
          <h2 className="text-6xl tracking-widest">Press</h2>
          <blockquote className="py-12 px-48 text-4xl italic text-center">
            {press[0].text.text}
          </blockquote>
          <div className="flex -mx-8">
            {press.map(icon => (
              <div className="px-8 w-1/5">
                <img className="w-64 h-16" src="" alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexQuery {
    prismicHome {
      data {
        title {
          text
        }
        testimonials {
          name {
            text
          }
          quote {
            text
          }
          subtitle {
            text
          }
        }
        press {
          text {
            text
          }
        }
        features {
          subtitle {
            text
          }
          header {
            text
          }
        }
      }
    }
  }
`
