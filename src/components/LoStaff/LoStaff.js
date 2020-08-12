import React from 'react'
import StaffCard from '../StaffCard/StaffCard'
import './LoStaff.scss'

import { Container, Row, Col } from 'react-bootstrap'

const LoStaff = () => {
	return (
		<div>
			<div className="Contenitore-Titoli">
				<div className="Divisore" />
				<span className="Titolo-Staff">Lo staff</span>
				<div className="Divisore" />
			</div>

			<div className="Contenitore-Descrizione">
				<span>
					Lorem ipsum dolor sit amet, consectetur adipisicing adipisicing elit. Deserunt iste quo
					temporibus ullam. Asperiores cum cupiditate facere id iusto nam nemo placeat
				</span>
				<span>
					Lorem ipsum dolor sit amet, consectetur consectetur consectetur consectetur consectetur
					adipisicing elit. Deserunt iste quo temporibus ullam.{' '}
				</span>
			</div>

			<Container fluid>
				<Row className="justify-content-around h-100">
					<Col md="auto">
						<StaffCard
							profilePic={require('../../images/me.jpg')}
							name="Prosciutto"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur."
						/>
					</Col>
					<Col md="auto">
						<StaffCard
							profilePic={require('../../images/me.jpg')}
							name="Salame"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur."
						/>
					</Col>
					<Col md="auto">
						<StaffCard
							profilePic={require('../../images/me.jpg')}
							name="Formaggio"
							description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id consectetur."
						/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default LoStaff
