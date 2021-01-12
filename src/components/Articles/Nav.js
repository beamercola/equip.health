import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Link from "../Link"

export default () => {
  const {
    takeshape: {
      getArticleCategoryList: { items: categories },
    },
  } = useStaticQuery(graphql`
    query ArticleCategoryQuery {
      takeshape {
        getArticleCategoryList {
          items {
            name
            slug
          }
        }
      }
    }
  `)

  return (
    <nav className="flex justify-center items-center">
      <NavItem to="/articles">All Articles</NavItem>
      {categories.map((category, i) => (
        <NavItem to={`/articles/category/${category.slug}`} key={i}>
          {category.name}
        </NavItem>
      ))}
    </nav>
  )
}

const NavItem = ({ to, children }) => (
  <Link className="py-4 px-4" to={to} activeClassName="underline">
    {children}
  </Link>
)

export const fragments = graphql`
  fragment ArticleCategory on TS_ArticleCategory {
    name
    slug
  }
`
