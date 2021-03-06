import React from "react"
import { getImageUrl } from "@takeshape/routing"
const classNames = require("classnames")

const styleForSize = size => {
  switch (size) {
    case "small":
      return {
        image: "mb-2",
        name: "text-xs lg:text-sm font-normal leading-tight",
        bio: "leading-tight text-xxs",
        overlay: "p-2 hidden md:block",
      }
    case "large":
      return {
        image: "mb-4",
        name: "text-sm md:text-2xl leading-none",
        bio: "text-xs",
        overlay: "p-4 hidden md:block",
        title: "text-xs",
      }
  }
}

const MemberCard = ({ className, size, member, imageOptions }) => {
  const styles = styleForSize(size)
  return (
    <div className={`member-card ${className}`}>
      <div className="relative grow">
        <img
          className={styles.image}
          alt={member.name}
          src={getImageUrl(member.photo.path, {
            ...imageOptions,
            w: 800,
            h: 1100,
            fit: "crop",
          })}
        />
        {member.bioHtml && (
          <div
            className={`bio bg-teal-300 bg-opacity-75 absolute inset-0 text-teal-100 text-xs flex flex-col justify-end opacity-0 transition-all duration-500 ${styles.overlay}`}
          >
            <h6 className="text-xs uppercase">BIO</h6>
            <div
              className={styles.bio}
              dangerouslySetInnerHTML={{ __html: member.bioHtml }}
            />
          </div>
        )}
      </div>
      <h4 className={styles.name}>{member.name}</h4>
      <p className={classNames("text-navy-200 mb-1", styles.title)}>
        {member.title}
      </p>
    </div>
  )
}

export default MemberCard
