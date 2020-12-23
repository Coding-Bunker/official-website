/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Head from './Head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<>
			<Head />
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
