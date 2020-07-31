import React from "react"
import { Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
var { DateTime } = require("luxon")

const ArticleCard = ({ article }) => (
  <Link
    className="w-full md:w-1/2 px-4 mb-8 grow"
    key={article._id}
    to={`/articles/${article.slug}`}
  >
    <img
      className="w-full h-64 mb-2 bg-navy-300 object-cover"
      src={article.photo && getImageUrl(article.photo.path)}
      alt={article.title}
    />
    <div className="">
      <h4 className="font-heading text-lg">{article.title}</h4>
      <div className="text-xs hidden">
        {DateTime.fromISO(article.date).toLocaleString(DateTime.DATETIME_MED)}
      </div>
      {article.author && <div className="text-xs">{article.author.name}</div>}
    </div>
  </Link>
)

export default ArticleCard
