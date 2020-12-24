import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import StaffCard from '../StaffCard/StaffCard.js'
import './LoStaff.scss'

interface Card {
	title: string,
	description: string,
	img: string
}

interface Props{
	title:string,
	description:string,
	cards: Array<Card>
}

interface Props {
	title: string
	description: string
}

const LoStaff = (props: Props) => {
	const cards = []

	props.cards.forEach((e:Card) => {
		cards.push(<Col md="auto"><StaffCard profilePic={e.img} name={e.title} description={e.description} /></Col>)
	})


	return (
		<div className="Lo-Staff">
			<div className="Contenitore-Titoli">
				<div className="Divisore" />
				<span className="Titolo-Staff">{props.title}</span>
				<div className="Divisore" />
			</div>

			<div className="Contenitore-Descrizione">
				<span className="Descrizione">{props.description}</span>
			</div>

			<Container fluid>
				<Row className="justify-content-around h-100">
					{cards}
				</Row>
			</Container>
		</div>
	)
}
export default LoStaff
