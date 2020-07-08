import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page_header"

// getImageUrl(member.photo.path, {
//   w: 800,
//   h: 800,
//   fit: "crop",
// })
const TeamPage = ({
  data: {
    takeshape: {
      team: { contentHtml, title, members, advisors, join, story },
    },
  },
}) => {
  return (
    <Layout>
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
                    className="px-2 lg:px-4 mb-4 w-1/4"
                    key={`advisor-${member._id}`}
                    size="small"
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
            <form>
              <h3 className="text-white text-4xl">Speak to us</h3>
              <div className="my-8 mt-4">
                <label>Label</label>
                <input className="rounded-lg bg-white px-4 py-3" type="text" />
              </div>
              <div className="my-8">
                <label>Label</label>
                <input className="rounded-lg bg-white px-4 py-3" type="text" />
              </div>
              <div className="my-8">
                <label>Label</label>
                <input className="rounded-lg bg-white px-4 py-3" type="text" />
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="my-12 lg:my-24">
          <h2 className="text-5xl lg:text-7xl mb-12 lg:mb-24">{story.title}</h2>
          <div className="flex flex-col lg:flex-row lg:-mx-8">
            <div className="mb-12 lg:w-2/5 lg:px-8">
              <img src="https://source.unsplash.com/900x600?two+women" />
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

const MemberCard = ({ className, name, title, size, _id }) => {
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

  return (
    <div className={`grow ${className}`}>
      <img
        className={imgClassName}
        alt={name}
        src={`https://source.unsplash.com/800x950?avatar&sig=${_id}`}
      />
      <h4 className={titleClassName}>{name}</h4>
      {size === "large" && (
        <p className="text-navy-200 text-sm mb-1">{title}</p>
      )}
    </div>
  )
}

export const TeamPageQuery = graphql`
  query TeamPageQuery {
    takeshape {
      team {
        advisors {
          title
          members {
            _id
            title
            name
            photo {
              path
            }
          }
        }
        members {
          _id
          title
          name
          photo {
            path
          }
        }
        contentHtml
        join {
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
