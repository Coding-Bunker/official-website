import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import StaffCard from '../StaffCard/StaffCard.js'
import staffCardStyles from './LoStaff.module.scss'

interface Card {
	title: string
	description: string
	img: string
}

interface Props {
	title: string
	description: string
	cards: Array<Card>
}

const LoStaff: React.FC<Props> = ({ title, description, cards }) => {
	return (
		<div className="Lo-Staff">
			<div className={staffCardStyles.TitlesContainer}>
				<div className={staffCardStyles.Seperators} />
				<span className={staffCardStyles.ComponentTitle}>{title}</span>
				<div className={staffCardStyles.Seperators} />
			</div>

			<div className={staffCardStyles.DescriptionContainer}>
				<span className={staffCardStyles.Description}>{description}</span>
			</div>

			<Container fluid>
				<Row className="justify-content-around">
					{cards.map((card, i) => (
						<Col md="auto" key={i}>
							<StaffCard
								className={staffCardStyles.profilePicContainer}
								className2={staffCardStyles.name}
								className3={staffCardStyles.description}
								className4={staffCardStyles.component}
								profilePic={card.img}
								name={card.title}
								description={card.description}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	)
}
export default LoStaff
