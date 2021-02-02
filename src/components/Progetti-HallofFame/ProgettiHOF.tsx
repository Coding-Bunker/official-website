import React, { useState } from 'react'
import { Button, Col, Collapse, Container, Row } from 'react-bootstrap'
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
	const [open, setOpen] = useState(false)
	const [isActive, setActive] = useState(true)
	const toggleBox = () => {
		setActive(!isActive)
	}

	return (
		<div className={ProgettiHOFStyle.ProgettiHOF}>
			<div className={ProgettiHOFStyle.TitlesContainer}>
				<div className={ProgettiHOFStyle.Seperators} />
				<span className={ProgettiHOFStyle.ComponentTitle}>{title}</span>
				<div className={ProgettiHOFStyle.Seperators} />
			</div>
			<div className={ProgettiHOFStyle.SezioneRosa}>
				<Container fluid className={ProgettiHOFStyle.Project_Container}>
					<Row className="justify-content-around">
						{projects.map((project, i) => (
							<Col md="auto" className={ProgettiHOFStyle.Project_Column} key={i}>
								<div
									className={`${ProgettiHOFStyle} ${
										isActive
											? 'ProgettiHOF-module--ScrollButtonContainer1--2HRS4'
											: 'ProgettiHOF-module--ScrollButtonContainer1Active--QCK9o'
									}`}
								>
									<Button
										onClick={() => {
											setOpen(!open)
											toggleBox()
										}}
										className={ProgettiHOFStyle.ScrollButton1}
									>
										{'>'}
									</Button>
								</div>
								<div
									id={ProgettiHOFStyle.Rotate}
									className={`${ProgettiHOFStyle} ${
										isActive
											? 'ProgettiHOF-module--ScrollButtonContainer2Active--3MzJM'
											: 'ProgettiHOF-module--ScrollButtonContainer2--2HsUe'
									}`}
								>
									<Button
										onClick={() => {
											setOpen(!open)
											toggleBox()
										}}
										className={ProgettiHOFStyle.ScrollButton2}
									>
										{'>'}
									</Button>
								</div>

								<Container fluid>
									<Row>
										<Collapse
											in={!open}
											className={`${ProgettiHOFStyle} ${
												isActive
													? 'ProgettiHOF-module--Collapse1--37URP'
													: 'ProgettiHOF-module--Collapse1Active--1BZAk'
											}`}
										>
											<Col>
												<div>
													<div className={ProgettiHOFStyle.FirstPage}>
														<ProjectCard
															img={project.img}
															title={project.title}
															description={project.description}
															className={ProgettiHOFStyle.containerCard}
															className2={ProgettiHOFStyle.description}
															className3={ProgettiHOFStyle.title}
														/>
														<ProjectCard
															img={project.img}
															title={project.title}
															description={project.description}
															className={ProgettiHOFStyle.containerCard}
															className2={ProgettiHOFStyle.description}
															className3={ProgettiHOFStyle.title}
														/>
														<ProjectCard
															img={project.img}
															title={project.title}
															description={project.description}
															className={ProgettiHOFStyle.containerCard}
															className2={ProgettiHOFStyle.description}
															className3={ProgettiHOFStyle.title}
														/>
														<ProjectCard
															img={project.img}
															title={project.title}
															description={project.description}
															className={ProgettiHOFStyle.containerCard}
															className2={ProgettiHOFStyle.description}
															className3={ProgettiHOFStyle.title}
														/>
													</div>
												</div>
											</Col>
										</Collapse>
										<Collapse
											in={open}
											className={`${ProgettiHOFStyle} ${
												isActive
													? 'ProgettiHOF-module--Collapse2Active--1O1_A'
													: 'ProgettiHOF-module--Collapse2--zFNUU'
											}`}
										>
											<Col>
												<div>
													<div className={ProgettiHOFStyle.SecondPage}>
														<ProjectCard
															img={project.img}
															title={project.title}
															description={project.description}
															className={ProgettiHOFStyle.containerCard}
															className2={ProgettiHOFStyle.description}
															className3={ProgettiHOFStyle.title}
														/>
														<ProjectCard
															img={project.img}
															title={project.title}
															description={project.description}
															className={ProgettiHOFStyle.containerCard}
															className2={ProgettiHOFStyle.description}
															className3={ProgettiHOFStyle.title}
														/>
														<ProjectCard
															img={project.img}
															title={project.title}
															description={project.description}
															className={ProgettiHOFStyle.containerCard}
															className2={ProgettiHOFStyle.description}
															className3={ProgettiHOFStyle.title}
														/>
														<ProjectCard
															img={project.img}
															title={project.title}
															description={project.description}
															className={ProgettiHOFStyle.containerCard}
															className2={ProgettiHOFStyle.description}
															className3={ProgettiHOFStyle.title}
														/>
													</div>
												</div>
											</Col>
										</Collapse>
									</Row>
								</Container>
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</div>
	)
}
export default ProgettiHOF
