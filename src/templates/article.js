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
                    to={`/articles/category/${category.slug}`}
                    key={category._id}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <time className="px-6 hidden" date={article.date}>
                {DateTime.fromISO(article.date).toLocaleString(
                  DateTime.DATETIME_MED
                )}
              </time>
              {article.author && (
                <div className="px-6">Author:&nbsp;{article.author.name}</div>
              )}
            </div>
          </div>

          <div className="md:flex md:-mx-12">
            <div className="md:w-2/3 md:px-12 pt-6 border-b md:border-0 border-navy-300 pb-12 mb-12 md:pb-0">
              <div
                className="my-2 text-xl leading-snug content"
                dangerouslySetInnerHTML={{ __html: article.contentHtml }}
              />
            </div>
            <div className="md:w-1/3 md:px-12">
              <BlogSidebar />
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default ArticlePage
