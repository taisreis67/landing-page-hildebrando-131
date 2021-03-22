import styled from 'styled-components';
import { Box } from 'grommet';

import colors from '../../styles/colors'

export const StyledProject = styled(Box)`
	background: ${colors.darkBrowm};

	ul {
		list-style: none;
		font-weight: bold;
		font-size: 16px;
	}
`;