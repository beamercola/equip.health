import React from "react"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/SEO"
import SignUp from "../components/Forms/SignUp"

const SignUpPage = () => {
  return (
    <Layout>
      <SEO title="Get Started" />
      <div className="container pt-8 pb-32">
        <div className="max-w-2xl mx-auto border-navy-300 rounded-xl border p-8 bg-white bg-opacity-50 text-navy-300">
          <h2 className="text-2xl mb-4">Request More Information</h2>
          <SignUp />
        </div>
      </div>
    </Layout>
  )
}

export default SignUpPage
