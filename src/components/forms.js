import React, { useState } from "react"

export const Select = ({ children }) => {
  return (
    <div class="inline-block relative w-full">
      <select class="block text-lg text-black appearance-none w-full bg-white px-5 py-3 pr-8 rounded-full shadow-lg focus:outline-none">
        {children}
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}

export const Input = props => {
  return (
    <input
      {...props}
      className={`${props.className} rounded-full bg-white px-5 py-3 placeholder-gray-600 text-black bg-white px-3 py-2 w-full outline-none`}
    />
  )
}

export const NotifyForm = () => {
  const [params, setParams] = useState({})

  const handleChange = e => {
    setParams({ ...params, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    console.log(params)
  }

  return (
    <form>
      <div className="mt-5 -mx-2">
        <label>I am a</label>
        <Select onChange={handleChange}>
          <option>Patient</option>
          <option>Loved One</option>
          <option>Referring Provider</option>
          <option>Other</option>
        </Select>
      </div>
      <div className="my-5 -mx-2">
        <label htmlFor="name">Name</label>
        <Input type="text" name="name" onChange={handleChange} />
      </div>
      <div className="my-5 -mx-2">
        <label htmlFor="name">Email</label>
        <Input type="email" name="email" onChange={handleChange} />
      </div>
      <div className="my-5 -mx-2">
        <label htmlFor="name">Phone</label>
        <Input type="text" name="phone" onChange={handleChange} />
      </div>
      <div className="my-5 -mx-2">
        <label htmlFor="name">Age of patient</label>
        <Select onChange={handleChange}>
          <option>5 and under</option>
          <option>6-27</option>
          <option>28+</option>
        </Select>
      </div>
      <div className="my-5 -mx-2">
        <label htmlFor="name">State</label>
        <Select onChange={handleChange}>
          {states.map(state => (
            <option>{state.value}</option>
          ))}
        </Select>
      </div>
      <div className="my-8 -mx-2">
        <button
          className="bg-blue-800 text-center p-4 rounded-full w-full font-heading shadow-lg text-xl"
          handleSubmit={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export const states = [
  {
    text: "Alabama",
    value: "AL",
  },
  {
    text: "Alaska",
    value: "AK",
  },
  {
    text: "American Samoa",
    value: "AS",
  },
  {
    text: "Arizona",
    value: "AZ",
  },
  {
    text: "Arkansas",
    value: "AR",
  },
  {
    text: "California",
    value: "CA",
  },
  {
    text: "Colorado",
    value: "CO",
  },
  {
    text: "Connecticut",
    value: "CT",
  },
  {
    text: "Delaware",
    value: "DE",
  },
  {
    text: "District Of Columbia",
    value: "DC",
  },
  {
    text: "Federated States Of Micronesia",
    value: "FM",
  },
  {
    text: "Florida",
    value: "FL",
  },
  {
    text: "Georgia",
    value: "GA",
  },
  {
    text: "Guam Gu",
    value: "GU",
  },
  {
    text: "Hawaii",
    value: "HI",
  },
  {
    text: "Idaho",
    value: "ID",
  },
  {
    text: "Illinois",
    value: "IL",
  },
  {
    text: "Indiana",
    value: "IN",
  },
  {
    text: "Iowa",
    value: "IA",
  },
  {
    text: "Kansas",
    value: "KS",
  },
  {
    text: "Kentucky",
    value: "KY",
  },
  {
    text: "Louisiana",
    value: "LA",
  },
  {
    text: "Maine",
    value: "ME",
  },
  {
    text: "Marshall Islands",
    value: "MH",
  },
  {
    text: "Maryland",
    value: "MD",
  },
  {
    text: "Massachusetts",
    value: "MA",
  },
  {
    text: "Michigan",
    value: "MI",
  },
  {
    text: "Minnesota",
    value: "MN",
  },
  {
    text: "Mississippi",
    value: "MS",
  },
  {
    text: "Missouri",
    value: "MO",
  },
  {
    text: "Montana",
    value: "MT",
  },
  {
    text: "Nebraska",
    value: "NE",
  },
  {
    text: "Nevada",
    value: "NV",
  },
  {
    text: "New Hampshire",
    value: "NH",
  },
  {
    text: "New Jersey",
    value: "NJ",
  },
  {
    text: "New Mexico",
    value: "NM",
  },
  {
    text: "New York",
    value: "NY",
  },
  {
    text: "North Carolina",
    value: "NC",
  },
  {
    text: "North Dakota",
    value: "ND",
  },
  {
    text: "Northern Mariana Islands",
    value: "MP",
  },
  {
    text: "Ohio",
    value: "OH",
  },
  {
    text: "Oklahoma",
    value: "OK",
  },
  {
    text: "Oregon",
    value: "OR",
  },
  {
    text: "Palau",
    value: "PW",
  },
  {
    text: "Pennsylvania",
    value: "PA",
  },
  {
    text: "Puerto Rico",
    value: "PR",
  },
  {
    text: "Rhode Island",
    value: "RI",
  },
  {
    text: "South Carolina",
    value: "SC",
  },
  {
    text: "South Dakota",
    value: "SD",
  },
  {
    text: "Tennessee",
    value: "TN",
  },
  {
    text: "Texas",
    value: "TX",
  },
  {
    text: "Utah",
    value: "UT",
  },
  {
    text: "Vermont",
    value: "VT",
  },
  {
    text: "Virgin Islands",
    value: "VI",
  },
  {
    text: "Virginia",
    value: "VA",
  },
  {
    text: "Washington",
    value: "WA",
  },
  {
    text: "West Virginia",
    value: "WV",
  },
  {
    text: "Wisconsin",
    value: "WI",
  },
  {
    text: "Wyoming",
    value: "WY",
  },
]
