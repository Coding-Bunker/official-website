require('dotenv').config({
	path: '.env',
})

module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Coding Bunker Website`,
				short_name: `Coding Bunker`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`,
			},
		},
		// Da vedere se e come integrare le PWA
		// `gatsby-plugin-offline`,

		{
			resolve: `gatsby-source-datocms`,
			options: {
				previewMode: false,
				disableLiveReload: false,
				apiToken: process.env.DATO_CMS_API_KEY,
			},
		},
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography.js',
			},
		},
		'gatsby-plugin-fontawesome-css',
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [],
			},
		},
		{
			resolve: 'gatsby-plugin-react-leaflet',
			options: {
				linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
			},
		},
		`gatsby-plugin-mdx`,
		{
			resolve: `gatsby-source-codingbunker`,
			options: {
				apiKey: process.env.BACKEND_API_KEY,
				apiEndpoint: 'https://coding-bunker-dev.herokuapp.com/',
			},
		},
		`gatsby-plugin-typescript`,
	],
}
