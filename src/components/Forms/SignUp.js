import React from "react"
import { states, insuranceProviders, Input, Select } from "../Forms"
var _ = require("lodash")

const relationships = [
  "Patient",
  "Parent",
  "Sibling",
  "Friend",
  "Grandparent",
  "Extended Family Member",
  "Referring Provider",
  "Other",
]

const SignUp = () => {
  const ages = _.flatten([_.range(39), "40+"])

  return (
    <form
      name="Sign Up"
      method="post"
      action="/thanks?patient"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Sign Up" />

      <div className="flex flex-col lg:flex-row lg:flex-wrap -mx-4 my-6">
        <div className="px-4 my-3 w-full">
          <label htmlFor="name">Name</label>
          <Input type="text" name="name" required autoCapitalize autoComplete />
        </div>

        <div className="px-4 my-3 lg:my-4 lg:w-1/2">
          <label>Your relationship to patient</label>
          <Select name="relationship">
            {relationships.map(t => (
              <option key={t}>{t}</option>
            ))}
          </Select>
        </div>

        <div className="px-4 my-3 lg:my-4 lg:w-1/2">
          <label htmlFor="age">Patient Age</label>
          <Select name="age">
            {ages.map(t => (
              <option key={t}>{t}</option>
            ))}
          </Select>
        </div>

        <div className="px-4 my-3 lg:my-4 lg:w-1/2">
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" required />
        </div>

        <div className="px-4 my-3 lg:my-4 lg:w-1/2">
          <label htmlFor="phone">Phone</label>
          <Input type="tel" name="phone" />
        </div>

        <div className="px-4 my-3 lg:my-4 lg:w-1/2">
          <label htmlFor="state">Insurance</label>
          <Select name="insurance">
            {insuranceProviders.map(provider => (
              <option key={provider}>{provider}</option>
            ))}
          </Select>
        </div>

        <div className="px-4 my-3 lg:my-4 lg:w-1/2">
          <label htmlFor="state">Location</label>
          <Select name="state">
            {states.map(state => (
              <option key={state.value}>{state.value}</option>
            ))}
            <option key="international">Based outside USA</option>
          </Select>
        </div>

        <div className="px-4 my-3 lg:my-4 lg:w-1/2">
          <label htmlFor="findus">How did you find Equip?</label>
          <Select name="findus">
            <option></option>
            <option>Doctor</option>
            <option>Therapist</option>
            <option>Dietitian</option>
            <option>Hospital/Medical center</option>
            <option>Friend or family member</option>
            <option>Health insurer</option>
            <option>Google search</option>
            <option>Digital advertisement</option>
            <option>Facebook group</option>
            <option>Other social media post</option>
            <option>Email newsletter</option>
            <option>Press/news story</option>
            <option>Instagram post</option>
            <option>Facebook post</option>
            <option>Other</option>
          </Select>
        </div>

        <div className="px-4 my-3 w-full">
          <label htmlFor="message">Message</label>
          <textarea
            className="w-full p-4 rounded-lg shadow text-navy-300"
            name="message"
          />
        </div>
      </div>

      <div className="mt-6">
        <input
          className="bg-navy-300 hover:bg-navy-400 border border-navy-400 text-center p-4 rounded-full w-full font-heading shadow-lg text-xl cursor-pointer text-white"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  )
}

export default SignUp
