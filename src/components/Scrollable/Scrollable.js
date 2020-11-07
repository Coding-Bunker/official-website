import React from 'react'
import './Scrollable.scss'

import EventCard from '../EventCard/EventCard'

const Scrollable = () => {
	return (
		<div className="scrollable">
			<div className="intestazione">
				<div className="linea" />
				<span className="titolo">Gli eventi di Coding Bunker</span>
				<div className="linea" />
			</div>
			<div className="sottotitolo">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, beatae
				consequatur corporis dolorem doloremque non odio officiis omnis voluptatum.
			</div>

			<section className="card-list">
				<EventCard
					date="25/09/2020"
					img={require('../../images/cb.png')}
					title="Gieri"
					description="ihgIFIEUFGEFU"
				/>
				<EventCard
					date="25/09/2020"
					img={require('../../images/cb.png')}
					title="Gieri"
					description="ihgIFIEUFGEFU"
				/>
				<EventCard
					date="25/09/2020"
					img={require('../../images/cb.png')}
					title="Gieri"
					description="ihgIFIEUFGEFU"
				/>
				<EventCard
					date="25/09/2020"
					img={require('../../images/cb.png')}
					title="Gieri"
					description="ihgIFIEUFGEFU"
				/>
			</section>
		</div>
	)
}

export default Scrollable
