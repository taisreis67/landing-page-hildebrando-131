import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { Grommet, grommet } from 'grommet'
import { deepMerge } from "grommet/utils"

import { GlobalStyle } from '../styles/globalStyle'
import colors from '../styles/colors'
import Header from "./Header"
import Link from './Link'
import Footer from "./Footer"

const mainTheme = deepMerge(grommet, {
	heading: {
		weight: 400
	},
	anchor: {
		fontWeight: 400
	},
	global: {
		focus: {
			border: {
				color: 'none'
			}
		}
	}
});

const links = [
  { name: 'Home', url: '#home' },
  { name: 'Lazer', url: '#recreation' },
  { name: 'Implantação', url: '#implementation' },
  { name: 'Projeto', url: '#project' },
  { name: 'Plantas', url: '#plans' },
  { name: 'Tour Virtual', url: '#tour' },
  { name: 'Localização', url: '#location' },
  { name: 'Realização', url: '#realization' },
]

const linksColors = {
  default: {
    background: colors.browm,
    color: colors.white,
  },
  hoverOrActive: {
    background: colors.darkBrowm,
    color: colors.yellow,
  }
}

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Grommet theme={mainTheme}>
      <GlobalStyle />
      <Header background={colors.browm} color={colors.gold} siteTitle={data.site.siteMetadata.title} {...data}>
        <Link linksColors={linksColors} links={links} location={location} />
      </Header>
      <main>{children}</main>
      <Footer background={colors.browm} color={colors.yellow} />
    </Grommet> 
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
