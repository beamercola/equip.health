import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <div className="flex flex-wrap -mx-8">
          {articles.map(article => (
            <Link
              className="w-full md:w-1/2 lg:w-1/3 px-8 mb-8 grow"
              key={article._id}
              to={`/articles/${article.slug}`}
            >
              <img
                className="w-full h-48 lg:h-56 mb-2 bg-teal-800 object-cover"
                src={article.photo && getImageUrl(article.photo.path)}
              />
              <div className="">
                <h4 className="font-heading text-2xl">{article.title}</h4>
                <div className="text-xs">{article.date}</div>
              </div>
            </Link>
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
            name
          }
        }
      }
    }
  }
`
