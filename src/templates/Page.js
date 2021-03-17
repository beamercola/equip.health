import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageHeader from "../components/PageHeader"
import { SignUpButton } from "../components/Forms"

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
          className="text-lg prose prose-navy pb-12 flex-grow"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
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
