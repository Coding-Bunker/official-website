const data = require('../utils/data');
const { POST_TYPE, CONTRIBUTOR_TYPE, EVENT_TYPE, PROJECT_TYPE } = require('../utils/nodeTypes');
const createNodeFromData = require('../utils/createNodeFromData');

module.exports = async (gatsbyHelpers, { apiKey, apiEndpoint }) => {
	const { actions, reporter, parentSpan } = gatsbyHelpers;
	const { createNode } = actions;

	const helpers = {
		...gatsbyHelpers,
		createNode,
	};

	if (!apiKey) reporter.panic('apiKey is missing from plugin options');
	if (!apiEndpoint) reporter.panic('apiEndpoint is missing from plugin options');

	const activity = reporter.activityTimer(`loading data from Coding Bunker's API`, {
		parentSpan,
	});

	try {
		activity.start();

		const { contributors, events, posts, projects } = await data(apiKey, apiEndpoint, reporter);

		contributors.forEach(contributor => createNodeFromData(contributor, CONTRIBUTOR_TYPE, helpers));
		events.forEach(event => createNodeFromData(event, EVENT_TYPE, helpers));
		posts.forEach(post => createNodeFromData(post, POST_TYPE, helpers));
		projects.forEach(project => createNodeFromData(project, PROJECT_TYPE, helpers));

		activity.end();
	} catch (e) {
		activity.panic(e.message);
		reporter.error('Failed to fetch data from endpoint', e instanceof Error ? e : undefined);
	}
};
