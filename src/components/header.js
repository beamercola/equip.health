import { Link } from "gatsby"
import React from "react"
import { Logo } from "../components/svg"
import Wordmark from "../images/wordmark.svg"

const Header = () => {
  const getLinkProps = ({ isPartiallyCurrent }) => {
    const c = "mx-8 py-2 border-b-2 hover:border-black"
    if (isPartiallyCurrent) {
      return { className: `${c} border-black` }
    } else {
      return { className: `${c} border-transparent` }
    }
  }

  return (
    <header className="py-8">
      <div className="container flex items-center">
        <h1 className="text-xl font-bold tracking-wider w-1/4">
          <Link to="/">
            <img className="h-8 max-w-none" src={Wordmark} alt="Equip" />
          </Link>
        </h1>

        <div className="w-2/4 hidden justify-center lg:flex flex-col tracking-wider text-lg -mx-8 lg:flex-row">
          <Link
            activeClassName="border-black"
            to="/how-it-works"
            getProps={getLinkProps}
          >
            How It Works
          </Link>
          <Link
            activeClassName="border-black"
            to="/team"
            getProps={getLinkProps}
          >
            Team
          </Link>
          <Link
            activeClassName="border-black"
            to="/contact"
            getProps={getLinkProps}
          >
            Contact
          </Link>
        </div>
        <div className="flex w-1/4 justify-end">
          <Link
            className="mx-6 py-2 text-lg"
            to="/contact"
            getProps={getLinkProps}
          >
            Log In
          </Link>
          <button className="bg-white border-2 shadow-lg tracking-wide lg:tracking-wider border-black text-black px-3 pr-4 py-2 rounded-full text-sm lg:text-lg transition-all duration-500 hover:shadow flex items-center whitespace-no-wrap leading-none">
            <div className="">
              <Logo className="h-6 w-6 mr-2" />
            </div>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
