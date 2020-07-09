import React, { useState } from "react"

export const Select = ({ children, onChange }) => {
  return (
    <div className="inline-block relative w-full">
      <select
        className="block text-lg text-black appearance-none w-full bg-white px-5 py-3 pr-8 rounded-full shadow focus:shadow-lg focus:outline-none grow"
        onChange={onChange}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
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
      className={`${props.className} rounded-full bg-white px-5 py-3 placeholder-gray-600 text-black bg-white px-3 py-2 w-full outline-none grow`}
    />
  )
}

export const NotifyForm = () => {
  const types = ["Patient", "Loved One", "Referring Provider", "Other"]
  const ages = ["5 and under", "6-27", "28+"]
  const [params, setParams] = useState({
    type: types[0],
    age: ages[0],
    state: states[0].value,
  })

  const handleChange = e => {
    setParams({ ...params, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(params)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col -mx-4">
        <div className="mt-5 px-4 w-full">
          <label>I am a</label>
          <Select name="type" onChange={handleChange}>
            {types.map(t => (
              <option>{t}</option>
            ))}
          </Select>
        </div>
        <div className="my-3 px-4 w-full">
          <label htmlFor="age">Age of patient</label>
          <Select name="age" onChange={handleChange}>
            {ages.map(t => (
              <option selected={t === params.age}>{t}</option>
            ))}
          </Select>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row -mx-4">
        <div className="my-3 px-4 lg:w-1/2">
          <label htmlFor="name">Name</label>
          <Input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="my-3 px-4 lg:w-1/2">
          <label htmlFor="email">Email</label>
          <Input type="email" name="email" onChange={handleChange} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row -mx-4">
        <div className="my-3 px-4 lg:w-1/2">
          <label htmlFor="phone">Phone</label>
          <Input type="text" name="phone" onChange={handleChange} />
        </div>
        <div className="my-3 px-4 lg:w-1/2">
          <label htmlFor="state">State</label>
          <Select name="state" onChange={handleChange}>
            {states.map(state => (
              <option>{state.value}</option>
            ))}
          </Select>
        </div>
      </div>

      <div className="mt-6">
        <input
          className="bg-navy-300 text-center p-4 rounded-full w-full font-heading shadow-lg text-xl cursor-pointer grow"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  )
}

export const RecruitmentForm = () => {
  const types = ["Patient", "Loved One", "Referring Provider", "Other"]
  const positions = [
    "Therapist",
    "Dietician",
    "Peer Mentor",
    "Family Mentor",
    "MD",
    "Other",
  ]
  const [params, setParams] = useState({
    name: "",
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
    console.log(params)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-6 w-full">
        <label htmlFor="name">Name</label>
        <Input type="text" name="phone" onChange={handleChange} />
      </div>
      <div className="my-6 w-full">
        <label htmlFor="state">State</label>
        <Select name="state" onChange={handleChange}>
          {states.map(state => (
            <option key={state.value}>{state.value}</option>
          ))}
        </Select>
      </div>
      <div className="my-6 w-full">
        <label htmlFor="position">Desired Position</label>
        <Select name="position" onChange={handleChange}>
          {positions.map(position => (
            <option key={position}>{position}</option>
          ))}
        </Select>
      </div>
      <div className="my-6 w-full">
        <label htmlFor="license">License</label>
        <Input type="text" name="license" onChange={handleChange} />
      </div>
      <div className="my-6 w-full">
        <label htmlFor="message">Message</label>
        <textarea
          className="w-full p-4 rounded-lg"
          value={params.message}
          onChange={handleChange}
        />
      </div>
      <div className="mt-6">
        <input
          className="bg-teal-300 text-white text-center p-4 rounded-full w-full font-heading shadow-lg text-xl cursor-pointer grow"
          type="submit"
          value="Submit"
        />
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
