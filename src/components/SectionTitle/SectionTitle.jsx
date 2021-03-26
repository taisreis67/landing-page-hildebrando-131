import React from 'react'
import { Heading } from 'grommet'

import { StyledSectionTitle } from './SectionTitle.style'

const SectionTitle = ({ title, subtitle, background, color }) => (
  <StyledSectionTitle pad={{ vertical: '8px'}} background={background}>
    <Heading level="2" textAlign="center" fill={true} color={color} size="small">{title}</Heading>
    {subtitle && <Heading level="3" textAlign="center" fill={true} color={color} size="18px" margin={{ top: 'small'}}>{subtitle}</Heading>}
  </StyledSectionTitle>
);

export default SectionTitle
