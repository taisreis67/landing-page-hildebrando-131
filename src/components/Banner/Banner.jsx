import React from "react"

import { StyledImage } from './Banner.style'

const Banner = ({ src, title }) => (
  <StyledImage
    fit="cover"
    src={src}
    title={title}
  />
);

export default Banner
