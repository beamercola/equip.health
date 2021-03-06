import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Fade } from "react-awesome-reveal"
import Link from "../Link"

const Nav = () => {
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
    <nav className="flex flex-wrap md:flex-row justify-center items-center">
      <Fade cascade direction="up" duration={800} damping={0.2}>
        <NavItem to="/articles">All Articles</NavItem>
        {categories.map((category, i) => (
          <NavItem to={`/articles/category/${category.slug}`} key={i}>
            {category.name}
          </NavItem>
        ))}
      </Fade>
    </nav>
  )
}

const NavItem = ({ to, children }) => (
  <Link
    className="block text-sm md:text-base text-center py-2 md:py-4 px-4 w-1/2 md:w-auto"
    to={to}
    activeClassName="underline"
  >
    {children}
  </Link>
)

export default Nav

export const fragments = graphql`
  fragment ArticleCategory on TS_ArticleCategory {
    name
    slug
  }
`
