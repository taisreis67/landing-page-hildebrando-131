import styled from 'styled-components';
import { Box, Heading } from 'grommet';

import colors from '../../styles/colors'

export const StyledPlans = styled(Box)`
	background: ${colors.beige};
`;

export const StyledHeading1 = styled(Heading)`
	display: block;
	font-size: 25px;
	line-height: 25px;
	word-spacing: -5px;
`;

export const StyledHeading2 = styled(Heading)`
	display: block;
	font-weight: bold;
	font-size: 60px;
	line-height: 60px;
`;