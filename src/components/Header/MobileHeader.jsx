import React, { useState } from "react"
import { Anchor, Box, Collapsible, Button, Image, Heading } from 'grommet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { StyledHeader, StyledBrand } from './MobileHeader.style';

const MobileHeader = ({ background, color, siteTitle, children }, data) => {
	const [open, setOpen] = useState(false);

	return (
		<StyledHeader direction="column" gap="none" elevation="medium" background={background}>	
			<StyledBrand
				direction="row"
				justify="between"
				gap="none"
				pad={{ horizontal: 'large' }}
				fill="horizontal"
			>
				<Anchor
					id="logo"
					href="/"
					title="link para a página home"
					alt="link para a página home"
					a11yTitle="link para a página home"
				>
					<Heading level={1}>
						<Image
							fit="contain"
							src="https://www.hildebrando131.com.br/wp-content/themes/residencial-osasco/assets/images/residencial-hildebrando-131-osasco-logo.svg"
							title={siteTitle}
							alt={siteTitle}
							a11yTitle={siteTitle}
							lazyLoad={true}
						/>
					</Heading>
				</Anchor>

				<Button
					icon={<FontAwesomeIcon icon={faBars} size="2x"/>}
					hoverIndicator
					onClick={() => setOpen(!open)}
					color={color}
					a11yTitle="botão para abrir o menu de navegação do site"
					title="botão para abrir o menu de navegação do site"
					alt="botão para abrir o menu de navegação do site"
				/>
			</StyledBrand>
	
			<Collapsible open={open} {...data} >
				<Box fill="horizontal" pad={{ top: 'medium'}} direction="column" width="100%">
					{children}
				</Box>
			</Collapsible>
		</StyledHeader>
	);
}

export default MobileHeader
