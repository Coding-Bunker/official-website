const { default: axios } = require('axios');

module.exports = async (apiKey, apiEndpoint, reporter) => {
	axios.defaults.headers = {
		'X-Api-Key': apiKey,
	};
	const postsReqest = await axios.get(`${apiEndpoint}/secure/post`);
	const contributorsRequest = await axios.get(`${apiEndpoint}/secure/contributor`);
	const eventsRequest = await axios.get(`${apiEndpoint}/secure/event`);
	const projectsRequest = await axios.get(`${apiEndpoint}/secure/project`);

	return {
		posts: postsReqest.data.posts,
		contributors: contributorsRequest.data.contributors,
		events: eventsRequest.data.events,
		projects: projectsRequest.data.projects,
	};
};
