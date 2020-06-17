import React from "react"
import { Link } from "gatsby"
import { Logo } from "./svg"

const Footer = () => (
  <footer>
    <div className="bg-teal-800 py-12">
      <div className="container flex -mx-12">
        <div className="w-2/6 px-12">
          <Logo className="fill-sky" />
        </div>
        <div className="w-2/6 px-12 text-blue-200 text-xl">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/how-it-works">How It Works</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/enterprise">Enterprise Partnerships</Link>
            </li>
          </ul>
        </div>
        <div className="w-2/5"></div>
      </div>
    </div>
  </footer>
)

export default Footer
