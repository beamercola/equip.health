import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Header } from "../components/Articles"
import HeroCard from "../components/Blocks/HeroCard"
import { getTheme } from "../utils/ArticleTheme"
import StickyBox from "react-sticky-box"

const ArticlePage = ({
  data: {
    takeshape: { getArticle: article },
  },
}) => {
  const theme = getTheme(article._id)

  return (
    <Layout>
      <SEO
        title={article.title}
        description={article.seo && article.seo.description}
        image={article.photo.path}
      />

      <Header />

      <article>
        <HeroCard uuid={article._id} size="wide">
          <p className="text-xs mb-2">{article.author?.name}</p>
          <h2 className="text-4xl mb-4">{article.title}</h2>
        </HeroCard>

        <div className="flex items-stretch">
          <div className="w-3/4 px-12 py-16">
            <div
              className="prose prose-lg"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          </div>
          <div className="w-1/4 bg-cream-300 px-6 py-16">
            <StickyBox offsetTop={140} offsetBottom={20}>
              {article.author && (
                <section className="mb-16">
                  <h3 className="font-medium text-lg">
                    About {article.author?.name}
                  </h3>
                  <hr className="border-navy-400 border-t w-12 my-2" />
                  <div
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: article.author.bioHtml }}
                  />
                </section>
              )}
              <section className="mb-16">
                <h3 className="font-medium text-lg">About Equip</h3>
                <hr className="border-navy-400 border-t w-12 my-2" />
                <p className="text-sm">
                  Equip is a virtual eating disorder treatment program helping
                  families recover from eating disorders at home. Equip’s
                  holistic, data-driven, gold-standard care program is delivered
                  by a team of five care professionals, giving families
                  confidence they’re providing the best opportunity for progress
                  and lasting recovery.
                </p>
              </section>
            </StickyBox>
          </div>
        </div>
      </article>
    </Layout>
  )
}

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
          bioHtml
        }
      }
    }
  }
`
