exports.onPreInit = () => console.log('Loaded Coding Bunker Source Plugin');

exports.sourceNodes = require('./gatsby/sourceNodes');

exports.createSchemaCustomization = require('./gatsby/createSchemaCustomization');

exports.onCreateNode = require('./gatsby/onCreateNode');
