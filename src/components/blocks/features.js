import React from "react"
import { Check } from "../svg"

const FeatureTable = ({ features }) => {
  const is = (feature, value) => {
    return feature.availability.includes(value) ? (
      <Check className="fill-navy mx-auto" />
    ) : (
      "Unlikely"
    )
  }

  return (
    <table className="mx-auto text-xs lg:text-base">
      <thead>
        <tr>
          <th></th>
          <th className="p-4 text-left font-heading">Standard Treatment</th>
          <th className="p-4 text-left font-heading">Equip Treatment</th>
        </tr>
      </thead>
      <tbody>
        {features.map((feature, i) => (
          <tr key={i}>
            <td className="p-4 border-b border-blue-900 text-right lg:w-72 font-bold">
              {feature.feature}
            </td>
            <td className="p-4 border-b border-blue-900 text-center">
              {is(feature, "standard")}
            </td>
            <td className="p-4 border-b border-blue-900 text-center">
              {is(feature, "equip")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default FeatureTable
