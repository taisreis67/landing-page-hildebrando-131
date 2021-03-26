import React, { useContext } from "react"
import { Box, Text, ResponsiveContext } from "grommet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { StyledFooter, StyledAnchor } from './Footer.style'

const Footer = ({ background, color }) => {
  const size = useContext(ResponsiveContext);

  return (
    <StyledFooter background={background}>
      <Box width="medium" margin="auto">
        <StyledAnchor
          href="https://api.whatsapp.com/send?phone=5511967147840"
          target="blank"
          color={color}
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
          />

          <Text
            textAlign="left"
            alignSelf="center"
            margin={{ left: 'small'}}
            color="#fff"
            size={size !== 'small' ? 'medium' : 'small'}>
              Entre em contato para saber mais
            </Text>
        </StyledAnchor>
      </Box>
    </StyledFooter>
  )
}

export default Footer;