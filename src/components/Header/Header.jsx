import React, { useState } from "react"
import PropTypes from "prop-types"
import {
	Anchor,
	Collapsible,
	Button,
	Image,
	Heading
} from 'grommet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import colors from '../../styles/colors'
import { StyledBrand, StyledHeader, StyledNavbar } from './Header.style';

const Header = ({ siteTitle }, data) => {
	const [open, setOpen] = useState(false);

	return (
		<StyledHeader direction="column" gap="none">	
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
					color={colors.browm}
					a11yTitle="botão para abrir o menu de navegação do site"
					title="botão para abrir o menu de navegação do site"
					alt="botão para abrir o menu de navegação do site"
				/>
			</StyledBrand>
	
			<Collapsible open={open} {...data} >
				<StyledNavbar fill="horizontal" direction="column" gap="none">
				<Anchor
						href="#home"
						alignSelf="center"
						margin="xsmall"
						title="link para a página home"
						alt="link para a página home"
						a11yTitle="link para a página home"
					>
						Home
					</Anchor>
					<Anchor
						href="#lazer"
						alignSelf="center"
						margin="xsmall"
						title="link para a página home"
						alt="link para a página home"
						a11yTitle="link para a página home"
					>
						Lazer
					</Anchor>
					<Anchor
						href="#implantacao"
						alignSelf="center"
						margin="xsmall"
						title="link para a página home"
						alt="link para a página home"
						a11yTitle="link para a página home"
					>
						Implantação
					</Anchor>
					<Anchor
						href="#projeto"
						alignSelf="center"
						margin="xsmall"
						title="link para a página home"
						alt="link para a página home"
						a11yTitle="link para a página home"
					>
						Projeto
					</Anchor>
					<Anchor
						href="#tourVirtual"
						alignSelf="center"
						margin="xsmall"
						title="link para a página home"
						alt="link para a página home"
						a11yTitle="link para a página home"
					>
						Tour Virtual
					</Anchor>
					<Anchor
						href="#localizacao"
						alignSelf="center"
						margin="xsmall"
						title="link para a página home"
						alt="link para a página home"
						a11yTitle="link para a página home"
					>
						Localização
					</Anchor>
					<Anchor
						href="#realizacao"
						alignSelf="center"
						margin="xsmall"
						title="link para a página home"
						alt="link para a página home"
						a11yTitle="link para a página home"
					>
						Realização
					</Anchor>
				</StyledNavbar>
			</Collapsible>
		</StyledHeader>
	);
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
