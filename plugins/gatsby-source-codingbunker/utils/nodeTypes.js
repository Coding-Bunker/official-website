const cbPrefix = type => `CodingBunker_${type}`;

module.exports = {
	POST_TYPE: cbPrefix('Post'),
	CONTRIBUTOR_TYPE: cbPrefix('Contributor'),
	EVENT_TYPE: cbPrefix('Event'),
	PROJECT_TYPE: cbPrefix('Project'),
	LOCATION_TYPE: cbPrefix('Location'),
	LANGUAGE_TYPE: cbPrefix('Language'),
};
