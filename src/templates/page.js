import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page_header"

const Page = ({ pageContext: { title, contentHtml } }) => {
  return (
    <Layout>
      <SEO title={title} />
      <div className="container">
        <PageHeader title={title} />
        <article
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </Layout>
  )
}

export default Page
