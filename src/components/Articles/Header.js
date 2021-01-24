import React from "react"
import { Hero } from "../Blocks"
import { Nav } from "../Articles"
import Link from "../Link"

export default () => (
  <Hero>
    <div className="text-center py-12">
      <h1 className="text-4xl font-light mb-1">
        <Link to="/articles">The Eating Disorder Blog</Link>
      </h1>
      <p>A great blog about the lorem ipsum</p>
    </div>
    <Nav />
  </Hero>
)
