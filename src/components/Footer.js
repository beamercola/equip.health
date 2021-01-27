import React from "react"
import Link from "./Link"
import { Logo } from "./SVG"
import { SignUpButton } from "./Forms"

const Footer = () => (
  <footer className="bg-teal-300 py-8 md:py-12 text-sky-100 overflow-hidden">
    <div className="bleed grid grid-cols-2 md:grid-cols-5 gap-12">
      <div className="col-span-1">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className="col-span-1 col-start-1 md:col-start-auto">
        <ul>
          <SmallLink to="/">Home</SmallLink>
          <SmallLink to="/why-equip">Why Equip</SmallLink>
          <SmallLink to="/team">Team</SmallLink>
          <SmallLink to="/faq">FAQ</SmallLink>
          <SmallLink to="/contact">Contact</SmallLink>
        </ul>
      </div>

      <div className="col-span-1">
        <ul>
          <SmallLink to="https://instagram.com/equiphealth">
            Instagram
          </SmallLink>
          <SmallLink to="https://facebook.com/joinequip">Facebook</SmallLink>
          <SmallLink to="https://twitter.com/joinequip">Twitter</SmallLink>
        </ul>
      </div>

      <div className="col-span-1">
        <ul>
          <SmallLink to="https://equiphealth.recruitee.com">
            Open Roles
          </SmallLink>
          <SmallLink to="/providers">Make a Referral</SmallLink>
          <SmallLink to="/privacy">Privacy Policy</SmallLink>
        </ul>
      </div>

      <div className="col-span-1">
        <div className="">
          <SignUpButton className="border-navy-300 text-navy-300" />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

const SmallLink = ({ to, children }) => (
  <li>
    <Link className="block py-1 hover:underline" to={to}>
      {children}
    </Link>
  </li>
)
