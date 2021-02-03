import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './index.scss'

import ContributorCard from '../ContributorCard/ContributorCard'

const Contributors = () => {
	return (
		<div className="Contributors">
			<div className="intestazione">
				<div className="linea" />
				<span className="titolo">Contributors</span>
				<div className="linea" />
			</div>
			<Container>
				<div className="sottotitolo">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id
					consectetur. Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium
					sit amet tortor. Integer volutpat nulla sed placerat ultrices.
				</div>
				<br />
				<br />
				<br />
				<ContributorCard />
				<br />
				<br />
				<div className="button">
					<Button className="vedi-altri">Vedi altri</Button>
				</div>
			</Container>
		</div>
	)
}

export default Contributors
