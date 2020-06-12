import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <header className="py-4">
      <div className="container flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider">
          <Link to="/">EQUIP</Link>
        </h1>
        <div className="hidden lg:flex flex-col tracking-wider text-2xl -mx-8 lg:flex-row">
          <Link className="px-8" to="/how-it-works">
            How It Works
          </Link>
          <Link className="px-8" to="/team">
            Team
          </Link>
          <Link className="px-8" to="/contact">
            Contact
          </Link>
        </div>
        <div className="">
          <button className="bg-white border-2 shadow-xl tracking-wide lg:tracking-widest border-black px-3 py-1 lg:px-4 lg:py-2 text-black rounded-lg text-sm lg:text-lg transition-all duration-500 hover:shadow-lg">
            Log In
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
