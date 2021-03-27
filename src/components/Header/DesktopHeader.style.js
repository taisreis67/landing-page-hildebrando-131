import styled from 'styled-components';
import { Header } from 'grommet';

export const StyledHeader = styled(Header)`
	position: fixed;
	width: 100%;
	z-index: 999;

	h1 {
		display: flex;

		#logo {
			width: 100%;
			height: auto;
		}
	}
`;