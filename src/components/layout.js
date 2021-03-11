import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Grommet, grommet } from 'grommet'
import { deepMerge } from "grommet/utils"

import { GlobalStyle } from '../styles/globalStyle'
import Header from "./Header"
import Footer from "./Footer"

const mainTheme = deepMerge(grommet, {
	heading: {
		font: {
			family: 'Open Sans'
		},
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
		},
		font: {
			family: 'Open Sans'
		}
	}
});

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Grommet theme={mainTheme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </Grommet>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
