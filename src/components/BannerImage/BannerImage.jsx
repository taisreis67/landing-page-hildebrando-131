import React from "react"
import Img from "gatsby-image"
import { Box } from 'grommet'

const BannerImage = ({ image, hash }) => (
  <Box id={hash}>
    <Img
      fluid={image.fluid.childImageSharp.fluid}
      title={image.description}
      alt={image.description}
    />
  </Box>
)

export default BannerImage

