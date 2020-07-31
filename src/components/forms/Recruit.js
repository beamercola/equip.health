import React, { useState } from "react"
import { states } from "../forms"
import Input from "./Input"
import Select from "./Select"

const Recruit = ({ callToAction }) => {
  const positions = [
    "Therapist",
    "Dietitian",
    "Peer Mentor",
    "Family Mentor",
    "MD",
    "Other",
  ]
  const [params, setParams] = useState({
    name: "",
    email: "",
    position: positions[0],
    state: states[0].value,
    license: "",
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
      name="Recruit"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Recruit" />
      <div className="my-6 w-full">
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" required onChange={handleChange} />
      </div>
      <div className="my-6 w-full">
        <label htmlFor="name">Email</label>
        <Input type="text" name="email" required onChange={handleChange} />
      </div>
      <div className="my-6 w-full">
        <label htmlFor="state">State</label>
        <Select name="state" required onChange={handleChange}>
          {states.map(state => (
            <option key={state.value}>{state.value}</option>
          ))}
        </Select>
      </div>
      <div className="my-6 w-full">
        <label htmlFor="position">Desired Position</label>
        <Select name="position" required onChange={handleChange}>
          {positions.map(position => (
            <option key={position}>{position}</option>
          ))}
        </Select>
      </div>
      <div className="my-6 w-full">
        <label htmlFor="license">License (if applicable)</label>
        <Input type="text" name="license" onChange={handleChange} />
      </div>
      <div className="my-6 w-full">
        <label htmlFor="message">Optional Message</label>
        <textarea
          className="w-full p-4 rounded-lg text-navy-300"
          value={params.message}
          onChange={handleChange}
          name="message"
        />
      </div>
      <div className="mt-6">
        <input
          className="bg-teal-300 text-white text-center p-4 rounded-full w-full font-heading shadow-lg text-xl cursor-pointer grow"
          type="submit"
          value={callToAction}
        />
      </div>
    </form>
  )
}

export default Recruit
