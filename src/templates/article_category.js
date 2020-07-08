import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCard from "../components/article_card"

const ArticleCategoryTemplate = ({ pageContext: category }) => {
  const {
    articleSet: { items: articles },
  } = category

  return (
    <Layout>
      <SEO title={`${category.name} Category`} />
      <div className="container">
        <h1 className="text-5xl lg:text-7xl pt-8 pb-12 lg:pt-16 lg:pb-24 tracking-wider text-navy-300 leading-none">
          {category.name}
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

export default ArticleCategoryTemplate
