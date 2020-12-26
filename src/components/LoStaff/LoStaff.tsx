import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import StaffCard from '../StaffCard/StaffCard.js'
import './LoStaff.scss'

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
			<div className="Contenitore-Titoli">
				<div className="Divisore" />
				<span className="Titolo-Staff">{title}</span>
				<div className="Divisore" />
			</div>

			<div className="Contenitore-Descrizione">
				<span className="Descrizione">{description}</span>
			</div>

			<Container fluid>
				<Row className="justify-content-around h-100">
					{cards.map((card, i) => (
						<Col md="auto" key={i}>
							<StaffCard profilePic={card.img} name={card.title} description={card.description} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	)
}
export default LoStaff
