import React from "react"

import Img from "gatsby-image"
import { Box, Grid } from "grommet"

import { StyledCarousel } from './Carousel.style'

const Carousel = ({ images }) => (
  <StyledCarousel pad={{ vertical: "large"}}>
    <Box width="xxlarge" margin="auto" pad="medium">
      <Grid
        columns="300px"
        width="medium"
        align="stretch"
        gap="medium"
      >
        {images.allFile.edges.map(image => (
          <Img
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split(".")[0]}
          />
        ))}
      </Grid>
    </Box>
  </StyledCarousel>
)

export default Carousel