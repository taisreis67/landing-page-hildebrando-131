import React from "react"
import Img from "gatsby-image"
import { Box } from 'grommet'

const BannerImage = ({ image }) => (
  <Box>
    <Img
      fluid={image.fluid.childImageSharp.fluid}
      title={image.description}
      alt={image.description}
    />
  </Box>
)

export default BannerImage

