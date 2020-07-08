import React from "react"
import { Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
var { DateTime } = require("luxon")

const ArticleCard = ({ article }) => (
  <Link
    className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 grow"
    key={article._id}
    to={`/articles/${article.slug}`}
  >
    <img
      className="w-full h-64 lg:h-40 xl:h-56 mb-2 bg-teal-800 object-cover"
      src={article.photo && getImageUrl(article.photo.path)}
    />
    <div className="">
      <h4 className="font-heading text-lg">{article.title}</h4>
      <div className="text-xs">
        {DateTime.fromISO(article.date).toLocaleString(DateTime.DATETIME_MED)}
      </div>
    </div>
  </Link>
)

export default ArticleCard
