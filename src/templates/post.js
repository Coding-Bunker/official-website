import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import { Container } from 'react-bootstrap'

const Post = ({ data: { post } }) => {
	const { title, content } = post

	return (
		<Layout>
			<Container>
				<h1>{title}</h1>
				<MDXRenderer>{content.body}</MDXRenderer>
			</Container>
		</Layout>
	)
}

export const pageQuery = graphql`
	query($id: String!) {
		post: codingBunkerPost(id: { eq: $id }) {
			title
			content {
				body
			}
		}
	}
`

export default Post
