import React from "react"
import { Link } from "gatsby"
import { Logo } from "./svg"

const Footer = () => (
  <footer>
    <div className="bg-teal-800 py-12 container">
      <div className="flex flex-col lg:flex-row lg:-mx-12">
        <div className="w-1/2 lg:w-2/6 px-12">
          <Logo className="fill-sky mb-12" />
        </div>
        <div className="lg:w-3/6 lg:px-12 text-blue-200 text-3xl lg:text-4xl leading-tight">
          <ul>
            <li>
              <Link
                className="pb-2 inline-block my-1 border-b-2 border-transparent hover:border-blue-200"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="pb-2 inline-block my-1 border-b-2 border-transparent hover:border-blue-200"
                to="/how-it-works"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                className="pb-2 inline-block my-1 border-b-2 border-transparent hover:border-blue-200"
                to="/team"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className="pb-2 inline-block my-1 border-b-2 border-transparent hover:border-blue-200"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="pb-2 inline-block my-1 border-b-2 border-transparent hover:border-blue-200"
                to="/privacy"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                className="pb-2 inline-block my-1 border-b-2 border-transparent hover:border-blue-200"
                to="/enterprise"
              >
                Enterprise Partnerships
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-2/5"></div>
      </div>
    </div>
  </footer>
)

export default Footer
