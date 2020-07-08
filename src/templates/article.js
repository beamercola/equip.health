import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogSidebar from "../components/blog_sidebar"
var { DateTime } = require("luxon")

const ArticlePage = ({ pageContext: article }) => {
  return (
    <Layout>
      <SEO title={article.title} />

      <div className="container">
        <article className="mb-24">
          <div className="mb-8 pt-8">
            <h2 className="text-5xl font-bold leading-tight">
              <Link to={`/articles/${article.slug}`}>{article.title}</Link>
            </h2>
            <div className="flex -mx-6 text-xs">
              <div className="px-6">
                Category:&nbsp;
                {article.category.map(category => (
                  <Link
                    className="underline pr-2"
                    to={`/articles/${category.slug}`}
                    key={category._id}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <time className="px-6" date={article.date}>
                {DateTime.fromISO(article.date).toLocaleString(
                  DateTime.DATETIME_MED
                )}
              </time>
            </div>
          </div>

          <div className="flex -mx-8">
            <div className="w-3/5 px-8 pt-6">
              <div
                className="my-2 text-xl leading-snug"
                dangerouslySetInnerHTML={{ __html: article.contentHtml }}
              />
            </div>
            <div className="w-2/5 px-8">
              <BlogSidebar />
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default ArticlePage
