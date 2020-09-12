import React from "react"
import { Check, Times } from "../svg"

const FeatureTable = ({ features }) => {
  return (
    <div className="border border-navy-300 rounded-xl overflow-hidden">
      <div className="flex items-center border-b border-navy-300">
        <div className="w-2/5 flex-shrink-0 hidden md:block"></div>
        <div className="p-4 text-center font-heading text-sm w-1/3 md:w-1/5 flex-shrink-0">
          Standard Treatment
        </div>
        <div className="p-4 text-center font-heading text-sm w-1/3 md:w-1/5 flex-shrink-0">
          Family Based Treatment
        </div>
        <div className="p-4 text-center font-heading text-sm w-1/3 md:w-1/5 flex-shrink-0">
          Equip Treatment
        </div>
      </div>
      <div className="">
        {features.map((feature, i) => (
          <div
            className="flex flex-wrap border-b border-navy-300 last:border-b-0"
            key={i}
          >
            <div className="p-4 w-full font-bold md:w-2/5 flex-shrink-0">
              {feature.feature}
            </div>
            <div className="p-4 text-center w-1/3 md:w-1/5 flex-shrink-0">
              <FeatureValue value={feature.general} />
            </div>
            <div className="p-4 text-center w-1/3 md:w-1/5 flex-shrink-0">
              <FeatureValue value={feature.family} />
            </div>
            <div className="p-4 text-center w-1/3 md:w-1/5 flex-shrink-0">
              <FeatureValue value={feature.equip} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const FeatureValue = ({ value }) => {
  let result
  switch (value) {
    case "true":
      result = (
        <div className="inline-block mx-auto bg-teal-300 rounded-full w-6 h-6 flex items-center justify-center">
          <Check className="fill-white w-3 h-3 object-contain mt-px" />
        </div>
      )
      break
    case "false":
      result = <Times className="fill-navy mx-auto w-8 h-4" />
      break
    default:
      result = <span className="text-xs">{value}</span>
      break
  }
  return result
}

export default FeatureTable
