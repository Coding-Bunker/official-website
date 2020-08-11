/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Navbar from './Navbar'
import Footer from './Footer'
import Head from './Head'

const Layout = ({ children }) => {
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
		<React.Fragment>
			<Head />
			<Navbar siteTitle={data.site.siteMetadata.title} />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
