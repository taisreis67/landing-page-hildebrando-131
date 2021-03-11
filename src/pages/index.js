import React from "react"
import styled from "styled-components"
import { Button } from "grommet"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Excerpt = styled.p`
  background-color: red;
`

const IndexPage = () => (
  <Layout>
    <SEO />
    <Excerpt>Chuchu</Excerpt>
    <Button primary label="label" />
  </Layout>
)

export default IndexPage
