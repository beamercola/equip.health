import React from "react"
import { Input, Select, states } from "./"
import NumberFormat from "react-number-format"

const ProviderForm = () => (
  <form
    className="mt-12"
    name="Providers"
    method="post"
    action="/thanks?provider"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="Providers" />

    <section className="mb-8">
      <h3 className="text-2xl mb-4">Provider Information</h3>

      <div className="flex flex-wrap -mx-6">
        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Provider Name</label>
          <Input type="text" name="Provider Name" autoCapitalize />
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Provider Type</label>
          <Select name="Provider Type" required>
            <option>Primary Care Doctor</option>
            <option>Pediatrician</option>
            <option>Dietitian</option>
            <option>Therapist</option>
            <option>Other</option>
          </Select>
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Provider Practice</label>
          <Input type="text" name="Provider Practice" autoCapitalize />
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Provider Phone</label>
          <Input type="tel" name="Provider Phone" />
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Provider Email</label>
          <Input type="email" name="Provider Email" />
        </div>
      </div>
    </section>

    <section>
      <h3 className="text-2xl mb-4">Patient Information</h3>

      <div className="flex flex-wrap -mx-6">
        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Patient's Name</label>
          <Input type="text" name="Patient Name" />
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Date Of Birth</label>
          <NumberFormat
            type="text"
            name="Patient DOB"
            customInput={Input}
            format="##/##/####"
            placeholder="MM/DD/YYYY"
            mask={["M", "M", "D", "D", "Y", "Y", "Y", "Y"]}
          />
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Sex</label>
          <Select name="Patient Gender">
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </Select>
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Insurance</label>
          <Input type="tel" name="Patient Insurance" />
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Phone Number*</label>
          <Input type="tel" name="Provider Phone*" required />
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Email*</label>
          <Input type="email" name="Provider Email" required />
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">State*</label>
          <Select name="Provider State">
            {states.map(state => (
              <option key={state.value}>{state.value}</option>
            ))}
          </Select>
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Parent/guardian name*</label>
          <Input type="text" name="Patient Parent Name" />
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Eating disorder history</label>
          <textarea
            className="w-full p-4 rounded-lg shadow text-navy-300"
            name="Patient ED History"
          />
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">Past eating disorder treatments</label>
          <textarea
            className="w-full p-4 rounded-lg shadow text-navy-300"
            name="Patient ED Treatments"
          />
        </div>

        <div className="my-3 px-6 w-full md:w-1/2">
          <label htmlFor="name">
            Is the patient/family aware of your referral to Equip?*
          </label>
          <Select name="Provider State" required>
            <option value=""></option>
            <option>Yes</option>
            <option>No</option>
          </Select>
        </div>
      </div>
    </section>

    <div className="mt-12 mb-24 lg:max-w-xl mx-auto">
      <input
        className="bg-navy-300 hover:bg-navy-400 border border-navy-400 text-center p-5 rounded-full w-full font-heading leading-none shadow-2xl text-2xl cursor-pointer text-white"
        type="submit"
        value="Submit"
      />
    </div>
  </form>
)

export default ProviderForm
