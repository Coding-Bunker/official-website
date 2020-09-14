import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import mdxComponents from '../mdx'
import Layout from '../layout'

const BlogLayout = ({ children, pageContext: { frontmatter } }) => (
	<Layout>
		<MDXProvider components={mdxComponents}>{children}</MDXProvider>
	</Layout>
)

export default BlogLayout
