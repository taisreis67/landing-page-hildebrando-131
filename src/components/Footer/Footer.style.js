import styled from 'styled-components';
import { Anchor } from 'grommet';

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  background: ${props => props.background};
`;

export const StyledAnchor = styled(Anchor)`
	display: flex;
  justify-content: center;

  &:hover {
    text-decoration: none;
  }

  span {
    display: block;
    height: auto;
    text-transform: uppercase;
  }
`;