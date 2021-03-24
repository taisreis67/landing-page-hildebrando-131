import React from "react"
import Img from "gatsby-image"
import { Box, Grid, Paragraph } from "grommet"

import { StyledPlans, StyledHeading1, StyledHeading2 } from './Plans.style'

const Plans = ({ images, colors, content }) => (
  <StyledPlans pad={{ vertical: "large"}}>
    <Box width="xlarge" margin="auto" pad="medium">
      <Grid
        columns="medium"
        width="medium"
        align="stretch"
        gap="medium"
      >
        {content.map((item => (
          <Box key={item.title} margin={{ vertical: 'small' }}>
            <StyledHeading1 level="3" textAlign="center" fill={true}>{item.finals}</StyledHeading1>
            <StyledHeading2 level="4" textAlign="center" fill={true}>{item.area}</StyledHeading2>

            <Box margin={{ vertical: 'medium' }}>
              <Img
                fluid={images.edges.find(image => image.node.base === item.image).node.childImageSharp.fluid}
                alt={item.title}
              />
            </Box>

            <Paragraph textAlign="center" fill={true} size="small">{item.description}</Paragraph>
          </Box>
        )))}
      </Grid>
    </Box>
  </StyledPlans>
)

export default Plans