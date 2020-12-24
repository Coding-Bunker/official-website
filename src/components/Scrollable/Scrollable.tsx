import React from 'react'
import './Scrollable.scss'

import EventCard from '../EventCard/EventCard.js'

interface Card {
	date: string
	img: string
	title: string
	description: string
}

interface Props {
	title: string
	description: string
	cards: Array<Card>
}

const Scrollable: React.FC<Props> = ({ title, description, cards }) => {
	return (
		<div className="scrollable">
			<div className="intestazione">
				<div className="linea" />
				<span className="titolo">{title}</span>
				<div className="linea" />
			</div>

			<div className="sottotitolo">{description}</div>

			<section className="card-list">
				{cards.map((card, i) => (
					<EventCard
						key={i}
						date={card.date}
						img={card.img}
						title={card.title}
						description={card.description}
					/>
				))}
			</section>
		</div>
	)
}

export default Scrollable
