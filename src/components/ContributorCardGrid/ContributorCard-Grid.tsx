import React from 'react'
import './ContributorCard-Grid.scss'
import { Container, Col, Row, Button } from 'react-bootstrap'
import ContributorCard from '../ContributorCard/ContributorCard'

interface Props {
	text_button: string
}

const ContributorCardGrid = (props: Props) => {
	return (
		<div className="Contenitore-Grid">
			<Container fluid>
				<Row className="justify-content-between rowCard">
					<Col md="auto">
						<ContributorCard
							user="Admin"
							profilePic={require('../../images/me.jpg')}
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
							profilePic={require('../../images/me.jpg')}
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
							profilePic={require('../../images/me.jpg')}
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
							profilePic={require('../../images/me.jpg')}
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
							profilePic={require('../../images/me.jpg')}
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
							profilePic={require('../../images/me.jpg')}
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
					{props.text_button}
				</Button>
			</div>
		</div>
	)
}

export default ContributorCardGrid
