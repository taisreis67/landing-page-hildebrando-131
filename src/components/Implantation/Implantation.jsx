import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Grid, ResponsiveContext } from "grommet"

import { StyledImplantation } from './Implantation.style'

const Implantation = () => {
  const size = useContext(ResponsiveContext);
  const typeAreas = {
    small: [
      { name: 'image', start: [0, 0], end: [1, 0] },
      { name: 'itens', start: [0, 1], end: [1, 1] },
    ],
    medium: [
      { name: 'image', start: [0, 0], end: [0, 0] },
      { name: 'itens', start: [1, 0], end: [1, 0] },
    ]
  }
  const areas = size !== 'small' ? typeAreas.medium : typeAreas.small
  const rows = ['auto', 'auto']
  const columns = size !== 'small' ? ['2/3', '1/3'] : ['auto', 'auto']

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "residencial-hildebrando-131-osasco-implantacao.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledImplantation pad={{ vertical: "large"}}>
      <Box width="xlarge" margin="auto" pad="medium">
        <Grid
          className="grid"
          rows={rows}
          columns={columns}
          align="center"
          gap="medium"
          areas={areas}
        >
          <Box gridArea="image">
            <Img
              fluid={data.file.childImageSharp.fluid}
              alt="Imagem da implantação do empreendimento"
            />
          </Box>

          <Box gridArea="itens">
            <ul>
              <li>Piscina adulto</li>
              <li>Deck molhado</li>
              <li>Deck seco</li>
              <li>Solarium</li>
              <li>Piscina infantil</li>
              <li>Praça de estar com lareira</li>
              <li>Playground</li>
              <li>Praça dos pais</li>
              <li>Apoio churrasqueira</li>
              <li>Churrasqueira</li>
              <li>Salão de festas</li>
              <li>Salão de jogos</li>
              <li>Brinquedoteca</li>
              <li>Coworking</li>
              <li>Lavanderia</li>
              <li>Academia</li>
            </ul>
          </Box>
        </Grid>
      </Box>
    </StyledImplantation>
  )
}

export default Implantation