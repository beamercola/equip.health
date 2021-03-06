import React from "react"

export const Select = ({ children, name, onChange, required }) => {
  return (
    <div className="inline-block relative w-full">
      <select
        className="block text-lg text-black appearance-none w-full bg-white px-5 py-3 pr-8 rounded-full shadow focus:shadow-lg focus:outline-none"
        name={name}
        onChange={onChange}
        required={required}
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

export default Select
