import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="overflow-hidden">{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
