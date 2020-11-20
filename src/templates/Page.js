import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageHeader from "../components/PageHeader"
import { Provider } from "../components/Forms"

const Page = ({
  data: {
    takeshape: {
      getPage: { title, contentHtml, slug },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={title} />
      <div className="bleed">
        <PageHeader title={title} />
        <article
          className="text-xl w-1/2"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        {slug === "providers" && <Provider />}
      </div>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query($id: ID!) {
    takeshape {
      getPage(_id: $id) {
        contentHtml
        title
        slug
      }
    }
  }
`
