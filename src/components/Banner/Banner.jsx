import React from "react"
import { Image } from 'grommet'

const Banner = ({ src, title }) => (
  <Image
    fit="cover"
    src={src}
    title={title}
  />
);

export default Banner
