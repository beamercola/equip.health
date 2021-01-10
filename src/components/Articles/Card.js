import React from "react"
import { Link, graphql } from "gatsby"
var { DateTime } = require("luxon")

const classNames = require("classnames")

export default ({ article }) => (
  <Link
    className={classNames(
      "block px-6 pb-6 pt-12 border border-transparent rounded-xl",
      "transform transition-all duration-500",
      "hover:bg-white hover:border-navy-400 hover:shadow-lg hover:-translate-y-4"
    )}
    to={`/articles/${article.slug}`}
    key={article._id}
  >
    <div className="mb-2">⚫️</div>
    {article.author && (
      <p className="text-xs font-light mb-2">{article.author?.name}</p>
    )}
    <h4 className="font-heading text-3xl mb-4">{article.title}</h4>
    <p className="text-sm">{article.content?.blocks[0]?.text}</p>
    {/* <div className="text-xs hidden">
      {DateTime.fromISO(article.date).toLocaleString(DateTime.DATETIME_MED)}
    </div> */}
  </Link>
)

export const fragments = graphql`
  fragment ArticleCardFields on TS_Article {
    _id
    title
    slug
    date
    content
    photo {
      path
    }
    category {
      name
    }
    author {
      name
    }
  }
`
