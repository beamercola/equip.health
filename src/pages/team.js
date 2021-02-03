import React from "react"
import { graphql, Link } from "gatsby"
import { getImageUrl } from "@takeshape/routing"
import { Fade } from "react-awesome-reveal"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageHeader from "../components/PageHeader"
import { Recruit } from "../components/Forms"
import MemberCard from "../components/MemberCard"

const classNames = require("classnames")

const Team = ({
  data: {
    takeshape: {
      getTeam: { contentHtml, title, members, advisors, join, story, seo },
    },
  },
}) => (
  <Layout>
    <SEO
      title={seo.title}
      description={seo.description}
      image={seo.image && seo.image.path}
    />
    <div className="bleed">
      <PageHeader title={title} html={contentHtml}></PageHeader>

      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8 -mx-1 md:-mx-0">
        {members.map((member, i) => (
          <Fade delay={i * 50} triggerOnce={true}>
            <MemberCard className="" key={i} size="large" member={member} />
          </Fade>
        ))}
      </section>

      <Tabs selectedTabClassName="bg-teal-300 text-white">
        <TabList className="flex flex-wrap justify-center my-12">
          {advisors.map((group, i) => (
            <Tab
              className={classNames(
                "text-sm px-3 py-2 rounded-lg cursor-pointer mx-2",
                "md:mx-4 md:px-4 md:py-4",
                "focus:outline-none focus:ring-4 focus:ring-teal-200 focus:ring-offset-2"
              )}
              key={i}
            >
              {group.title}
            </Tab>
          ))}
        </TabList>

        {advisors.map((group, i) => (
          <TabPanel
            className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-8 justify-center"
            key={i}
          >
            {group.members.map((member, i) => (
              <Fade delay={i * 50} triggerOnce={true}>
                <MemberCard
                  key={i}
                  member={member}
                  size="small"
                  imageOptions={{
                    duotone: "0A375C,F4EDE4",
                  }}
                />
              </Fade>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>

    <section className="my-12 lg:my-24 bg-navy-300 text-sky-300">
      <div className="flex flex-col lg:flex-row items-stretch">
        <div className="lg:w-3/5 p-8 lg:p-24">
          <h2 className="text-5xl mb-8 leading-tight">{join.title}</h2>
          <div
            className="text-xl lg:text-2xl"
            dangerouslySetInnerHTML={{ __html: join.contentHtml }}
          />
        </div>
        <div className="lg:w-2/5 bg-teal-500 p-8 lg:py-24 lg:px-16">
          <Recruit callToAction={join.callToAction || "Submit"} />
        </div>
      </div>
    </section>

    <div className="bleed" id="our-story">
      <section className="my-12 lg:my-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <h2 className="col-start-2 col-span-2 text-5xl lg:text-6xl">
            {story.title}
          </h2>
          <div className="col-span-1">
            <div className="sticky top-32">
              <img src={story.photo && getImageUrl(story.photo.path)} />
              <div dangerouslySetInnerHTML={{ __html: story.captionHtml }} />
            </div>
          </div>
          <article
            className="col-span-2 prose prose-lg lg:pr-24"
            dangerouslySetInnerHTML={{ __html: story.contentHtml }}
          />
        </div>
      </section>
    </div>
  </Layout>
)

export default Team

export const TeamPageQuery = graphql`
  query TeamPageQuery {
    takeshape {
      getTeam {
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
