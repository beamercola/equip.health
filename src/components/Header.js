import { Link } from "gatsby"
import React, { useState } from "react"
import { Logo, Wordmark, Hamburger } from "./SVG"
import { SignUpButton } from "./Forms"
import useScrollPosition from "@react-hook/window-scroll"

const Header = () => {
  const [open, setOpen] = useState(false)
  const scrollY = useScrollPosition()
  const sticky = scrollY > 50

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-cream-300 border-b transition-all duration-300 overflow-hidden ${
          sticky || open ? "border-navy-300 py-2" : "border-transparent py-6"
        }`}
      >
        <nav className="py-1">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between bleed">
            <div className="flex lg:w-1/4 w-full justify-between items-center">
              <Link className="lg:w-1/4" to="/">
                <Wordmark
                  className={`max-w-none transition-all duration-100 ${
                    sticky ? "h-6" : "h-8"
                  }`}
                />
              </Link>
              <button
                type="button"
                className="inline-flex lg:hidden items-center justify-center p-2 rounded-md text-navy-900 focus:outline-none focus:bg-gold-300 focus:text-gold-300 transition duration-150 ease-in-out"
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
              <NavItem to="/why-equip">Why Equip</NavItem>
              <NavItem to="/team">Team</NavItem>
              <NavItem to="/articles">Blog</NavItem>
              <NavItem to="/faq">FAQ</NavItem>
            </div>

            <div
              className={`flex lg:w-1/4 lg:justify-end items-center lg:mt-0 ${
                !open && "hidden lg:flex"
              }`}
            >
              <a
                className="py-2 text-sm whitespace-no-wrap order-2 lg:order-1"
                href="https://app.equipbehavioralhealth.com/login"
              >
                Log In
              </a>
              <SignUpButton className="lg:ml-4 mr-4 lg:mr-0 order-1 border-navy-300 text-navy-300 hover:text-teal-300" />
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
      "transition-all duration-300 lg:mx-4 xl:mx-8 py-1 border-b-2 hover:border-navy-300 text-navy-300"
    if (isPartiallyCurrent) {
      return { className: `${c} border-navy-300` }
    } else {
      return { className: `${c} border-transparent` }
    }
  }

  return (
    <Link activeClassName="border-navy-300" to={to} getProps={getLinkProps}>
      {children}
    </Link>
  )
}

export default Header
