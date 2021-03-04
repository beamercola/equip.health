import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="md:min-h-screen-75">{children}</main>
    <Footer />
  </>
)

export default Layout
