import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import bannerImage from "../images/residencial-hildebrando-131-osasco-parallax.jpg"
import SectionTitle from "../components/SectionTitle"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Banner src={bannerImage} title="Fachada Hildebrando 131" />
    <SectionTitle title="Lazer" />
  </Layout>
)

export default IndexPage
