import React from "react"
import Layout from "../components/Layout"
import Link from "../components/Link"

const Thanks = () => (
  <Layout>
    <div className="container pt-8 pb-32">
      <div className="max-w-2xl mx-auto border-navy-300 rounded-xl border p-8 bg-white bg-opacity-50 text-navy-300">
        <h1>Thanks for your submission!</h1>
        <p>
          We'll be in touch. In the meantime, learn more on{" "}
          <Link className="underline" to="/articles">
            our blog
          </Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default Thanks
