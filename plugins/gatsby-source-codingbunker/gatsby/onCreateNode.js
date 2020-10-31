const createMdxNode = require('gatsby-plugin-mdx/utils/create-mdx-node');

const { POST_TYPE } = require('../utils/nodeTypes');

module.exports = async ({ actions, createNodeId, node }) => {
	const { createNode } = actions;
	if (node.internal.type === POST_TYPE) {
		const content = node.content;
		const mdxNode = await createMdxNode({
			id: createNodeId(`${node.id} >>> Mdx`),
			content,
			node,
		});

		createNode(mdxNode);

		node.content = mdxNode.id;
	}
};
