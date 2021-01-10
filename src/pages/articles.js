import React, { useMemo } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Hero } from "../components/Blocks"
import { Card, Nav } from "../components/Articles"
import HeroCard, { themes, getTheme } from "../components/Blocks/HeroCard"

export default ({
  data: {
    takeshape: {
      getArticleList: { items: articleList },
    },
  },
}) => {
  var articles = articleList
  const primary = useMemo(() => articles.shift(), [articleList])
  const secondary = useMemo(() => articles.shift(), [articleList])

  return (
    <Layout>
      <SEO title="Articles" />
      <Hero>
        <div className="text-center py-12">
          <h1 className="text-4xl font-light mb-1">The Eating Disorder Blog</h1>
          <p>A great blog about the lorem ipsum</p>
        </div>
        <Nav />
      </Hero>

      <ArticleHeroCard article={primary} theme={themes[1]} />

      <ArticleHeroCard
        article={secondary}
        theme={{ text: "text-navy-400" }}
        flip
      />

      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 gap-16">
        {articles.map((article, i) => (
          <div key={i}>
            <Card article={article} key={article._id} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

// Just puts article content inside the hero card
const ArticleHeroCard = props => (
  <HeroCard
    theme={getTheme(props.article._id)}
    {...props}
    to={`/articles/${props.article.slug}`}
  >
    <p className="text-xs mb-2">{props.article.author?.name}</p>
    <h2 className="text-4xl mb-4">{props.article.title}</h2>
    <p className="">{props.article.content?.blocks[0]?.text}</p>
  </HeroCard>
)

export const ArticlesPageQuery = graphql`
  query ArticlePageQuery {
    takeshape {
      getArticleList(sort: { field: "date", order: "DESC" }) {
        items {
          ...ArticleCardFields
        }
      }
    }
  }
`
