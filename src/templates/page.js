import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page_header"
import { Provider } from "../components/forms"

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
      <div className="container">
        <PageHeader title={title} />
        <article
          className="text-xl"
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
