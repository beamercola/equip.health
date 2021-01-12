import React, { useMemo } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { ArticleHeroCard, Card, Header } from "../components/Articles"

export default ({
  data: {
    takeshape: {
      getArticleList: { items: articles },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Articles" />
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
        {articles.map((article, i) => (
          <div key={i}>
            <Card article={article} key={article._id} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const ArticlesPageQuery = graphql`
  query ArticlePageQuery {
    takeshape {
      getArticleList(sort: { field: "date", order: "DESC" }) {
        items {
          ...ArticleCardFields
        }
      }
    }
  }
`
