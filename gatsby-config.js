module.exports = {
  siteMetadata: {
    title: `Lore`,
    author: ``,
    description: `A Chicago based CBD co`,
    siteUrl: `https://dreamy-morse-e8c5f6.netlify.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/items`,
        name: `items`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/styles/fonts`,
        name: `fonts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
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
        name: `Gatsby Snipcart Starter`,
        short_name: `Gatsby Snipcart`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `thistle`,
        display: `minimal-ui`,
        icon: `content/assets/lore_thumbnail.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        //replace with own Snipcart API key
        apiKey:
          "MGY2NjEyNzItNDFmMy00NjUxLThkY2MtYjc4OGFlMTYyMGI0NjM3MjA2MTEyMjcwMjYxNjk5",
        autopop: true,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
