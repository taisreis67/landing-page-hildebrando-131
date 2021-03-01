/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Grommet, grommet } from 'grommet'
import { deepMerge } from "grommet/utils"

import Footer from "./footer"
import "../styles/default.css"

const mainTheme = deepMerge(grommet, {
	heading: {
		font: {
			family: 'Fredoka One'
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
        <div
          style={{
            padding: "0 1rem",
          }}
        >
          <main>{children}</main>
        </div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </Grommet>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
