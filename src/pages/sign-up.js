import React, { useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Knack from "../components/Knack"
// import SignUp from "../components/Forms/SignUp"

const SignUpPage = () => {
  return (
    <Layout>
      <SEO title="Get Started" />
      <div className="container pt-8 pb-32">
        <div className="max-w-2xl mx-auto">
          <Knack />
        </div>
      </div>
    </Layout>
  )
}

export default SignUpPage
