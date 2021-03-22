import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Grid, ResponsiveContext } from "grommet"

import { StyledProject } from './Project.style'

const Project = ({ pathImage, video, colors }) => {
  const size = useContext(ResponsiveContext);
  const typeAreas = {
    small: [
      { name: 'building', start: [0, 0], end: [1, 0] },
      { name: 'facade', start: [0, 1], end: [1, 1] },
      { name: 'video', start: [0, 2], end: [1, 2] },
    ],
    medium: [
      { name: 'building', start: [0, 0], end: [0, 1] },
      { name: 'video', start: [1, 0], end: [1, 0] },
      { name: 'facade', start: [1, 1], end: [1, 1] },
    ]
  }
  const areas = size !== 'small' ? typeAreas.medium : typeAreas.small
  const rows = size !== 'small' ? ['fit', 'fit'] : ['auto', 'auto', 'auto']
  const columns = size !== 'small' ? ['1fr', '1fr'] : ['auto']

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "project" }
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
    <StyledProject pad={{ vertical: "large"}}>
      <Box width="xlarge" margin="auto" pad="medium">
        <Grid
          className="grid"
          rows={rows}
          columns={columns}
          gap="small"
          areas={areas}
        >
          <Box gridArea="building" justify="center">
            <Img
              fluid={data.allFile.edges[1].node.childImageSharp.fluid}
              alt="Imagem do prédio do empreendimento"
            />
          </Box>

          <Box gridArea="video">
            <Img
              fluid={data.allFile.edges[2].node.childImageSharp.fluid}
              alt="Imagem do prédio do empreendimento"
            />
          </Box>

          <Box gridArea="facade" justify="end">
            <Img
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              alt="Imagem do prédio do empreendimento"
            />
          </Box>
        </Grid>
      </Box>
    </StyledProject>
  )
}

export default Project