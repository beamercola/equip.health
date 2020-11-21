import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Link from "../components/Link"
import { Sidebar } from "../components/Articles"
import PageHeader from "../components/PageHeader"
var { DateTime } = require("luxon")

const ArticlePage = ({
  data: {
    takeshape: { getArticle: article },
  },
}) => (
  <Layout>
    <SEO
      title={article.title}
      description={article.seo && article.seo.description}
      image={article.photo.path}
    />

    <div className="bleed pb-24">
      <article>
        <PageHeader title={article.title}>
          <div className="flex text-xs">
            <div className="pr-6">
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
            <time className="pr-6 hidden" date={article.date}>
              {DateTime.fromISO(article.date).toLocaleString(
                DateTime.DATETIME_MED
              )}
            </time>
            {article.author && (
              <div className="px-6">Author:&nbsp;{article.author.name}</div>
            )}
          </div>
        </PageHeader>

        <div className="md:flex md:-mx-12">
          <div className="md:w-2/3 md:px-12 border-b md:border-0 border-navy-300 pb-12 mb-12 md:pb-0">
            <div
              className="prose-lg my-2"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          </div>
          <div className="md:w-1/3 md:px-12">
            <Sidebar />
          </div>
        </div>
      </article>
    </div>
  </Layout>
)

export default ArticlePage

export const query = graphql`
  query ArticlePage($id: ID!) {
    takeshape {
      getArticle(_id: $id) {
        _id
        contentHtml
        title
        slug
        date
        photo {
          path
        }
        category {
          _id
          name
          slug
        }
        author {
          name
        }
      }
    }
  }
`
