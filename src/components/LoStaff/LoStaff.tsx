import React from 'react'
import StaffCard from '../StaffCard/StaffCard'
import './LoStaff.scss'

interface Props {
	title: string
	description: string
}

import { Container, Row, Col } from 'react-bootstrap'

const LoStaff = (props: Props) => {
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
					<Col md="auto">
						<StaffCard
							profilePic={require('../../images/me.jpg')}
							name="Prosciutto"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Proin suscipit sodales nulla id consectetur."
						/>
					</Col>
					<Col md="auto">
						<StaffCard
							profilePic={require('../../images/me.jpg')}
							name="Salame"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Proin suscipit sodales nulla id consectetur."
						/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default LoStaff
