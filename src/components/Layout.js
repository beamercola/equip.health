import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default ({ children, pad = true }) => (
  <>
    <Header />
    <main className={`${pad && "pt-"}`}>{children}</main>
    <Footer />
  </>
)
