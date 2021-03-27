import React from 'react';
import { Text } from 'grommet';

import { StyledAnchor } from './Link.style';


const Link = ({ linksColors, links, location }) => {
	const hash = typeof location === undefined ? location.hash || '#home' : '#home'

	return (
		<>
			{
				links.map(({ url, name }) => (
					<StyledAnchor
						linksColors={linksColors}
						color={linksColors.default.color}
						direction="column"
						href={url}
						className={hash === url && 'active'}
						title={`link para a ${name}`}
						alt={`link para a ${name}`}
						a11yTitle={`link para a ${name}`}
					>
						<Text size="large">{name}</Text>
					</StyledAnchor>
				))
			}
		</>
	);
};
  
export default Link;