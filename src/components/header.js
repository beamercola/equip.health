import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="py-4">
    <div className="container flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-wider">
        <Link to="/">EQUIP</Link>
      </h1>
      <div className="flex tracking-wider text-2xl">
        <Link className="px-8" to="/about">
          About
        </Link>
        <Link className="px-8" to="/team">
          Team
        </Link>
        <Link className="px-8" to="/contact">
          Contact
        </Link>
      </div>
      <div className="">
        <button className="bg-white border-2 shadow-xl tracking-widest border-black px-4 py-2 text-black rounded-lg text-lg transition-all duration-500 hover:shadow-lg">
          Log In
        </button>
      </div>
    </div>
  </header>
)

export default Header
