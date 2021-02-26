import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import ProgettiHOFStyle from './ProgettiHOF.module.scss'
import ProjectCard from '../ProjectCard/ProjectCard.js'

interface Card {
	img: string
	title: string
	description: string
}

interface Props {
	title: string
	projects: Array<Card>
}

const ProgettiHOF: React.FC<Props> = ({ title, projects }) => {
	return (
		<div className={ProgettiHOFStyle.ProgettiHOF}>
			<div className={ProgettiHOFStyle.TitlesContainer}>
				<div className={ProgettiHOFStyle.Seperators} />
				<span className={ProgettiHOFStyle.ComponentTitle}>{title}</span>
				<div className={ProgettiHOFStyle.Seperators} />
			</div>
			<div className={ProgettiHOFStyle.SezioneRosa}>
				<Container fluid className={ProgettiHOFStyle.Project_Container}>
					<Row>
						<Col>
							<Carousel
								showArrows="true"
								controls="true"
								justify-self="end"
								align-self="center"
								control-prev-icon-color="invert(100%)"
								control-next-icon-color="invert(100%)"
							>
								<Carousel.Item>
									<div>
										{projects.map((project, i) => (
											<ProjectCard
												key={i}
												img={project.img}
												title={project.title}
												description={project.description}
												className={ProgettiHOFStyle.containerCard}
												className2={ProgettiHOFStyle.description}
												className3={ProgettiHOFStyle.title}
											/>
										))}
									</div>
								</Carousel.Item>
								<Carousel.Item>
									<div>
										{projects.map((project, i) => (
											<ProjectCard
												key={i}
												img={project.img}
												title={project.title}
												description={project.description}
												className={ProgettiHOFStyle.containerCard}
												className2={ProgettiHOFStyle.description}
												className3={ProgettiHOFStyle.title}
											/>
										))}
									</div>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}
export default ProgettiHOF
