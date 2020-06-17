import { Link } from "gatsby"
import React from "react"
import { Logo, Wordmark } from "../components/svg"
import useScrollPosition from "@react-hook/window-scroll"

const Header = () => {
  const scrollY = useScrollPosition()
  const sticky = scrollY > 50

  return (
    <header
      className={`my-4 py-2 sticky top-0 bg-yellow-100 border-b ${
        sticky ? "border-blue-900" : "border-transparent"
      }`}
    >
      <nav className="container py-1 flex items-center justify-between">
        <Link className="w-1/2 lg:w-1/4" to="/">
          <Wordmark className="h-8 max-w-none fill-navy" />
        </Link>

        <div className="w-2/4 hidden justify-center lg:flex flex-col tracking-wider text-lg -mx-8 lg:flex-row">
          <NavItem to="/how-it-works">How It Works</NavItem>
          <NavItem to="/team">Team</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>
        <div className="flex w-1/2 lg:w-1/4 justify-end items-center">
          <Link className="py-2 text-sm whitespace-no-wrap" to="/login">
            Log In
          </Link>
          <SignUpButton />
        </div>
      </nav>
    </header>
  )
}

const NavItem = ({ children, to }) => {
  const getLinkProps = ({ isPartiallyCurrent }) => {
    const c =
      "lg:mx-4 xl:mx-8 py-1 border-b-2 hover:border-blue-900 text-blue-900"
    if (isPartiallyCurrent) {
      return { className: `${c} border-black` }
    } else {
      return { className: `${c} border-transparent` }
    }
  }

  return (
    <Link activeClassName="border-black" to={to} getProps={getLinkProps}>
      {children}
    </Link>
  )
}

const SignUpButton = () => (
  <button className="bg-white ml-4 border-2 shadow-l tracking-wide lg:tracking-wider border-blue-900 text-blue-900 pl-2 pr-4 py-2 rounded-full text-sm lg:text-base transition-all duration-300 hover:shadow-lg flex items-center whitespace-no-wrap leading-none">
    <span className="inline-block">
      <Logo className="h-6 w-6 mr-2 fill-navy" />
    </span>
    Sign Up
  </button>
)

export default Header
