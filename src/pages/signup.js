import React from "react"
import Layout from "../components/layout"
import PageHeader from "../components/page_header"
import SEO from "../components/seo"
import { GetCareForm } from "../components/forms"

const SignUpPage = () => {
  return (
    <Layout>
      <SEO title="Get Started" />
      <div className="container py-16">
        <div className="max-w-lg mx-auto border-navy-300 rounded-xl borde p-8 bg-white bg-opacity-25 text-navy-300">
          <h2 className="text-2xl mb-4">Sign Up</h2>
          <GetCareForm />
        </div>
      </div>
    </Layout>
  )
}

export default SignUpPage
