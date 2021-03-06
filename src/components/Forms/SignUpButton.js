import React from "react"
import Link from "../Link"
import { Logo } from "../SVG"

const SignUpButton = ({ className }) => (
  <Link
    to="/sign-up"
    className={`btn-signup inline-block bg-white border pl-2 pr-4 py-2 rounded-full text-sm lg:text-base hover:shadow-lg whitespace-no-wrap leading-none ${className}`}
  >
    <div className="flex items-center whitespace-nowrap">
      <span className="inline-block">
        <Logo className="h-6 w-6 mr-2" />
      </span>
      Get Started
    </div>
  </Link>
)

export default SignUpButton
