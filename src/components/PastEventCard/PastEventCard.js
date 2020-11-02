import React from 'react'
import pastEventCardStyles from './PastEventCard.module.scss'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'gatsby'

export default props => {
	// nell'eventualità in cui più di una persona abbia partecipato ad un evento passato
	let peopleProps = props.people
	let peopleElement = []

	peopleProps.forEach(person => {
		peopleElement.push(
			<Col className={pastEventCardStyles.peopleContainer}>
				<div className={pastEventCardStyles.peopleImgContainer}>
					<img className={pastEventCardStyles.peopleImg} alt="people" src={person.img} />
				</div>
				<div className={pastEventCardStyles.peopleName}>{person.name}</div>
				<div className={pastEventCardStyles.peopleSurname}>{person.surname}</div>
			</Col>,
		)
	})

	return (
		<div
			className={pastEventCardStyles.containerCard + (props.className ? ` ${props.className}` : '')}
		>
			<div className={pastEventCardStyles.imgContainer}>
				<img className={pastEventCardStyles.img} src={props.img} alt={props.title} />
			</div>
			<Container className={pastEventCardStyles.descriptionContainer}>
				<div className={pastEventCardStyles.title}>{props.title}</div>
				<div className={pastEventCardStyles.description}>{props.description}</div>
			</Container>
			<Row>{peopleElement}</Row>
			<div className={pastEventCardStyles.showMoreContainer}>
				<Link to={props.linkTo}>
					<div className={pastEventCardStyles.showMore}>{props.showMore}</div>
				</Link>
			</div>
		</div>
	)
}
