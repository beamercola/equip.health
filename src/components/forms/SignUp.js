import React, { useState } from "react"
import { states, insuranceProviders } from "../forms"
import Input from "./Input"
import Select from "./Select"
var _ = require("lodash")

const SignUp = () => {
  const relationships = ["Patient", "Loved One", "Referring Provider", "Other"]
  const ages = _.flatten([_.range(39), "40+"])
  const [params, setParams] = useState({
    relationship: relationships[0],
    age: ages[0],
    state: states[0].value,
    insurance: insuranceProviders[0],
    message: "",
  })

  const handleChange = e => {
    setParams({ ...params, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    e.target.submit()
  }

  return (
    <form
      name="Sign Up"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="notify" />

      <div className="my-6">
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" onChange={handleChange} required />
      </div>

      <div className="flex flex-col lg:flex-row -mx-4 my-6">
        <div className="px-4 lg:w-1/2">
          <label>Your relationship to patient</label>
          <Select
            defaultValue={params.type}
            name="relationship"
            onChange={handleChange}
          >
            {relationships.map(t => (
              <option key={t}>{t}</option>
            ))}
          </Select>
        </div>
        <div className="px-4 lg:w-1/2">
          <label htmlFor="age">Patient Age</label>
          <Select defaultValue={params.age} name="age" onChange={handleChange}>
            {ages.map(t => (
              <option key={t}>{t}</option>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row -mx-4 my-6">
        <div className="px-4 lg:w-1/2">
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" onChange={handleChange} required />
        </div>
        <div className="px-4 lg:w-1/2">
          <label htmlFor="phone">Phone</label>
          <Input type="text" name="phone" onChange={handleChange} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row -mx-4 my-6">
        <div className="px-4 lg:w-1/2">
          <label htmlFor="state">Insurance</label>
          <Select
            defaultValue={params.provider}
            name="insurance"
            onChange={handleChange}
          >
            {insuranceProviders.map(provider => (
              <option key={provider}>{provider}</option>
            ))}
          </Select>
        </div>
        <div className="px-4 lg:w-1/2">
          <label htmlFor="state">Location</label>
          <Select
            defaultValue={params.state}
            name="state"
            onChange={handleChange}
          >
            {states.map(state => (
              <option key={state.value}>{state.value}</option>
            ))}
          </Select>
        </div>
      </div>

      <div className="my-6">
        <label htmlFor="message">Message</label>
        <textarea
          className="w-full p-4 rounded-lg shadow text-navy-300"
          value={params.message}
          onChange={handleChange}
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
