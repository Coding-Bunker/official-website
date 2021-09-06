import React from 'react'
import scrollableStyles from './Scrollable.module.scss'
import Heading from '../Heading/Heading.js'
import EventCard from '../EventCard/EventCard.js'

interface Card {
	date: string
	img: string
	title: string
	description: string
	link: string
}

interface Props {
	title: string
	description: string
	cards: Array<Card>
}

const Scrollable: React.FC<Props> = ({ title, description, cards }) => {
	return (
		<section className={scrollableStyles.Scrollable}>
			<Heading title={title} subtitle={description} />

			<div className={scrollableStyles.cardList}>
				{cards.map((card, i) => (
					<EventCard
						key={i}
						date={card.date}
						img={card.img}
						title={card.title}
						description={card.description}
					/>
				))}
			</div>
		</section>
	)
}

export default Scrollable
