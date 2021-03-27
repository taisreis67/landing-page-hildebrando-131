import styled from 'styled-components';
import { Box, Header } from 'grommet';

export const StyledHeader = styled(Header)`
	z-index: 999;
	position: relative;

	div[open] {
		width: 100%;
	}

	a {
		align-self: center;
	}
`;

export const StyledBrand = styled(Box)`
	height: 70px;

	a {
		display: flex;
		flex-grow: 2;
		justify-content: center;
		height: 90px;
		margin-left: 55.5px;

		h1 {
			display: flex;

			img {
				width: 100%;
				height: auto;
			}
		}
	}
`;