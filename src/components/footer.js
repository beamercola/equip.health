import React from "react"
import { Link } from "gatsby"
import { Logo } from "./svg"
import { SignUpButton } from "./forms"

const Footer = () => (
  <footer>
    <div className="bg-teal-400 py-12 container text-sky-200">
      <div className="flex flex-col lg:flex-row lg:-mx-12">
        <div className="w-1/2 lg:w-2/6 container">
          <Link to="/">
            <Logo className="text-sky-200 mb-12" />
          </Link>
        </div>
        <div className="lg:w-2/6 lg:px-12">
          <ul>
            <BigLink to="/">Home</BigLink>
            <BigLink to="/why-equip">Why Equip</BigLink>
            <BigLink to="/team">Team</BigLink>
            <BigLink to="/faq">FAQ</BigLink>
            <BigLink to="/contact">Contact</BigLink>
          </ul>
          <Socials />
        </div>

        <div className="lg:w-2/6 lg:px-12">
          <ul className="mb-8">
            <li>
              <a
                className="inline-block my-1 border-transparent hover:border-sky-200 hover:underline"
                href="https://equiphealth.recruitee.com"
              >
                Open Roles
              </a>
            </li>
            <SmallLink to="/providers">Make a Referral</SmallLink>
            <SmallLink to="/privacy">Privacy Policy</SmallLink>
          </ul>
          <SignUpButton className="border-navy-300 text-navy-300" />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

const BigLink = ({ to, children }) => (
  <li className="mb-5">
    <Link
      className="pb-2 border-b-2 border-transparent hover:border-sky-200 text-3xl lg:text-4xl leading-tight"
      to={to}
    >
      {children}
    </Link>
  </li>
)

const SmallLink = ({ to, children }) => (
  <li>
    <Link
      className="inline-block my-1 border-transparent hover:border-sky-200 hover:underline"
      to={to}
    >
      {children}
    </Link>
  </li>
)

const Socials = () => (
  <div className="mt-12">
    <a
      className="pb-2 inline-block border-b-2 my-1 border-transparent hover:border-sky-200"
      href="https://instagram.com/equiphealth"
    >
      Instagram
    </a>
    &nbsp;&nbsp;/&nbsp;&nbsp;
    <a
      className="pb-2 inline-block border-b-2 my-1 border-transparent hover:border-sky-200"
      href="https://facebook.com/joinequip"
    >
      Facebook
    </a>
    &nbsp;&nbsp;/&nbsp;&nbsp;
    <a
      className="pb-2 inline-block border-b-2 my-1 border-transparent hover:border-sky-200"
      href="https://twitter.com/joinequip"
    >
      Twitter
    </a>
  </div>
)
