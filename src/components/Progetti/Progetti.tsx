import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import progettiStyle from './Progetti.module.scss'
import ProjectCard from '../ProjectCard/ProjectCard.js'

interface Card {
	img: string
	title: string
	description: string
}

interface Props {
	title: string
	projects: Array<Card>
	link: string
}

const Progetti: React.FC<Props> = ({ link, projects, title }) => (
	<div className={progettiStyle.main_container}>
		<Container className={progettiStyle.Container_titolo}>
			<span className={progettiStyle.titolo_progetti}>{title}</span>
		</Container>

		<Container fluid>
			<Row className="justify-content-around">
				{projects.map((project, i) => (
					<Col md="auto" key={i}>
						<ProjectCard
							img={project.img}
							title={project.title}
							description={project.description}
						/>
					</Col>
				))}
			</Row>
		</Container>
		<div className={progettiStyle.altri_progetti}>
			<a href={link} className={progettiStyle.scopri_progetti}>
				Scopri tutti i progetti
			</a>
		</div>
	</div>
)
export default Progetti
