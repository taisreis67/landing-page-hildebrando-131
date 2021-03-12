import React from "react"

import { StyledSectionTitle } from './SectionTitle.style'

const SectionTitle = ({ title }) => (
  <StyledSectionTitle level="2" size="small" fill={true} textAlign="center">{title}</StyledSectionTitle>
);

export default SectionTitle
