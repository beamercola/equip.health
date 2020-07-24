import React from "react"
import { Check, Times } from "../svg"

const FeatureTable = ({ features }) => {
  return (
    <section className="container py-16 lg:mx-24 text-xs lg:text-base">
      <div className="border border-navy-300 rounded-xl">
        <div className="flex items-center border-b border-navy-300">
          <div className="w-2/5 flex-shrink-0"></div>
          <div className="p-4 text-center font-heading text-sm w-1/5 flex-shrink-0">
            General Treatment
          </div>
          <div className="p-4 text-center font-heading text-sm w-1/5 flex-shrink-0">
            Family Based Treatment
          </div>
          <div className="p-4 text-center font-heading text-sm w-1/5 flex-shrink-0">
            Equip Treatment
          </div>
        </div>
        <div className="">
          {features.map((feature, i) => (
            <div
              className="flex border-b border-navy-300 last:border-b-0"
              key={i}
            >
              <div className="p-4 text-righ font-bold w-2/5 flex-shrink-0">
                {feature.feature}
              </div>
              <div className="p-4 text-center w-1/5 flex-shrink-0">
                <FeatureValue value={feature.general} />
              </div>
              <div className="p-4 text-center w-1/5 flex-shrink-0">
                <FeatureValue value={feature.family} />
              </div>
              <div className="p-4 text-center w-1/5 flex-shrink-0">
                <FeatureValue value={feature.equip} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureValue = ({ value }) => {
  let result
  switch (value) {
    case "true":
      result = <Check className="fill-navy mx-auto w-8 h-4" />
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
