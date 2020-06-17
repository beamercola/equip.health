import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
      <div className="px-16">
        <div className="pt-16 pb-24">
          <h1 className="text-7xl tracking-wider">{title}</h1>
          <div
            className="text-2xl"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>

        <section className="flex flex-wrap -mx-4 lg:-mx-8">
          {members.map((member, index) => (
            <div className="w-1/2 lg:w-1/4 px-4 lg:px-8 mb-8" key={index}>
              <img
                className="mb-4"
                alt={member.name}
                src={`https://source.unsplash.com/800x950?avatar&sig=${index}`}
              />
              <h4 className="text-2xl leading-none">{member.name}</h4>
              <p className="opacity-25">{member.title}</p>
            </div>
          ))}
        </section>

        <section className="my-12 lg:my-24 flex flex-wrap -mx-8">
          {advisors.map((group, i) => (
            <div className="w-full lg:w-1/2 px-8 mb-4 lg:mb-12">
              <h3 className="text-xl mb-4">{group.title}</h3>
              <div className="flex flex-wrap -mx-2 lg:-mx-4">
                {group.members.map((member, index) => (
                  <div className="px-2 lg:px-4 w-1/4">
                    <img
                      className="mb-2"
                      src={`https://source.unsplash.com/800x950?avatar&sig=${
                        (index + 1) * (i + 1)
                      }`}
                      alt={member.name}
                    />
                    <h4 className="text-xs lg:text-sm font-normal leading-tight">
                      {member.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <section className="my-12 lg:my-24 bg-blue-800 text-blue-200">
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

export const TeamPageQuery = graphql`
  query TeamPageQuery {
    takeshape {
      team {
        advisors {
          title
          members {
            title
            name
            photo {
              path
            }
          }
        }
        members {
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