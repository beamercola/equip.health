import React from "react"
import { Link, graphql } from "gatsby"
import Truncate from "react-truncate"
import { getIcon } from "../SVG/Icons"
import { getTheme } from "../../utils/ArticleTheme"
var { DateTime } = require("luxon")

const classNames = require("classnames")

export default ({ article }) => {
  const theme = getTheme(article._id)
  const icon = getIcon({
    uuid: article._id,
    colors: theme.icon.light,
    className: "h-8 md:h-16",
  })

  return (
    <Link
      className={classNames(
        "block p-4 pt-8 md:px-6 md:pb-6 md:pt-12 border border-transparent rounded-xl",
        "transform transition-all duration-500",
        "hover:bg-white hover:border-navy-400 hover:shadow-lg hover:-translate-y-4"
      )}
      to={`/articles/${article.slug}`}
      key={article._id}
    >
      <div className="mb-4">{icon}</div>
      {article.author && (
        <p className="text-xs font-light mb-2">{article.author?.name}</p>
      )}
      <h4 className="font-heading text-xl md:text-3xl mb-4">{article.title}</h4>
      <p className="text-sm">
        <Truncate lines={5}>{article.content?.blocks[0]?.text}</Truncate>
      </p>
      {/* <div className="text-xs hidden">
      {DateTime.fromISO(article.date).toLocaleString(DateTime.DATETIME_MED)}
    </div> */}
    </Link>
  )
}

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
