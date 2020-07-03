import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
var { DateTime } = require("luxon")

const ArticlePage = ({ pageContext: article }) => {
  const {
    takeshape: {
      getArticleCategoryList: { items: categories },
      getArticleList: { items: recentArticles },
    },
  } = useStaticQuery(graphql`
    query CategoriesQuery {
      takeshape {
        getArticleCategoryList(sort: { field: "name", order: "ASC" }) {
          items {
            _id
            name
            slug
          }
        }
        getArticleList(sort: { field: "date", order: "DESC" }, size: 10) {
          items {
            _id
            title
            slug
            photo {
              path
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={article.title} />

      <div className="container">
        <div className="flex -mx-8">
          <div className="w-3/5 px-8 pt-6">
            <article className="mb-24">
              <div className="mb-8">
                <h2 className="text-5xl font-bold leading-tight">
                  <Link to={`/articles/${article.slug}`}>{article.title}</Link>
                </h2>
                <div className="flex -mx-8 text-xs">
                  <div className="px-8">
                    {article.category.map(category => (
                      <Link
                        to={`/articles/${category.slug}`}
                        key={category._id}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                  <time className="px-8" date={article.date}>
                    {DateTime.fromISO(article.date).toLocaleString(
                      DateTime.DATETIME_MED
                    )}
                  </time>
                </div>
              </div>
              <div
                className="my-2 text-xl leading-snug"
                dangerouslySetInnerHTML={{ __html: article.contentHtml }}
              />
            </article>
          </div>
          <div className="w-2/5 px-8">
            <section className="mb-12">
              <h3>About Us</h3>
              <p>Lorem Ipsum</p>
            </section>
            <section className="mb-12">
              <h3>Categories</h3>
              <Categories categories={categories} />
            </section>
            <section className="mb-12">
              <h3>Recent Articles</h3>
              <RecentArticles articles={recentArticles} />
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const Categories = ({ categories }) => (
  <ul>
    {categories.map(category => (
      <li key={category._id}>
        <Link to={`/articles/category/${category.slug}`}>{category.name}</Link>
      </li>
    ))}
  </ul>
)

const RecentArticles = ({ articles }) => (
  <ul>
    {articles.map(article => (
      <li key={article._id}>
        <Link to={`/articles/${article.slug}`}>{article.title}</Link>
      </li>
    ))}
  </ul>
)

export default ArticlePage
