import React from "react"
import { states } from "../forms"
import Input from "./Input"
import Select from "./Select"

const positions = [
  "Therapist",
  "Dietitian",
  "Peer Mentor",
  "Family Mentor",
  "MD",
  "Other",
]

const Recruit = ({ callToAction }) => {
  return (
    <form
      name="Recruit"
      action="/thanks"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Recruit" />
      <div className="my-6 w-full">
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" required />
      </div>
      <div className="my-6 w-full">
        <label htmlFor="name">Email</label>
        <Input type="text" name="email" required />
      </div>
      <div className="my-6 w-full">
        <label htmlFor="state">State</label>
        <Select name="state" required>
          {states.map(state => (
            <option key={state.value}>{state.value}</option>
          ))}
        </Select>
      </div>
      <div className="my-6 w-full">
        <label htmlFor="position">Desired Position</label>
        <Select name="position" required>
          {positions.map(position => (
            <option key={position}>{position}</option>
          ))}
        </Select>
      </div>
      <div className="my-6 w-full">
        <label htmlFor="license">License (if applicable)</label>
        <Input type="text" name="license" />
      </div>
      <div className="my-6 w-full">
        <label htmlFor="message">Optional Message</label>
        <textarea
          className="w-full p-4 rounded-lg text-navy-300"
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
