import React from "react"

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

const IndexPage = () => {
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

      <SectionTitle title="Plantas" />
      <Plans pathImage="plans" colors={plansColors} />
    </Layout>
  )
}

export default IndexPage
