const data = require('../utils/data');
const { POST_TYPE, CONTRIBUTOR_TYPE, EVENT_TYPE, PROJECT_TYPE } = require('../utils/nodeTypes');
const createNodeFromData = require('../utils/createNodeFromData');

module.exports = async (gatsbyHelpers, { apiKey, apiEndpoint }) => {
	const { actions, createNodeId, createContentDigest, reporter, parentSpan } = gatsbyHelpers;
	const { createNode } = actions;

	const helpers = {
		...gatsbyHelpers,
		createNode,
	};

	if (!apiKey) throw new Error('apiKey is missing from plugin options');

	if (!apiEndpoint) throw new Error('apiEndpoint is missing from plugin options');

	try {
		const activity = reporter.activityTimer(`loading data from API`, {
			parentSpan,
		});

		activity.start();

		const { contributors, events, posts, projects } = await data(
			pluginOptions.apiKey,
			pluginOptions.apiEndpoint,
			reporter,
		);

		contributors.forEach(contributor => createNodeFromData(contributor, CONTRIBUTOR_TYPE, helpers));
		events.forEach(event => createNodeFromData(event, EVENT_TYPE, helpers));
		posts.forEach(post => createNodeFromData(post, POST_TYPE, helpers));
		projects.forEach(project => createNodeFromData(project, PROJECT_TYPE, helpers));

		activity.end();
	} catch (e) {
		reporter.error('Failed to fetch data from endpoint', e instanceof Error ? e : void 0);
	}
};
