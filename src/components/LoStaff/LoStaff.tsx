import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import StaffCard from '../StaffCard/StaffCard'

import './LoStaff.scss'
import MeImg from '../../images/me.jpg'

interface Props {
	title: string
	description: string
}

const LoStaff: React.FC<Props> = ({ title, description }) => {
	return (
		<div className="Lo-Staff">
			<div className="Contenitore-Titoli">
				<div className="Divisore" />
				<span className="Titolo-Staff">{title}</span>
				<div className="Divisore" />
			</div>

			<div className="Contenitore-Descrizione">
				<span className="Descrizione">{description}</span>
			</div>

			<Container fluid>
				<Row className="justify-content-around h-100">
					<Col md="auto">
						<StaffCard
							profilePic={MeImg}
							name="Prosciutto"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur. Proin suscipit sodales nulla id consectetur."
						/>
					</Col>
					<Col md="auto">
						<StaffCard
							profilePic={MeImg}
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
