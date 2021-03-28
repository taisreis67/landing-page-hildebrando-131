import React from "react"
import { Helmet } from 'gatsby-plugin-react-helmet'
import { useStaticQuery, graphql } from "gatsby"
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
  { name: 'Lazer', url: '#lazer' },
  { name: 'Implantação', url: '#implatacao' },
  { name: 'Projeto', url: '#projeto' },
  { name: 'Plantas', url: '#plans' },
  { name: 'Tour Virtual', url: '#tour' },
  { name: 'Localização', url: '#location' },
  { name: 'Realização', url: '#realizacao' },
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
          siteUrl
        }
      }
    }
  `)

  return (
    <Grommet theme={mainTheme}>
      <GlobalStyle />

      <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta name="keywords" content={data.site.siteMetadata.keywords} />
          <meta name="robots" content="index, follow" />
          <meta name="google-site-verification" content="lPPRsKAJ8o2Qe7dQq5XmgM5RlBOqQvMDIt5jk5eZX_k" />
          <title>{data.site.siteMetadata.title}</title>
          <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>

      <Header background={colors.browm} color={colors.gold} siteTitle={data.site.siteMetadata.title} {...data}>
        <Link  linksColors={linksColors} links={links} location={location} />
      </Header>

      <main>{children}</main>

      <Footer background={colors.browm} color={colors.yellow} />
    </Grommet>
  )
}

export default Layout
