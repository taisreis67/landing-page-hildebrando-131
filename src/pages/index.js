import React from "react"
import { graphql } from 'gatsby'

import colors from '../styles/colors'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import bannerImage from "../images/residencial-hildebrando-131-osasco-parallax.jpg"
import SectionTitle from "../components/SectionTitle"
import Carousel from "../components/Carousel"
import Implantation from '../components/Implantation'
import Project from '../components/Project'
import Plans from '../components/Plans'
import Interactive from '../components/Interactive'
import Location from '../components/Interactive'
import contentPlans from "../content/plans.json"

const IndexPage = ({ data }) => {
  const projectColors = {
    background: colors.beige,
    color: colors.darkBrowm
  }

  const projectVideo = {
    url: 'https://www.youtube.com/watch?v=PsJbTTN485o',
    title: 'Vídeo do empreendimento Hildebrando 131'
  }

  const plansColors = {
    background: colors.beige,
    color: colors.browm
  }

  return (
    <Layout>
      <SEO />

      <Banner src={bannerImage} title="Fachada Hildebrando 131" />

      <SectionTitle title="Lazer" />
      <Carousel imagePath="recreation" />

      <SectionTitle title="Implantação" />
      <Implantation />

      <SectionTitle title="Projeto" />
      <Project pathImage="project" video={projectVideo} colors={projectColors} />

      <SectionTitle title={contentPlans.title} />
      <Plans images={data.plans} colors={plansColors} content={contentPlans.content} />

      <SectionTitle title="Tour Virtual" />
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
      
      <SectionTitle title="Localização" />
      <Location background={colors.beige} />
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
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
  }
`

export default IndexPage
