import styled from 'styled-components';
import { Box, Header } from 'grommet';

import colors from '../../styles/colors'

export const StyledHeader = styled(Header)`
	z-index: 999;
	position: relative;
	background: ${colors.browm};
`;

export const StyledBrand = styled(Box)`
	a {
		display: flex;
		flex-grow: 2;
		justify-content: center;
		margin-left: 55.5px;

		h1 {
			display: flex;

			img {
				width: 100%;
				max-width: 440px;
				height: auto;
			}
		}
	}
`;

export const StyledNavbar = styled(Box)`
	width: 100%;

	a {
		color: ${colors.gold};

		&:focus {
			box-shadow: none;
		}
	}
`;