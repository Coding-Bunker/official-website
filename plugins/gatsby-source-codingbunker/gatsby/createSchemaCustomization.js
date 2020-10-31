const {
	POST_TYPE,
	CONTRIBUTOR_TYPE,
	EVENT_TYPE,
	PROJECT_TYPE,
	LOCATION_TYPE,
} = require('../utils/nodeTypes');

module.exports = ({ actions }) => {
	const { createTypes } = actions;
	createTypes(`
                type ${LOCATION_TYPE} implements Node {
                        id: ID!
                        lat: Float!
                        long: Float!
                }

                type ${POST_TYPE} implements Node {
                        id: ID!
                        title: String!
                        content: Mdx @link
                }

                type ${CONTRIBUTOR_TYPE} implements Node {
                        id: ID!
                        money: Int
                        role: String!
                        date: Date! @dateformat
                }

                type ${EVENT_TYPE} implements Node {
                        id: ID!
                        name: String!
                        description: String!
                        date: Date! @dateformat
                        location: ${LOCATION_TYPE}
                        link: String!
                }

                type ${PROJECT_TYPE} implements Node {
                        id: ID!
                        name: String!
                        description: String!
                        date: Date! @dateformat
                }
        `);
};
