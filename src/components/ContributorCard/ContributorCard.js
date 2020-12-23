import { Col, Row, Container } from 'react-bootstrap'
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHtml5,
	faJs,
	faPython,
	faReact,
	faAngular,
	faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import contributorCard from './ContributorCard.module.scss'

const iconMapping = {
	html: faHtml5,
	js: faJs,
	python: faPython,
	react: faReact,
	angular: faAngular,
	vue: faVuejs,
}

const ContributorCard = ({
	icons,
	user,
	description,
	profilePic,
	name,
	job,
	date,
	role,
	place,
}) => {
	let bgcolor = ''

	const iconComponents = []

	if (icons != null) {
		icons.forEach(e => {
			iconComponents.push(
				<Col>
					<FontAwesomeIcon
						icon={iconMapping[e]}
						size="2x"
						style={{ marginTop: '2rem', color: 'white' }}
					/>
				</Col>,
			)
		})
	}

	// Associamo il tipo di utente al colore corrispondente
	switch (user) {
		case 'Admin':
			bgcolor = 'rgb(157, 124, 255)'
			break
		case 'Moderator':
			bgcolor = 'rgb(224, 173, 248)'
			break
		case 'Mentor':
			bgcolor = 'rgb(250, 51, 24)'
			break
		case 'Senior Member':
			bgcolor = 'rgb(226, 129, 6)'
			break
		case 'Member':
			bgcolor = 'rgb(130, 196, 250)'
			break
		case 'Junior Member':
			bgcolor = 'rgb(122, 203, 219)'
			break
		case 'Contributor':
			bgcolor = '#33C46C'
			break
		default:
			bgcolor = 'rgb(122, 203, 219)'
	}

	const Right = styled.div`
		width: 100%;
		height: 100%;
		transition: 0.2s all;
		border-radius: 0 20px 20px 0;
		&:hover {
			color: white !important;
			background-color: ${bgcolor};
		}
	`

	return (
		<div className={contributorCard.containerCard}>
			<Row className={contributorCard.coso}>
				<Col className={contributorCard.left} lg="4" style={{ backgroundColor: bgcolor }}>
					<Container fluid>
						<div className={contributorCard.user}>{user}</div>
						<div className={contributorCard.profilePicContainer}>
							<img src={profilePic} alt="profile" className={contributorCard.profilePic} />
						</div>
					</Container>
				</Col>
				<div className={contributorCard.right}>
					<Right>
						<div className={contributorCard.name}>{name}</div>
						<Container fluid="sm">
							<div id="description" className={contributorCard.description}>
								{description}
							</div>
						</Container>
						<div className={contributorCard.other}>
							<Row>
								<Col style={{ textAlign: 'left' }}>{job}</Col>
								<Col style={{ textAlign: 'right' }}>{date}</Col>
							</Row>
							<Row>
								<Col style={{ textAlign: 'left' }}>{role}</Col>
								<Col style={{ textAlign: 'right' }}>{place}</Col>
							</Row>
							<Row>
								{icons
									? icons.map((icon, i) => (
											<Col key={i}>
												<FontAwesomeIcon
													icon={icon}
													size="2x"
													style={{ marginTop: '2rem', color: 'white' }}
												/>
											</Col>
									  ))
									: null}
							</Row>
						</div>
					</Right>
				</div>
			</Row>
		</div>
	)
}

export default ContributorCard
