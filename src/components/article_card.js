import React from "react"
import { Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"

const ArticleCard = ({ article }) => (
  <Link
    className="w-full md:w-1/2 lg:w-1/3 px-8 mb-8 grow"
    key={article._id}
    to={`/articles/${article.slug}`}
  >
    <img
      className="w-full h-48 lg:h-56 mb-2 bg-teal-800 object-cover"
      src={article.photo && getImageUrl(article.photo.path)}
    />
    <div className="">
      <h4 className="font-heading text-2xl">{article.title}</h4>
      <div className="text-xs">{article.date}</div>
    </div>
  </Link>
)

export default ArticleCard
