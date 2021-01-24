import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
