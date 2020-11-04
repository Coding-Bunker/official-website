import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

import MdxCustomComponents from './MDX'

import Head from './Head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Head />
			<Navbar />
			<MDXProvider components={MdxCustomComponents}>
				<main>{children}</main>
			</MDXProvider>
			<Footer />
		</React.Fragment>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
