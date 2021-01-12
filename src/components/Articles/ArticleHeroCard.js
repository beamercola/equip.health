import React from "react"
import Truncate from "react-truncate"
import HeroCard from "../../components/Blocks/HeroCard"

export default props => (
  <HeroCard
    {...props}
    uuid={props.article._id}
    to={`/articles/${props.article.slug}`}
  >
    <p className="text-xs mb-2">{props.article.author?.name}</p>
    <h2 className="text-4xl mb-4">{props.article.title}</h2>
    <p className="">
      <Truncate lines={5}>{props.article.content?.blocks[0]?.text}</Truncate>
    </p>
  </HeroCard>
)
