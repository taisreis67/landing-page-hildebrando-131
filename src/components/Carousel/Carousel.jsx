import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Grid } from "grommet"

import { StyledCarousel } from './Carousel.style'

const Carousel = ({ imagePath }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "recreation" }
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
    <StyledCarousel pad={{ vertical: "large"}}>
      <Box width="xxlarge" margin="auto" pad="medium">
        <Grid
          columns="300px"
          width="medium"
          align="stretch"
          gap="medium"
        >
          {data.allFile.edges.map(image => (
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]}
            />
          ))}
        </Grid>
      </Box>
    </StyledCarousel>
  )
}

export default Carousel