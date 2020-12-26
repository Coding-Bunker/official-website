import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'gatsby'
import pastEventCardStyles from './PastEventCard.module.scss'

const PastEventCard = ({ people, className, img, title, description, linkTo, showMore }) => (
	<div className={pastEventCardStyles.containerCard + (className ? ` ${className}` : '')}>
		<div className={pastEventCardStyles.imgContainer}>
			<img className={pastEventCardStyles.img} src={img} alt={title} />
		</div>
		<Container className={pastEventCardStyles.descriptionContainer}>
			<div className={pastEventCardStyles.title}>{title}</div>
			<div className={pastEventCardStyles.description}>{description}</div>
		</Container>
		<Row>
			{people
				? people.map((person, i) => (
						<Col key={i} className={pastEventCardStyles.peopleContainer}>
							<div className={pastEventCardStyles.peopleImgContainer}>
								<img className={pastEventCardStyles.peopleImg} alt="person" src={person.img} />
							</div>
							<div className={pastEventCardStyles.peopleName}>{person.name}</div>
							<div className={pastEventCardStyles.peopleSurname}>{person.surname}</div>
						</Col>
				  ))
				: null}
		</Row>
		<div className={pastEventCardStyles.showMoreContainer}>
			<Link to={linkTo}>
				<div className={pastEventCardStyles.showMore}>{showMore}</div>
			</Link>
		</div>
	</div>
)

export default PastEventCard
