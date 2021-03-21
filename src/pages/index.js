import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import bannerImage from "../images/residencial-hildebrando-131-osasco-parallax.jpg"
import SectionTitle from "../components/SectionTitle"
import Carousel from "../components/Carousel"
// import Implantation from '../components/Implantation'

const IndexPage = () => (
  <Layout>
    <SEO />
    <Banner src={bannerImage} title="Fachada Hildebrando 131" />
    <SectionTitle title="Lazer" />
    <Carousel imagePath="recreation" />
    <SectionTitle title="Implantação" />
    {/* <Implantation imageName="residencial-hildebrando-131-osasco-implantacao.png" title="Imagem da implantação do empreendimento" /> */}
  </Layout>
)

export default IndexPage
