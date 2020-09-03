import React from "react"
import { states, insuranceProviders } from "../forms"
import Input from "./Input"
import Select from "./Select"
var _ = require("lodash")

const SignUp = () => {
  const relationships = ["Patient", "Loved One", "Referring Provider", "Other"]
  const ages = _.flatten([_.range(39), "40+"])

  return (
    <form
      name="Sign Up"
      method="post"
      action="/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Sign Up" />

      <div className="my-6">
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" required />
      </div>

      <div className="flex flex-col lg:flex-row -mx-4 my-6">
        <div className="px-4 lg:w-1/2">
          <label>Your relationship to patient</label>
          <Select name="relationship">
            {relationships.map(t => (
              <option key={t}>{t}</option>
            ))}
          </Select>
        </div>
        <div className="px-4 lg:w-1/2">
          <label htmlFor="age">Patient Age</label>
          <Select name="age">
            {ages.map(t => (
              <option key={t}>{t}</option>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row -mx-4 my-6">
        <div className="px-4 lg:w-1/2">
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" required />
        </div>
        <div className="px-4 lg:w-1/2">
          <label htmlFor="phone">Phone</label>
          <Input type="text" name="phone" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row -mx-4 my-6">
        <div className="px-4 lg:w-1/2">
          <label htmlFor="state">Insurance</label>
          <Select name="insurance">
            {insuranceProviders.map(provider => (
              <option key={provider}>{provider}</option>
            ))}
          </Select>
        </div>
        <div className="px-4 lg:w-1/2">
          <label htmlFor="state">Location</label>
          <Select name="state">
            {states.map(state => (
              <option key={state.value}>{state.value}</option>
            ))}
            <option key="international">Based outside USA</option>
          </Select>
        </div>
      </div>

      <div className="my-6">
        <label htmlFor="message">Message</label>
        <textarea
          className="w-full p-4 rounded-lg shadow text-navy-300"
          name="message"
        />
      </div>

      <div className="mt-6">
        <input
          className="bg-navy-300 border border-navy-400 text-center p-4 rounded-full w-full font-heading shadow-lg text-xl cursor-pointer grow text-white"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  )
}

export default SignUp
