import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Aziende.scss'

const Aziende = () => {
	return (
		<div className="Aziende">
			<Container>
				<Row className="align-items-center">
					<Col>
						<img className="Azienda" src={require('../../images/Image_3.png')} alt="" />
					</Col>
					<Col>
						<img className="Azienda" src={require('../../images/Image_4.png')} alt="" />
					</Col>
					<Col>
						<img className="Azienda" src={require('../../images/Image_5.png')} alt="" />
					</Col>
					<Col>
						<img className="Azienda" src={require('../../images/Image_6.png')} alt="" />
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default Aziende
