import React from "react"
import { getImageUrl } from "@takeshape/routing"

export default ({
  className,
  items,
  itemClassName,
  imageClassName,
  imageWrapperClassName,
  titleClassName,
  contentClassName,
}) => (
  <div className={`flex ${className}`}>
    {items.map((item, i) => (
      <FeatureItem
        className={itemClassName}
        key={i}
        title={item.title}
        content={item.content}
        image={getImageUrl(item.image)}
        imageClassName={imageClassName}
        titleClassName={titleClassName}
        contentClassName={contentClassName}
        imageWrapperClassName={imageWrapperClassName}
      />
    ))}
  </div>
)

const FeatureItem = ({
  className,
  image,
  alt,
  title,
  content,
  imageClassName,
  imageWrapperClassName,
  titleClassName,
  contentClassName,
}) => (
  <div className={className}>
    <div className={`flex-shrink-0 ${imageWrapperClassName}`}>
      <img
        className={`flex-shrink-0 ${imageClassName}`}
        src={image}
        alt={alt || ""}
      />
    </div>

    <div>
      <h4 className={titleClassName}>{title}</h4>
      <div
        className={`${contentClassName} prose`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  </div>
)
