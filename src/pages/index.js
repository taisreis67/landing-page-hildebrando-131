import React from "react"
import styled from "styled-components"
import { Button } from "grommet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Content from "../components/content"
import CallToAction from "../components/cta"

const Excerpt = styled.p`
  background-color: red;
`

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <Content />
    <Excerpt>Chuchu</Excerpt>
    <Button primary label="label" />
    <CallToAction />
  </Layout>
)

export default IndexPage
