import React from "react"
import { Box } from "grommet"

import { StyledInteractive } from './Interactive.style'

const Interactive = ({ background, children }) => (
  <StyledInteractive pad={{ vertical: "large"}} background={background}>
    <Box width="xlarge" margin="auto" pad="medium">
      {children}
    </Box>
  </StyledInteractive>
)

export default Interactive
