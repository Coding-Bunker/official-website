import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GoogleFont, TypographyStyle } from 'react-typography'

import TypograpyInstance from '../utils/typography'

const withFonts = Component => ({ ...rest }) => (
	<Component {...rest}>
		<TypographyStyle typography={TypograpyInstance} />
		<GoogleFont typography={TypograpyInstance} />
	</Component>
)

const withSeo = Component => ({ description = '', lang = 'en', meta = [], title, ...rest }) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`,
	)

	const metaDescription = description || site.siteMetadata.description

	return (
		<Component
			{...rest}
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	)
}

export default withSeo(withFonts(Helmet))
