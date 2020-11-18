import React from "react"
import Link from "../Link"
import { Logo } from "../SVG"

const SignUpButton = ({ className }) => (
  <Link
    to="/sign-up"
    className={`btn-signup inline-block bg-white border shadow-l tracking-wide lg:tracking-wider pl-2 pr-4 py-2 rounded-full text-sm lg:text-base hover:shadow-lg whitespace-no-wrap leading-none grow ${className}`}
  >
    <div className="flex items-center">
      <span className="inline-block">
        <Logo className="h-6 w-6 mr-2" />
      </span>
      Sign Up
    </div>
  </Link>
)

export default SignUpButton
