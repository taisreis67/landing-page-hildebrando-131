import React from "react"
import { Box } from "grommet"

import { StyledImage } from './Banner.style'

const Banner = ({ src, title }) => (
  <Box>
    <StyledImage
      fit="cover"
      src={src}
      title={title}
    />
  </Box>
);

export default Banner
