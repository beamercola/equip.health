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
      <header className="fixed inset-x-0 top-0 px-4 md:px-8 pt-4 md:pt-6 z-50">
        <div
          className={`bg-teal-300 border border-teal-400 border-opacity-40 text-white py-2 md:py-3 pl-8 pr-3 shadow-xl ${
            open ? "rounded-lg" : "rounded-full"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex md:w-1/4 w-full justify-between items-center">
              <Link className="md:w-1/4" to="/">
                <Wordmark className={`transition-all duration-100 h-6`} />
              </Link>
              <button
                type="button"
                className="md:hidden p-2 focus:outline-none hover:text-gold-200"
                onClick={() => setOpen(!open)}
              >
                <Hamburger />
              </button>
            </div>

            <PrimaryNav open={open} />

            <Actions open={open} />
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

const PrimaryNav = ({ open }) => (
  <nav
    className={`md:w-2/4 md:justify-center py-8 md:py-0 ${
      !open && "hidden md:flex"
    }`}
  >
    <ul className="flex flex-col md:flex-row">
      <NavItem to="/why-equip">Why Equip</NavItem>
      <NavItem to="/team">Team</NavItem>
      <NavItem to="/articles">Blog</NavItem>
      <NavItem to="/faq">FAQ</NavItem>
    </ul>
  </nav>
)

const Actions = ({ open }) => (
  <div
    className={`flex md:w-1/4 md:justify-end items-center md:mt-0 ${
      !open && "hidden md:flex"
    }`}
  >
    <a
      className="py-2 whitespace-no-wrap order-2 md:order-1"
      href="https://app.equipbehavioralhealth.com/login"
    >
      Log In
    </a>
    <SignUpButton className="md:ml-4 mr-4 md:mr-0 order-1 border-navy-300 text-navy-300 hover:bg-sky-100 shadow-xl" />
  </div>
)

export default Header
