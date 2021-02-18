require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Equip Health`,
    description: ``,
    author: `@joinequip`,
    siteUrl: `https://equip.health`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-174538341-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["AW-419623818"],
        pluginConfig: {
          exclude: ["/preview/**"],
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "349484373040040",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "TS",
        fieldName: "takeshape",
        url: `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT}/graphql`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`,
        },
        fetchOptions: {},
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
