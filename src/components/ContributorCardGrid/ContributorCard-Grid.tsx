import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import ContributorCard from '../ContributorCard/ContributorCard.js'
import './ContributorCard-Grid.scss'

interface Language {
	name: string
}

interface Contributor {
	username: string
	role: string
	picture: string
	job: string
	description: string
	date: string
	city: string
	languages: Array<Language>
}

interface Props {
	text_button: string
	contributors: Array<Contributor>
}

const ContributorCardGrid: React.FC<Props> = ({ text_button, contributors }) => {
	const contributorCards = contributors.map((contributor, i) => {
		const date = contributor.date.split('-')

		let month = ''

		switch (parseInt(date[1], 10)) {
			case 1:
				month = 'Jan.'
				break
			case 2:
				month = 'Feb.'
				break
			case 3:
				month = 'Mar.'
				break
			case 4:
				month = 'Apr.'
				break
			case 5:
				month = 'May'
				break
			case 6:
				month = 'Jun.'
				break
			case 7:
				month = 'Jul.'
				break
			case 8:
				month = 'Aug.'
				break
			case 9:
				month = 'Sep.'
				break
			case 10:
				month = 'Oct.'
				break
			case 11:
				month = 'Nov.'
				break
			case 12:
				month = 'Dec.'
				break
			default:
				month = 'Err'
		}

		return (
			<Col md="auto" key={i}>
				<ContributorCard
					className="contributor_card_grid"
					user={contributor.role}
					profilePic={contributor.picture}
					name={contributor.username}
					description={contributor.description}
					job={contributor.job}
					role={contributor.role}
					date={`est. ${month} ${date[0]}`}
					place={contributor.city}
					icons={contributor.languages.map(l => l.name)}
				/>
			</Col>
		)
	})

	return (
		<div className="Contenitore-Grid">
			<Container fluid>
				{Array.from({ length: contributorCards.length / 3 })
					.map((_, i) => contributorCards.slice(i, i + 3))
					.map((contribGroup, contribIndex) => (
						<Row key={contribIndex}>{contribGroup}</Row>
					))}
			</Container>

			<div className="Contenitore-Bottone">
				<Button variant="light" className="Bottone">
					{text_button}
				</Button>
			</div>
		</div>
	)
}

export default ContributorCardGrid
