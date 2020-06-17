import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import { Input, Select, states } from "../components/forms"

const HowItWorks = ({
  data: {
    takeshape: {
      howItWorks: { callout, feature, philosophy, insurance, logos },
    },
  },
}) => {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-7xl pt-16 pb-24 tracking-wider">{feature.title}</h1>

        <div className="flex flex-col">
          {feature.features.map(({ title, contentHtml }) => (
            <div className="flex mb-24 -mx-12 content">
              <h4 className="w-1/3 px-12 text-2xl font-semibold tracking-wider">
                {title}
              </h4>
              <div
                className="w-2/3 px-12 text-2xl leading-snug"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          ))}
        </div>
      </div>

      <section className="bg-blue-800 text-blue-200 py-24">
        <div className="container">
          <div className="-mx-12 flex items-center">
            <h3 className="text-5xl w-1/2 px-12">{callout.heading}</h3>
            <Link
              className="px-12 w-1/2 text-2xl underline"
              to={callout.ctaPath}
            >
              {callout.callToAction}
            </Link>
          </div>
        </div>
      </section>

      <section className="my-12 lg:my-24 bg-blue-800 text-blue-200">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-3/5 p-8 lg:p-24">
            <h2 className="text-5xl mb-8 leading-tight">{insurance.title}</h2>
            <div
              className="text-xl lg:text-2xl"
              dangerouslySetInnerHTML={{ __html: insurance.contentHtml }}
            />
            <button></button>
          </div>
          <div className="lg:w-2/5 bg-teal-600 text-white p-8 lg:py-12 lg:px-16">
            <p>
              Don’t see your plan listed? Sign up and we’ll notify you when it
              is.
            </p>
            <form>
              <div className="mt-5 -mx-2">
                <label>I am a</label>
                <Select>
                  <option>Patient</option>
                  <option>Loved One</option>
                  <option>Referring Provider</option>
                  <option>Other</option>
                </Select>
              </div>
              <div className="my-5 -mx-2">
                <label htmlFor="name">Name</label>
                <Input type="text" name="name" />
              </div>
              <div className="my-5 -mx-2">
                <label htmlFor="name">Email</label>
                <Input type="email" name="email" />
              </div>
              <div className="my-5 -mx-2">
                <label htmlFor="name">Phone</label>
                <Input type="text" name="phone" />
              </div>
              <div className="my-5 -mx-2">
                <label htmlFor="name">Age of patient</label>
                <Select>
                  <option>5 and under</option>
                  <option>6-27</option>
                  <option>28+</option>
                </Select>
              </div>
              <div className="my-5 -mx-2">
                <label htmlFor="name">State</label>
                <Select>
                  {states.map(state => (
                    <option>{state.value}</option>
                  ))}
                </Select>
              </div>
              <div className="my-8 -mx-2">
                <button className="bg-blue-800 text-center p-4 rounded-full w-full font-heading shadow-lg text-xl">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="my-24">
          <div className="flex flex-wrap -mx-8">
            {philosophy.items.map(({ heading, contentHtml, image }) => (
              <div className="w-1/3 mb-12 px-8 text-center">
                <img
                  className="w-48 h-48 mx-auto"
                  src={image && getImageUrl(image.path)}
                  alt=""
                />
                <h4 className="text-lg tracking-wider mb-2 text-blue-900">
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

export default HowItWorks

export const HowItWorksPageQuery = graphql`
  query HowItWorksPageQuery {
    takeshape {
      howItWorks {
        callout {
          heading
          callToAction
          ctaPath
        }
        feature {
          callToAction
          features {
            title
            contentHtml
          }
          title
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
        logos {
          logo {
            path
          }
        }
        insurance {
          contentHtml
          title
        }
      }
    }
  }
`
