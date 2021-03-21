import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import bannerImage from "../images/residencial-hildebrando-131-osasco-parallax.jpg"
import SectionTitle from "../components/SectionTitle"
import Carousel from "../components/Carousel"

const IndexPage = () => {
  const recerationImages = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "recreation" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
    <SEO />
      <Banner src={bannerImage} title="Fachada Hildebrando 131" />
      <SectionTitle title="Lazer" />
      <Carousel images={recerationImages} />
    </Layout>
  )

}

export default IndexPage
