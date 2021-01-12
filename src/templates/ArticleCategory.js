import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { ArticleHeroCard, Card, Header } from "../components/Articles"

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

      <Header />

      <ArticleHeroCard article={articles[0]} />

      <ArticleHeroCard
        article={articles[1]}
        theme={{
          text: "text-navy-400",
          icon: { dark: ["text-navy-400", "text-navy-400"] },
        }}
        flip
      />

      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 gap-16">
        {articles.slice(1).map((article, i) => (
          <div key={i}>
            <Card article={article} key={article._id} />
          </div>
        ))}
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
            content
            title
            slug
            date
          }
        }
      }
    }
  }
`
