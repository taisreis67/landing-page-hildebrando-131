import React from "react"
import { Box } from "grommet"

import { StyledInteractive } from './Interactive.style'

const Banner = ({ background, children }) => {
  const title = children[0]
  const interactiveElement = children[1]

  return (
    <>
      {title}

      <StyledInteractive pad={{ vertical: "large"}} background={background}>
        <Box width="xlarge" margin="auto" pad="medium">
          {interactiveElement}
        </Box>
      </StyledInteractive>
    </>
  )
}

export default Banner
