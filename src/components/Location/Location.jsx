import React from "react"
import { Box } from "grommet"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { StyledLocation } from './Location.style'

const Location = (props) => {
  console.log('cxhuchu', props);
  return (
    <StyledLocation pad={{ vertical: "large"}} background={background}>
      <Box width="xlarge" margin="auto" pad="medium">
        <Map
          google={google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
      </Box>
    </StyledLocation>
  )
}

export default Location
