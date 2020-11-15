import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ContributorCard from '../components/ContributorCard/ContributorCard'

const IndexPage = ({ data }) => {
	return (
		<ContributorCard user="Admin" profilePic={require("../images/ludovico.png")} name="Ludovico Besana" description="Ciao a tutti belli e brutti" job="Back End Developer" date="da Gennaio 2018" role="Admin" place="Italia, Terra" icons={["js", "html"]}/>
	)
}


export default IndexPage
