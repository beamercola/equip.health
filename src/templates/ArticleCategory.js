import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Card } from "../components/Articles"

const ArticleCategoryTemplate = ({
  data: {
    takeshape: { getArticleCategory: category },
  },
}) => {
  const {
    articleSet: { items: articles },
  } = category

  return (
    <Layout>
      <SEO title={`${category.name} Category`} />
      <div className="bleed">
        <h1 className="text-5xl lg:text-7xl pt-8 pb-12 lg:pt-16 lg:pb-24 tracking-wider text-navy-300 leading-none">
          {category.name}
        </h1>
        <div className="flex flex-wrap -mx-8">
          {articles.map(article => (
            <Card article={article} key={article._id} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ArticleCategoryTemplate

export const query = graphql`
  query ArticleCategoryTemplate($id: ID!) {
    takeshape {
      getArticleCategory(_id: $id) {
        _id
        name
        slug
        articleSet {
          items {
            _id
            contentHtml
            title
            slug
            date
            photo {
              path
            }
          }
        }
      }
    }
  }
`
