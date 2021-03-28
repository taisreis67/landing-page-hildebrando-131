module.exports = {
  siteMetadata: {
    title: `Hildebrando 131`,
    description: `Empreendimneto Hildebrando 131, apartamentos para compra na avenida Hildebrando de Lima, Osasco - SP`,
    keywords: `hildebrando de lima, apartamento, osasco, são paulo, imóveis, compra, investimeto em imóveis, minha casa minha vida, casa verde amarela, apartementos em osasco, direções imóveis`,
    author: `@taisreis67`,
    siteUrl: `https://www.hildebrando131.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
