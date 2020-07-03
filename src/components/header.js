import { Link } from "gatsby"
import React, { useState } from "react"
import { Logo, Wordmark, Hamburger } from "../components/svg"
import useScrollPosition from "@react-hook/window-scroll"

const Header = () => {
  const [open, setOpen] = useState(false)
  const scrollY = useScrollPosition()
  const sticky = scrollY > 50

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-yellow-100 border-b transition-all duration-300 ${
          sticky || open ? "border-blue-900 py-2" : "border-transparent py-6"
        }`}
      >
        <nav className="py-1">
          <div className="container flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="flex lg:w-1/4 w-full justify-between items-center">
              <Link className="lg:w-1/4" to="/">
                <Wordmark
                  className={`max-w-none fill-navy transition-all duration-100 ${
                    sticky ? "h-6" : "h-8"
                  }`}
                />
              </Link>
              <button
                type="button"
                className="inline-flex lg:hidden items-center justify-center p-2 rounded-md text-blue-900 focus:outline-none focus:bg-yellow-600 focus:text-yellow-100 transition duration-150 ease-in-out"
                onClick={() => setOpen(!open)}
              >
                <Hamburger />
              </button>
            </div>

            <div
              className={`lg:w-2/4 lg:justify-center flex flex-col tracking-wider text-lg py-8 lg:py-0 lg:flex-row transition-all ${
                !open && "hidden lg:flex"
              }`}
            >
              <NavItem to="/how-it-works">How It Works</NavItem>
              <NavItem to="/team">Team</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </div>

            <div
              className={`flex lg:w-1/4 lg:justify-end items-center lg:mt-0 ${
                !open && "hidden lg:flex"
              }`}
            >
              <Link
                className="py-2 text-sm whitespace-no-wrap order-2 lg:order-1"
                to="/login"
              >
                Log In
              </Link>
              <SignUpButton className="lg:ml-4 mr-4 lg:mr-0 order-1" />
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`bg-black cursor-pointer inset-0 fixed z-30 opacity-25 transform duration-300 transition-all ${
          open ? "bg-black" : "bg-transparent hidden"
        }`}
        onClick={() => setOpen(false)}
      />
    </>
  )
}

const NavItem = ({ children, to }) => {
  const getLinkProps = ({ isPartiallyCurrent }) => {
    const c =
      "transition-all duration-300 lg:mx-4 xl:mx-8 py-1 border-b-2 hover:border-blue-900 text-blue-900"
    if (isPartiallyCurrent) {
      return { className: `${c} border-blue-900` }
    } else {
      return { className: `${c} border-transparent` }
    }
  }

  return (
    <Link activeClassName="border-blue-900" to={to} getProps={getLinkProps}>
      {children}
    </Link>
  )
}

const SignUpButton = ({ className }) => {
  const [hover, setHover] = useState(false)
  return (
    <button
      className={`bg-white hover:bg-blue-900 border-2 shadow-l tracking-wide lg:tracking-wider border-blue-900 text-blue-900 hover:text-white pl-2 pr-4 py-2 rounded-full text-sm lg:text-base transition-all duration-300 hover:shadow-lg flex items-center whitespace-no-wrap leading-none transform hover:scale-105 ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="inline-block">
        <Logo
          className={`h-6 w-6 mr-2 transition-all duration-300 ${
            hover ? "fill-white" : "fill-navy"
          }`}
        />
      </span>
      Sign Up
    </button>
  )
}

export default Header
