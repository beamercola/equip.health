import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Hero } from "../Blocks"
import { Nav } from "../Articles"
import Link from "../Link"

const Header = () => {
  const {
    takeshape: {
      getBlog: { hero },
    },
  } = useStaticQuery(graphql`
    query BlogHeader {
      takeshape {
        getBlog {
          hero {
            title
            description
          }
        }
      }
    }
  `)

  return (
    <Hero>
      <div className="text-center py-16 md:py-24">
        <h1 className="text-4xl font-light mb-1">
          <Link to="/articles">{hero.title}</Link>
        </h1>
        <p>{hero.description}</p>
      </div>
      <Nav />
    </Hero>
  )
}

export default Header
