import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page_header"
import Recruit from "../components/forms/Recruit"

const TeamPage = ({
  data: {
    takeshape: {
      team: { contentHtml, title, members, advisors, join, story, seo },
    },
  },
}) => {
  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        image={seo.image && seo.image.path}
      />
      <div className="container">
        <PageHeader title={title} subtitle={contentHtml} />

        <section className="flex flex-wrap -mx-4 lg:-mx-8">
          {members.map(member => (
            <MemberCard
              className="w-1/2 lg:w-1/4 px-4 lg:px-8 mb-8"
              key={`team-${member._id}`}
              size="large"
              {...member}
            />
          ))}
        </section>

        <section className="my-12 lg:my-24 flex flex-wrap -mx-8">
          {advisors.map((group, i) => (
            <div
              className="w-full lg:w-1/2 px-8 mb-4 lg:mb-12"
              key={`advisor-group-${group.title}`}
            >
              <h3 className="text-xl mb-4">{group.title}</h3>
              <div className="flex flex-wrap -mx-2 lg:-mx-4">
                {group.members.map(member => (
                  <MemberCard
                    className="px-2 lg:px-4 mb-8 w-1/4"
                    key={`advisor-${member._id}`}
                    size="small"
                    imageOptions={{
                      duotone: "0A375C,F4EDE4",
                    }}
                    {...member}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <section className="my-12 lg:my-24 bg-navy-300 text-sky-300">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-3/5 p-8 lg:p-24">
            <h2 className="text-5xl mb-8 leading-tight">{join.title}</h2>
            <div
              className="text-xl lg:text-2xl"
              dangerouslySetInnerHTML={{ __html: join.contentHtml }}
            />
            <button>{join.callToAction}</button>
          </div>
          <div className="lg:w-2/5 bg-teal-500 p-8 lg:py-24 lg:px-16">
            <Recruit callToAction={join.callToAction} />
          </div>
        </div>
      </section>

      <div className="container" id="our-story">
        <section className="my-12 lg:my-24">
          <h2 className="text-5xl lg:text-7xl mb-12 lg:mb-24">{story.title}</h2>
          <div className="flex flex-col lg:flex-row lg:-mx-8">
            <div className="mb-12 lg:w-2/5 lg:px-8">
              <img src={story.photo && getImageUrl(story.photo.path)} />
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: story.captionHtml }}
              />
            </div>
            <article
              className="lg:w-3/5 lg:px-8 text-2xl lg:pr-48"
              dangerouslySetInnerHTML={{ __html: story.contentHtml }}
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default TeamPage

const MemberCard = ({
  className,
  name,
  title,
  bioHtml: bio,
  size,
  photo,
  _id,
  imageOptions,
}) => {
  let imgClassName, titleClassName
  switch (size) {
    case "small":
      imgClassName = "mb-2"
      titleClassName = "text-xs lg:text-sm font-normal leading-tight"
      break
    case "large":
      imgClassName = "mb-4"
      titleClassName = "text-2xl leading-none"
      break
  }

  console.log(bio)

  return (
    <div className={`member-card ${className}`}>
      <div className="relative grow">
        <img
          className={`${imgClassName}`}
          alt={name}
          src={
            photo
              ? getImageUrl(photo.path, {
                  ...imageOptions,
                  w: 800,
                  h: 1100,
                  fit: "crop",
                })
              : `https://source.unsplash.com/800x1100?avatar&sig=${_id}`
          }
        />
        {bio && (
          <div className="bio bg-teal-300 bg-opacity-75 absolute inset-0 p-4 text-teal-100 text-xs flex flex-col justify-end opacity-0 transition-all duration-500">
            <h6 className="text-xs uppercase">BIO</h6>
            <div dangerouslySetInnerHTML={{ __html: bio }} />
          </div>
        )}
      </div>
      <h4 className={titleClassName}>{name}</h4>
      <p
        className={`text-navy-200 mb-1 ${
          size === "small" ? "text-xs" : "text-sm"
        }`}
      >
        {title}
      </p>
    </div>
  )
}

export const TeamPageQuery = graphql`
  query TeamPageQuery {
    takeshape {
      team {
        seo {
          title
          description
          image {
            path
          }
        }
        advisors {
          title
          members {
            _id
            title
            name
            bioHtml
            photo {
              path
            }
          }
        }
        members {
          _id
          title
          name
          bioHtml
          photo {
            path
          }
        }
        contentHtml
        join {
          callToAction
          contentHtml
          title
        }
        title
        story {
          title
          contentHtml
          caption
          photo {
            path
          }
        }
      }
    }
  }
`
