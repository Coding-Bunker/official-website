import React from 'react'

import eventCardStyles from './EventCard.module.scss'

const EventCard = ({ date, title, img, description }) => {
	// eslint-disable-next-line no-unused-vars
	const [year, month, day] = date.split('-')

	let parsedMonth = ''
	// Converto il mese da numero a lettere
	switch (parseInt(month, 10)) {
		case 1:
			parsedMonth = 'GEN'
			break
		case 2:
			parsedMonth = 'FEB'
			break
		case 3:
			parsedMonth = 'MAR'
			break
		case 4:
			parsedMonth = 'APR'
			break
		case 5:
			parsedMonth = 'MAG'
			break
		case 6:
			parsedMonth = 'GIU'
			break
		case 7:
			parsedMonth = 'LUG'
			break
		case 8:
			parsedMonth = 'AGO'
			break
		case 9:
			parsedMonth = 'SET'
			break
		case 10:
			parsedMonth = 'OTT'
			break
		case 11:
			parsedMonth = 'NOV'
			break
		case 12:
			parsedMonth = 'DEC'
			break
		default:
			parsedMonth = 'GEN'
			break
	}

	return (
		<div className={eventCardStyles.containerCard}>
			<div className={eventCardStyles.imgContainer}>
				<img className={eventCardStyles.img} src={img} alt={title} />
			</div>
			<div className={eventCardStyles.under}>
				<div className={eventCardStyles.calendarContainer}>
					<div className={eventCardStyles.month}>{parsedMonth}</div>
					<div className={eventCardStyles.day}>{day}</div>
				</div>
				<div className={eventCardStyles.descriptionContainer}>
					<div className={eventCardStyles.title}>{title}</div>
					<div className={eventCardStyles.description}>{description}</div>
				</div>
			</div>
		</div>
	)
}

export default EventCard
