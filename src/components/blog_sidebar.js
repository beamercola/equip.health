import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const BlogSidebar = () => {
  const {
    takeshape: {
      getArticleCategoryList: { items: categories },
      getArticleList: { items: recentArticles },
    },
  } = useStaticQuery(graphql`
    query CategoriesQuery {
      takeshape {
        getArticleCategoryList(sort: { field: "name", order: "ASC" }) {
          items {
            _id
            name
            slug
          }
        }
        getArticleList(sort: { field: "date", order: "DESC" }, size: 10) {
          items {
            _id
            title
            slug
            photo {
              path
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Section title="About Us">
        <p className="text-sm">
          Equip is a virtual eating disorder treatment program helping families
          recover from eating disorders at home. Equip’s holistic, data-driven,
          gold-standard care program is delivered by a team of five care
          professionals, giving families confidence they’re providing the best
          opportunity for progress and lasting recovery.
        </p>
      </Section>

      <Section title="Categories">
        <Categories categories={categories} />
      </Section>

      <Section title="Recent Articles">
        <RecentArticles articles={recentArticles} />
      </Section>
    </>
  )
}

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h3 className="mb-2">{title}</h3>
    {children}
  </section>
)

const Categories = ({ categories }) => (
  <ul>
    {categories.map(category => (
      <li key={category._id}>
        <Link
          className="underline text-xs"
          to={`/articles/category/${category.slug}`}
        >
          {category.name}
        </Link>
      </li>
    ))}
  </ul>
)

const RecentArticles = ({ articles }) => (
  <ul>
    {articles.map(article => (
      <li className="mb-2" key={article._id}>
        <Link
          className="underline leading-normal block text-xs"
          to={`/articles/${article.slug}`}
        >
          {article.title}
        </Link>
      </li>
    ))}
  </ul>
)

export default BlogSidebar
