import styled from 'styled-components';
import { Anchor } from 'grommet';

export const StyledAnchor = styled(Anchor)`
  font-weight: 400;
  display: flex;
  height: 100%;
  padding: 10px;
  text-transform: uppercase;

  span {
    align-self: center;
    font-size: 17px;
  }

  &:hover, &.active {
    text-decoration: none;
    color: ${({ linksColors }) => linksColors.hoverOrActive.color}
  }
`;