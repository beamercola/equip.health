import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.svg"
import Wordmark from "../images/wordmark.svg"

const Header = () => {
  return (
    <header className="py-8">
      <div className="container flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider">
          <Link to="/">
            <img className="h-8 max-w-none" src={Wordmark} alt="Equip" />
          </Link>
        </h1>

        <div className="hidden lg:flex flex-col tracking-wider text-xl -mx-8 lg:flex-row">
          <Link
            className="mx-8 py-2"
            activeClassName="border-black border-b-2"
            to="/how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="mx-8 py-2"
            activeClassName="border-black border-b-2"
            to="/team"
          >
            Team
          </Link>
          <Link
            className="mx-8 py-2"
            activeClassName="border-black border-b-2"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="">
          <button className="bg-white border-2 shadow-lg tracking-wide lg:tracking-wider border-black text-black px-3 pr-4 py-2 rounded-full text-sm lg:text-lg transition-all duration-500 hover:shadow flex items-center whitespace-no-wrap leading-none">
            <div className="">
              <img className="h-6 w-6 mr-2" src={Logo} />
            </div>
            Log In
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
