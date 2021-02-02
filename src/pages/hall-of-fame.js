import React from 'react'
import Layout from '../components/layout'
import Contributors from '../components/Contributors'
import Projects from '../components/Progetti-HallofFame/ProgettiHOF.tsx'
import ProjectImage from '../images/project.png'

const HallOfFame = () => {
	const projects = []
	projects.push({
		description: 'TEST',
		title: 'TEST',
		img: ProjectImage,
	})
	return (
		<Layout>
			<Projects title="I nostri progetti" projects={projects} />
			<Contributors />
		</Layout>
	)
}

export default HallOfFame
