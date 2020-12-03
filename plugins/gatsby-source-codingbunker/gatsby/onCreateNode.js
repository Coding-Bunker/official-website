const createMdxNode = require('gatsby-plugin-mdx/utils/create-mdx-node');

const { POST_TYPE } = require('../utils/nodeTypes');

module.exports = async ({ createNodeId, node }) => {
	if (node.internal.type === POST_TYPE) {
		const { content } = node;
		const mdxNode = await createMdxNode({
			id: createNodeId(`${node.id} >>> Mdx`),
			content,
			node,
		});

		// eslint-disable-next-line no-param-reassign
		node.content = mdxNode;
	}
};
