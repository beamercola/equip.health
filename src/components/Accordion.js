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
        <AccordionItemHeading>
          <AccordionItemButton className="px-4 py-3 flex justify-between items-center border-navy-300 outline-none ring-0">
            {item.title}
            <AccordionItemState>
              {({ expanded }) => (
                <CaretLeft
                  className={classNames("duration-300 transform", {
                    "-rotate-90": expanded,
                  })}
                />
              )}
            </AccordionItemState>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="px-4 py-3 border-b border-navy-300">
          <Fade>
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
