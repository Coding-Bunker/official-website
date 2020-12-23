import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import ContributorCard from '../ContributorCard/ContributorCard.js'

import MeImage from '../../images/me.jpg'

import './ContributorCard-Grid.scss'

interface Props {
	text_button: string
}

const ContributorCardGrid: React.FC<Props> = ({ text_button }) => {
	return (
		<div className="Contenitore-Grid">
			<Container fluid>
				<Row className="justify-content-between rowCard">
					<Col md="auto">
						<ContributorCard
							user="Admin"
							profilePic={MeImage}
							name="Gieri"
							description="E' un salame scaduto"
							job="Full Stack"
							role="Senior Member"
							date="est. Jan. 2020"
							place="Roma"
							icons={['js']}
						/>
					</Col>
					<Col md="auto">
						<ContributorCard
							user="Admin"
							profilePic={MeImage}
							name="Gieri"
							description="E' un salame scaduto"
							job="Full Stack"
							role="Senior Member"
							date="est. Jan. 2020"
							place="Roma"
							icons={['js']}
						/>
					</Col>
					<Col md="auto">
						<ContributorCard
							user="Admin"
							profilePic={MeImage}
							name="Gieri"
							description="E' un salame scaduto"
							job="Full Stack"
							role="Senior Member"
							date="est. Jan. 2020"
							place="Roma"
							icons={['js']}
						/>
					</Col>
				</Row>
				<Row className="justify-content-between rowCard">
					<Col md="auto">
						<ContributorCard
							user="Member"
							profilePic={MeImage}
							name="Gieri"
							description="E' un salame scaduto"
							job="Full Stack"
							role="Senior Member"
							date="est. Jan. 2020"
							place="Roma"
							icons={['js']}
						/>
					</Col>
					<Col md="auto">
						<ContributorCard
							user="Member"
							profilePic={MeImage}
							name="Gieri"
							description="E' un salame scaduto"
							job="Full Stack"
							role="Senior Member"
							date="est. Jan. 2020"
							place="Roma"
							icons={['js']}
						/>
					</Col>
					<Col md="auto">
						<ContributorCard
							user="Member"
							profilePic={MeImage}
							name="Gieri"
							description="E' un salame scaduto"
							job="Full Stack"
							role="Senior Member"
							date="est. Jan. 2020"
							place="Roma"
							icons={['js']}
						/>
					</Col>
				</Row>
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
