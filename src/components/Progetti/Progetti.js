import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import progettiStyle from './Progetti.module.scss'
import ProjectCard from '../ProjectCard/ProjectCard'

const Progetti = () => {
	return (
		<div className={progettiStyle.main_container}>
			<Container className={progettiStyle.Container_titolo}>
				<span className={progettiStyle.titolo_progetti}>Alcuni nostri progetti</span>
			</Container>

			<Container fluid>
				<Row className="justify-content-around">
					<Col md="auto">
						<ProjectCard
							img={require('../../images/project.png')}
							title="Progetto 1"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id"
						/>
					</Col>
					<Col md="auto">
						<ProjectCard
							img={require('../../images/test.png')}
							title="Progetto 1"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id"
						/>
					</Col>
					<Col md="auto">
						<ProjectCard
							img={require('../../images/project.png')}
							title="Progetto 1"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id"
						/>
					</Col>
				</Row>
			</Container>
			<div className={progettiStyle.altri_progetti}>
				<a href="#" className={progettiStyle.scopri_progetti}>
					Scopri tutti i progetti
				</a>
			</div>
		</div>
	)
}
export default Progetti
