import React from "react"
import { StyledImage } from './Carousel.style'

const Carousel = ({ src, title }) => (
  <StyledImage
    fit="cover"
    src={src}
    title={title}
  />
);

export default Carousel