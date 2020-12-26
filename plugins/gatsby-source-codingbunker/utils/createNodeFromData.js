module.exports = (data, dataType, helpers) => {
	const nodeMetaData = {
		id: helpers.createNodeId(`${dataType}-${data.id}`),
		parent: null, // this is used if nodes are derived from other nodes, a little different than a foreign key relationship, more fitting for a transformer plugin that is changing the node
		children: [],
		internal: {
			type: dataType,
			content: JSON.stringify(data),
			contentDigest: helpers.createContentDigest(data),
		},
	};

	const node = { ...data, ...nodeMetaData };
	helpers.createNode(node);

	return node;
};
