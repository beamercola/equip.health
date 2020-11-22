import { Link } from "gatsby"
import React, { useState } from "react"
import { Wordmark, Hamburger } from "./SVG"
import { SignUpButton } from "./Forms"
import useScrollPosition from "@react-hook/window-scroll"

const Header = () => {
  const [open, setOpen] = useState(false)
  const scrollY = useScrollPosition()
  const sticky = scrollY > 100

  return (
    <>
      <header className="fixed inset-x-0 top-0 px-4 md:px-8 pt-6 z-50">
        <div
          className={`bg-teal-300 border border-teal-400 border-opacity-40 text-white py-2 md:py-3 pl-8 pr-3 shadow-2xl ${
            open ? "rounded-lg" : "rounded-full"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="flex lg:w-1/4 w-full justify-between items-center">
              <Link className="lg:w-1/4" to="/">
                <Wordmark className={`transition-all duration-100 h-6`} />
              </Link>
              <button
                type="button"
                className="inline-flex lg:hidden items-center justify-center p-2 rounded-md text-navy-900 focus:outline-none hover:text-gold-300 transition duration-150 ease-in-out"
                onClick={() => setOpen(!open)}
              >
                <Hamburger />
              </button>
            </div>

            <nav
              className={`lg:w-2/4 lg:justify-center py-8 lg:py-0 ${
                !open && "hidden lg:flex"
              }`}
            >
              <ul className="flex flex-col lg:flex-row">
                <NavItem to="/why-equip">Why Equip</NavItem>
                <NavItem to="/team">Team</NavItem>
                <NavItem to="/articles">Blog</NavItem>
                <NavItem to="/faq">FAQ</NavItem>
              </ul>
            </nav>

            <div
              className={`flex lg:w-1/4 lg:justify-end items-center lg:mt-0 ${
                !open && "hidden lg:flex"
              }`}
            >
              <a
                className="py-2 whitespace-no-wrap order-2 lg:order-1"
                href="https://app.equipbehavioralhealth.com/login"
              >
                Log In
              </a>
              <SignUpButton className="lg:ml-4 mr-4 lg:mr-0 order-1 border-navy-300 text-navy-300 hover:text-teal-300" />
            </div>
          </div>
        </div>
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

const NavItem = ({ children, to }) => (
  <li className="whitespace-nowrap flex relative">
    <Link activeClassName="active" to={to}>
      {children}
    </Link>
  </li>
)

export default Header
