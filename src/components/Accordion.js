import React from "react"
import { Fade } from "react-awesome-reveal"
import { CaretLeft } from "phosphor-react"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"

const classNames = require("classnames")

const AccordionTable = ({ className, items = [] }) => (
  <Accordion
    className={className}
    allowMultipleExpanded={true}
    allowZeroExpanded={true}
  >
    {items.map((item, i) => (
      <AccordionItem key={i}>
        <AccordionItemHeading
          className={classNames({
            "border-t border-navy-300": i !== 0,
          })}
        >
          <AccordionItemButton className="px-4 py-3 flex justify-between items-center border-navy-300 outline-none ring-0">
            {item.title}
            <AccordionItemState>
              {({ expanded }) => (
                <CaretLeft
                  className={classNames(
                    "ml-8 duration-300 transform flex-shrink-0",
                    {
                      "-rotate-90": expanded,
                    }
                  )}
                />
              )}
            </AccordionItemState>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="px-4 py-3">
          <Fade duration={500}>
            <div
              className="prose prose-sm"
              dangerouslySetInnerHTML={{ __html: item.bodyHtml }}
            />
          </Fade>
        </AccordionItemPanel>
      </AccordionItem>
    ))}
  </Accordion>
)

export default AccordionTable
