const {
	POST_TYPE,
	CONTRIBUTOR_TYPE,
	EVENT_TYPE,
	PROJECT_TYPE,
	LOCATION_TYPE,
	LANGUAGE_TYPE,
	SPEAKER_TYPE,
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
                        content: Mdx
                }

                type ${CONTRIBUTOR_TYPE} implements Node {
                        id: ID!
                        username: String!
                        description: String!
                        picture: String!
                        job: String!
                        city: String!
                        role: String!
                        languages: [${LANGUAGE_TYPE}]!
                        date: Date! @dateformat
                }

                type ${EVENT_TYPE} implements Node {
                        id: ID!
                        name: String!
                        description: String!
                        date: Date! @dateformat
                        hasEnded: Boolean!
                        bgImage: String
                        link: String!
                        speakers: [${SPEAKER_TYPE}]
                        location: ${LOCATION_TYPE}
                }

                type ${PROJECT_TYPE} implements Node {
                        id: ID!
                        name: String!
                        description: String!
                        date: Date! @dateformat
                }

                type ${LANGUAGE_TYPE} implements Node {
                        id: ID!
                        name: String!
                }

                type ${SPEAKER_TYPE} implements Node {
                        id: ID!
                        name: String!
                        imgUrl: String!
                }
        `);
};
