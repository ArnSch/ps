module.exports = {
  siteMetadata: {
    title: `Arnaud's Blog`,
    author: {
      name: `Arnaud Schenk`,
      summary: `I occasionally host essays on this site`,
    },
    interests: {
      intro: `I'm most interested in`,
      items: [
        `communities`,
        `the process of becoming`,
        `education`,
        `the culture of technology`,
        `the history of culture`,
      ],
    },
    secondaryInterests: {
      intro: `I'm also currently thinking about`, 
      items: [
        `payments`,
        `human computer interaction`,
        `the future`,
      ]
    },
    description: `Arnaud's Blog`,
    siteUrl: `https://gestalt.cafe`,
    social: {
      twitter: `_arnauds_`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gestalt`,
        short_name: `Gestalt`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
