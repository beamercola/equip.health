import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    takeshape: {
      home: { press, hero, features, testimonials },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div className="flex flex-col items-center mt-12 -mx-4 lg:flex-row">
          <div className="px-4 mb-8 lg:mb-0 lg:w-3/5">
            <h1 className="text-5xl xl:text-6xl font-semibold leading-tight tracking-wider mb-8">
              {hero.title}
            </h1>
            <button className="bg-teal-600 text-yellow-100 px-6 py-3 text-2xl rounded-lg tracking-wide">
              {hero.callToAction}
            </button>
          </div>
          <div className="w-full px-4 lg:w-2/5">
            <div className="-mx-4 lg:-ml-0 lg:-mr-32">
              <img
                className="bg-gray-200 shadow-2xl w-full rounded"
                src={getImageUrl(hero.image.path)}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="my-24 bg-teal-700 text-yellow-100 pt-48 lg:py-24">
        <div className="container">
          <h2 className="text-4xl lg:text-5xl tracking-wider leading-none mb-12 text-center">
            {features.title}
          </h2>
          <div className="flex flex-col -mx-8 lg:mt-24 lg:flex-row">
            {features.items.map(
              ({ contentHtml, title, image: { path: image } }) => (
                <div className="flex flex-row px-8 mb-12 lg:mb-0 lg:w-1/3 lg:flex-col lg:text-center">
                  <div className="bg-blue-200 w-56 h-56 flex items-center justify-center rounded-full mx-auto mb-12 p-4">
                    <img
                      className="h-full w-full flex-shrink-0 lg:mx-auto"
                      src={getImageUrl(image)}
                      alt=""
                    />
                  </div>

                  <div>
                    <h4 className="text-xl lg:text-xl tracking-wider leading-snug mb-2">
                      {title}
                    </h4>
                    <div
                      className="font-light"
                      dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                  </div>
                </div>
              )
            )}
          </div>
          <div className="text-center lg:mt-16">
            <a className="text-2xl py-2 border-b border-yellow-100" href="">
              {features.callToAction}
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="my-24 lg:my-32">
          <div className="flex flex-col flex-wrap -mx-8 lg:flex-row -my-8">
            {testimonials.testimonials.map(({ quoteHtml, name, title }) => (
              <div className="px-8 py-8 mb-8 lg:mb-0 lg:w-1/2">
                <img
                  className="w-24 h-24 mb-8 flex-shrink-0 bg-blue-800 rounded-full"
                  src=""
                  alt=""
                />
                <div className="">
                  <div
                    className="text-lg lg:text-2xl mb-4"
                    dangerouslySetInnerHTML={{ __html: quoteHtml }}
                  />
                  <p className="italic">{name}</p>
                  <p className="italic text-sm">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="bg-blue-900 text-white py-8">
        <div className="container">
          <h2 className="text-6xl tracking-widest">{press.title}</h2>
          <blockquote
            className="py-12 px-48 text-4xl italic text-center"
            dangerouslySetInnerHTML={{ __html: press.companies[0].quoteHtml }}
          />
          <div className="flex -mx-8">
            {press.companies.map(() => (
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
          callToAction
          ctaPath
        }
        features {
          title
          items {
            contentHtml
            image {
              path
            }
            title
          }
          callToAction
          ctaPath
        }
      }
    }
  }
`
