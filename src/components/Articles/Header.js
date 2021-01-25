import React from "react"
import { Hero } from "../Blocks"
import { Nav } from "../Articles"
import Link from "../Link"

export default () => (
  <Hero>
    <div className="text-center py-12">
      <h1 className="text-4xl font-light mb-1">
        <Link to="/articles">Reconvene</Link>
      </h1>
      <p>A blog about eating disorders and recovery in a modern world</p>
    </div>
    <Nav />
  </Hero>
)
