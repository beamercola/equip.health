import React from "react"
import { graphql } from "gatsby"
import { Fade } from "react-awesome-reveal"
import Layout from "../components/Layout"
import Knack from "../components/Knack"

const classNames = require("classnames")

const Providers = ({
  data: {
    takeshape: { getProviders: page },
  },
}) => (
  <Layout>
    <div className="container px-4 grid lg:grid-cols-2 gap-12 items-center">
      <div className="">
        <article className="max-w-lg mt-12 mx-auto">
          <p className="font-heading text-sm mb-2">{page.subtitle}</p>
          <h1 className="text-5xl mb-8">{page.title}</h1>
          <div
            className="prose leading-normal"
            dangerouslySetInnerHTML={{ __html: page.contentHtml }}
          />
        </article>
      </div>
      <div className="mb-12">
        <div className="max-w-xl mx-auto">
          <img className="h-32 ml-auto" src="/icon-different.svg" alt="Icon" />
        </div>
        <Knack />
      </div>
    </div>
  </Layout>
)

export default Providers

export const query = graphql`
  query ProviderPage {
    takeshape {
      getProviders {
        subtitle
        contentHtml
        title
      }
    }
  }
`
