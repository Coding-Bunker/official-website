import React from 'react'
import Layout from '../components/layout'
import Contributors from '../components/Contributors'
import HallOfFameSection from '../components/HallOfFameSection-HallOfFame'
import foto1 from '../images/homepage_bg.png'
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
			<HallOfFameSection
				img={foto1}
				title="Hall Of Fame"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium sit amet tortor. Integer volutpat nulla sed placerat ultrices. Duis gravida tortor ac eros consectetur, non varius metus egestas."
				contributors={25}
				progetti={15}
				utenti={869}
			/>
			<Projects title="I nostri progetti" projects={projects} />
			<Contributors />
		</Layout>
	)
}

export default HallOfFame
