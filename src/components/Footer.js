import React from "react"
import Link from "./Link"
import { Logo } from "./SVG"
import { SignUpButton } from "./Forms"

const Footer = () => (
  <footer className="bg-teal-300 py-8 md:py-12 text-sky-100 overflow-hidden">
    <div className="md:flex bleed md:-mx-8">
      <div className="w-1/3 md:px-8 md:w-1/5 mb-8 md:mb-0">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-wrap md:justify-center md:w-3/5 mb-8 md:mb-0">
        <div className="w-1/2 md:px-10 md:w-auto mb-8 md:mb-0">
          <ul>
            <SmallLink to="/">Home</SmallLink>
            <SmallLink to="/why-equip">Why Equip</SmallLink>
            <SmallLink to="/team">Team</SmallLink>
            <SmallLink to="/faq">FAQ</SmallLink>
            <SmallLink to="/contact">Contact</SmallLink>
          </ul>
        </div>

        <div className="w-1/2 md:px-10 md:w-auto mb-8 md:mb-0">
          <ul>
            <SmallLink to="https://instagram.com/equiphealth">
              Instagram
            </SmallLink>
            <SmallLink to="https://facebook.com/joinequip">Facebook</SmallLink>
            <SmallLink to="https://twitter.com/joinequip">Twitter</SmallLink>
          </ul>
        </div>

        <div className="md:px-10">
          <ul>
            <SmallLink to="https://equiphealth.recruitee.com">
              Open Roles
            </SmallLink>
            <SmallLink to="/providers">Make a Referral</SmallLink>
            <SmallLink to="/privacy">Privacy Policy</SmallLink>
          </ul>
        </div>
      </div>
      <div className="md:px-8 md:w-1/5">
        <div className="">
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
    <Link className="block py-1 hover:underline" to={to}>
      {children}
    </Link>
  </li>
)

const Socials = () => <div className="mt-12"></div>
