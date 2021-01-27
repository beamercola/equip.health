import React, { useState } from "react"
import { Wordmark, Hamburger } from "./SVG"
import { SignUpButton } from "./Forms"
import Link from "../components/Link"

const classNames = require("classnames")

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 px-1 lg:px-8 pt-4 lg:pt-6 z-50">
        <div
          className={classNames(
            "bg-teal-300 border border-teal-400 border-opacity-40 text-white py-2 lg:py-3 pl-8 pr-3",
            open ? "rounded-lg" : "rounded-full"
          )}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="flex lg:w-1/4 w-full justify-between items-center">
              <Link className="lg:w-1/4" to="/">
                <Wordmark className="transition-all duration-100 h-5 md:h-6" />
              </Link>
              <button
                type="button"
                className="lg:hidden p-2 focus:outline-none hover:text-gold-200"
                onClick={() => setOpen(!open)}
              >
                <Hamburger />
              </button>
            </div>

            <nav
              className={classNames("lg:w-2/4 lg:justify-center py-8 lg:py-0", {
                "hidden lg:flex": !open,
              })}
            >
              <PrimaryNav open={open} />
            </nav>

            <Actions open={open} />
          </div>
        </div>
      </header>
      <div
        className={classNames(
          "bg-black cursor-pointer inset-0 fixed z-30 opacity-25",
          "transform duration-300 transition-all",
          open ? "bg-black" : "bg-transparent hidden"
        )}
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
  <ul className="flex flex-col lg:flex-row">
    <NavItem to="/why-equip">Why Equip</NavItem>
    <NavItem to="/team">Team</NavItem>
    <NavItem to="/articles">Blog</NavItem>
    <NavItem to="/faq">FAQ</NavItem>
    <NavItem to="/providers">Providers</NavItem>
  </ul>
)

const Actions = ({ open }) => (
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
    <SignUpButton className="lg:ml-4 mr-4 lg:mr-0 order-1 border-navy-300 text-navy-300 hover:bg-sky-100 shadow-xl" />
  </div>
)

export default Header
