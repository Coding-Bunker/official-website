const { default: axios } = require('axios');

module.exports = async (apiKey, apiEndpoint, reporter) => {
	axios.defaults.headers = {
		'X-Api-Key': apiKey,
	};
	const postsReqest = await axios.get(`${apiEndpoint}api/v1/secure/post`);
	const contributorsRequest = await axios.get(`${apiEndpoint}api/v1/secure/contributor`);
	const eventsRequest = await axios.get(`${apiEndpoint}api/v1/secure/event`);
	const projectsRequest = await axios.get(`${apiEndpoint}api/v1/secure/project`);

	return {
		posts: postsReqest.data.posts,
		contributors: contributorsRequest.data.contributors,
		events: eventsRequest.data.events,
		projects: projectsRequest.data.projects,
	};
};
