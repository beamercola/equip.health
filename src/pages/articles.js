import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCard from "../components/article_card"

const ArticlePage = ({
  data: {
    takeshape: {
      getArticleList: { items: articles },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Articles" />
      <div className="container">
        <h1 className="text-5xl lg:text-7xl pt-8 pb-12 lg:pt-16 lg:pb-24 tracking-wider text-blue-900 leading-none">
          Articles
        </h1>
        <div className="flex flex-wrap -mx-8">
          {articles.map(article => (
            <ArticleCard article={article} key={article._id} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

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
        }
      }
    }
  }
`
