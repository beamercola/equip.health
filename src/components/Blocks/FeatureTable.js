import React from "react"
import { CheckCircle, X } from "phosphor-react"
const classNames = require("classnames")

const FeatureTable = ({ features }) => (
  <div className="border border-navy-300 rounded-xl overflow-hidden bg-white max-w-3xl mx-auto shadow-xl">
    <div className="grid grid-cols-3 md:grid-cols-5">
      <Header className="md:col-start-3">Standard Treatment</Header>
      <Header>Family Based Treatment</Header>
      <Header>
        Equip
        <br /> Treatment
      </Header>
      {features.map((feature, i) => (
        <div
          className="border-t border-navy-300 col-span-full grid grid-cols-3 md:grid-cols-5 items-center"
          key={i}
        >
          <div className="p-4 pb-0 md:pb-4 col-span-full md:col-span-2 font-bold">
            {feature.feature}
          </div>
          <div className="p-4 text-center">
            <FeatureValue value={feature.general} />
          </div>
          <div className="p-4 text-center">
            <FeatureValue value={feature.family} />
          </div>
          <div className="p-4 text-center">
            <FeatureValue value={feature.equip} />
          </div>
        </div>
      ))}
    </div>
  </div>
)

const Header = ({ className, children }) => (
  <div
    className={classNames(
      className,
      "p-4 text-center font-heading text-xs uppercase"
    )}
  >
    {children}
  </div>
)

const FeatureValue = ({ value }) => {
  switch (value) {
    case "true":
      return (
        <CheckCircle className="w-8 h-8 mx-auto text-navy-400" weight="light" />
      )
    case "false":
      return <X className="text-navy-400 mx-auto w-6 h-6" />
    default:
      return <span className="text-xs">{value}</span>
  }
}

export default FeatureTable
