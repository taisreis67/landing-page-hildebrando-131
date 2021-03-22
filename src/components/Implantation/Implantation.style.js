import styled from 'styled-components';
import { Box } from 'grommet';

import colors from '../../styles/colors'

export const StyledImplantation = styled(Box)`
	background: ${colors.beige};

	ul {
		list-style: none;
		font-weight: bold;
		font-size: 16px;
	}
`;