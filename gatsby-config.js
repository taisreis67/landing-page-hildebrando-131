module.exports = {
  siteMetadata: {
    title: `Hildebrando 131`,
    description: `Residencial Hildebrando 131 Lançamento | apartamentos para compra na Hildebrando de Lima, km 18, Osasco - SP perto da estação comandante Sampaio`,
    keywords: `hildebrando de lima, apartamento, osasco, são paulo, imóveis, compra, investimeto em imóveis, minha casa minha vida, casa verde amarela, apartementos em osasco, direções imóveis, hildebrando 131 osasco`,
    author: `@taisreis67`,
    siteUrl: `https://hildebrando131.com`,
    googleSiteVerification: `lPPRsKAJ8o2Qe7dQq5XmgM5RlBOqQvMDIt5jk5eZX_k`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-B2JJQJ6",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-194177271-1",
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
