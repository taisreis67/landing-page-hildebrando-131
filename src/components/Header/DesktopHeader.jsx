import React from "react"
import { Anchor, Image, Heading, Box } from 'grommet';

import { StyledHeader } from './DesktopHeader.style';

const DesktopHeader = ({ background, color, siteTitle, data, children }) => {
	return (
		<StyledHeader direction="column" elevation="small">
			<Box
				direction="row"
				justify="between"
				fill={true}
				pad={{
					horizontal: 'xlarge'
				}}
				background={background}
			>
				<Box flex={false} width="13%">
					<Anchor href="/">
						<Heading level={1}>
							<Image
								id="logo"
								fit="contain"
								src="https://www.hildebrando131.com.br/wp-content/themes/residencial-osasco/assets/images/residencial-hildebrando-131-osasco-logo.svg"
								title="logo da escola"
								alt="logo da escola"
								a11yTitle="logo da escola"
								lazyLoad={true}
							/>
						</Heading>
					</Anchor>
				</Box>

				<Box direction="row">
					{children}
				</Box>
			</Box>
		</StyledHeader>
	);
}

export default DesktopHeader
