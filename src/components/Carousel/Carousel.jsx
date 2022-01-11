import React from "react"
import Img from "gatsby-image"
import { Box, Grid } from "grommet"

import { StyledCarousel } from './Carousel.style'

const Carousel = ({ images, background, color }) => {
  return (
    <StyledCarousel pad={{ vertical: "large"}} background={background}>
      <Box width="xxlarge" margin="auto" pad="medium">
        <Grid
          columns="300px"
          width="medium"
          align="stretch"
          gap="medium"
        >
          {images.edges.map((image, index) => (
            <Img
              key={index}
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