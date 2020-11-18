import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageHeader from "../components/PageHeader"
import { Sidebar, Card } from "../components/Articles"

const ArticlePage = ({
  data: {
    takeshape: {
      getArticleList: { items: articles },
    },
  },
}) => (
  <Layout>
    <SEO title="Articles" />
    <div className="bleed">
      <PageHeader title="Articles" />
      <div className="lg:flex -mx-8">
        <div className="lg:w-2/3 px-8">
          <div className="flex flex-wrap -mx-4">
            {articles.map(article => (
              <Card article={article} key={article._id} />
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 px-8">
          <Sidebar />
        </div>
      </div>
    </div>
  </Layout>
)

export default ArticlePage

export const ArticlePageQuery = graphql`
  query ArticlePageQuery {
    takeshape {
      getArticleList(sort: { field: "date", order: "DESC" }) {
        items {
          _id
          title
          slug
          date
          contentHtml
          photo {
            path
          }
          category {
            _id
            name
          }
          author {
            name
          }
        }
      }
    }
  }
`
