import React from "react"
import { graphql } from 'gatsby'

import colors from '../styles/colors'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerImage from '../components/BannerImage'
import SectionTitle from "../components/SectionTitle"
import Carousel from "../components/Carousel"
import Implantation from '../components/Implantation'
import Project from '../components/Project'
import Plans from '../components/Plans'
import Interactive from '../components/Interactive'
import contentPlans from "../content/plans.json"
import CentralImage from "../components/CentralImage"

const IndexPage = ({ data, location }) => {
  const plansColors = {
    background: colors.beige,
    color: colors.browm
  }

  const apresentationImage = {
    fluid: data.apresentation,
    description: 'Imagem de apresentação do empreendimento'
  }

  const locationImage = {
    fluid: data.location,
    description: 'Imagem da localização do empreendimento'
  }

  const realizationImages = {
    small: {
      fluid: data.realizationSmall,
    },
    medium: {
      fluid: data.realizationMedium,
    },
    description: 'Imagem dos logos das empresas que contribuiram na realização do empreendimento'
  }

  return (
    <Layout location={location}>
      <SEO />

      <BannerImage hash="home" image={apresentationImage} />

      <SectionTitle hash="recreation" title="lazer" background={colors.browm} color={colors.gold} />
      <Carousel images={data.recreation} background={colors.darkBrowm} color={colors.beige} />

      <SectionTitle hash="implementation" title="implantação" background={colors.browm} color={colors.gold} />
      <Implantation />

      <SectionTitle hash="project" title="projeto" background={colors.browm} color={colors.gold} />
      <Project images={data.project} background={colors.browm} />

      <SectionTitle hash="plans" title="plantas" background={colors.browm} color={colors.gold} />
      <Plans images={data.plans} colors={plansColors} content={contentPlans.content} />

      <SectionTitle hash="tour" title="tour virtual" background={colors.browm} color={colors.gold} />
      <Interactive background={colors.darkBrowm}>
        <iframe
          src="https://www.3dexplora.com.br/seutour.aspx?codigo=q5kYoNLfgYv&amp;play=0&amp;hl=0&amp;qs=1&amp;wh=1&amp;lp=0&amp;ts=1"
          allowFullScreen=""
          width="100%"
          height="500px"
          frameBorder="0"
          title="Hildebrando 131 tour virtual"
        />
      </Interactive>
      
      <SectionTitle
        hash="location"
        title="localização"
        subtitle="Av. Hildebrando de Lima, 131 - Km 18, Osasco - SP"
        background={colors.browm}
        color={colors.gold}
      />
      <BannerImage image={locationImage} />

      <SectionTitle hash="close" title="a facilidade de ter tudo ao seu lado" background={colors.browm} color={colors.gold} />
      <Carousel images={data.close} background={colors.beige} color={colors.darkBrowm} />

      <SectionTitle hash="realization" title="realização" background={colors.browm} color={colors.gold} />
      <CentralImage images={realizationImages} background={colors.white} />
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
    apresentation: file(relativePath: { eq: "residencial-hildebrando-131-osasco-parallax.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    recreation: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "recreation"}}, sort: {fields: base, order: ASC}) {
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
    project: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "project"}}, sort: {fields: base, order: ASC}) {
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
    plans: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "plans"}}, sort: {fields: base, order: ASC}) {
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
    location: file(relativePath: { eq: "residencial-hildebrando-131-osasco-panoramica.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    close: allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, relativeDirectory: {eq: "close"}}, sort: {fields: base, order: ASC}) {
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
    realizationSmall: file(relativePath: { eq: "assinaturas-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    realizationMedium: file(relativePath: { eq: "assinaturas.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
