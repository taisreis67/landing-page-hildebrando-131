import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Grid, Heading, Paragraph } from "grommet"

import { StyledPlans } from './Plans.style'

const Plans = ({ pathImage, colors }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "plans" }
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
    <StyledPlans pad={{ vertical: "large"}}>
      <Box width="xlarge" margin="auto" pad="medium">
        <Grid
          columns="400px"
          width="medium"
          align="stretch"
          gap="medium"
        >
          <Box gridArea="building" justify="center">
            <Heading level="3">Finais 1 e 2</Heading>
            <Heading level="4">37,03M²</Heading>

            <Img
              fluid={data.allFile.edges[1].node.childImageSharp.fluid}
              alt="Imagem do prédio do empreendimento"
            />

            <Paragraph margin="none">
              Ilustração artística da planta do apartamento final 1 e 2 - 37,03m² privativos. 
              Todos os móveis, objetos, pisos, rodapés, molduras, 
              sancas e alguns pontos de iluminação estão dentro dos parâmetros comerciais 
              e servem somente como sugestões de decoração, não integrando o imóvel comercializado. 
              Todos os detalhamentos de equipamentos e acabamentos que farão parte deste empreendimento 
              constam no memorial descritivo. Visite o stand de vendas e conheça mais plantas do empreendimento. 
              As medidas internas dos ambientes não estão contemplando os revestimentos.
            </Paragraph>
          </Box>

          <Box gridArea="building" justify="center">
            <Heading level="3">Finais 1 e 2</Heading>
            <Heading level="4">37,03M²</Heading>

            <Img
              fluid={data.allFile.edges[1].node.childImageSharp.fluid}
              alt="Imagem do prédio do empreendimento"
            />

            <Paragraph margin="none">
              Ilustração artística da planta do apartamento final 1 e 2 - 37,03m² privativos. 
              Todos os móveis, objetos, pisos, rodapés, molduras, 
              sancas e alguns pontos de iluminação estão dentro dos parâmetros comerciais 
              e servem somente como sugestões de decoração, não integrando o imóvel comercializado. 
              Todos os detalhamentos de equipamentos e acabamentos que farão parte deste empreendimento 
              constam no memorial descritivo. Visite o stand de vendas e conheça mais plantas do empreendimento. 
              As medidas internas dos ambientes não estão contemplando os revestimentos.
            </Paragraph>
          </Box>
        </Grid>
      </Box>
    </StyledPlans>
  )
}

export default Plans