const { POST_TYPE } = require('../utils/nodeTypes');

module.exports = ({ actions }) => {
	const { createTypes } = actions;
	createTypes(`
                type ${POST_TYPE} implements Node {
                        id: ID!
                        title: String!
                        content: Mdx @link
                }
        `);
};
