const path = require('path')
const slugify = require('slugify')

const createPages = async ({ actions, graphql }) => {
	const { data, errors } = await graphql(`
		query {
			posts: allCodingBunkerPost {
				edges {
					node {
						id
						title
					}
				}
			}
		}
	`)

	//console.log(data, errors)

	if (errors) return Promise.reject(errors)

	const { posts } = data

	createBlogPosts({
		basePath: '/blog/',
		actions,
		data: posts,
	})
}

const createBlogPosts = ({ basePath, actions, data }) => {
	const { createPage } = actions
	const { edges } = data

	edges.forEach(({ node }) => {
		const pagePath = basePath + slugify(node.title)
		console.log(pagePath)
		createPage({
			path: pagePath,
			component: require.resolve('./src/templates/post.js'),
			context: {
				id: node.id,
			},
		})
	})
}

module.exports = {
	createPages,
}
