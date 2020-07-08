import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCard from "../components/article_card"
import PageHeader from "../components/page_header"
import BlogSidebar from "../components/blog_sidebar"

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
        <PageHeader title="Articles" />
        <div className="lg:flex -mx-8">
          <div className="lg:w-3/4 px-8 pt-6">
            <div className="flex flex-wrap -mx-4">
              {articles.map(article => (
                <ArticleCard article={article} key={article._id} />
              ))}
            </div>
          </div>
          <div className="lg:w-1/4 px-8">
            <BlogSidebar />
          </div>
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
