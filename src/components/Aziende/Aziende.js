import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Aziende.scss'

const Aziende = () => {
	return (
		<div className="Aziende">
			{/* Titolo della sezione "Dicono di noi" */}
			<div className="intestazione">
				<div className="linea" />
				<span className="titolo">I nostri partner</span>
				<div className="linea" />
			</div>
			{/* Sottotitolo della sezione */}
			<div class="sottotitolo">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<Container>
				<Row className="align-center">
					<Col md={6}>
						<img className="Azienda" src={require('../../images/Image_3.png')} alt="" />
					</Col>
					<Col md={6}>
						<img className="Azienda" src={require('../../images/Image_4.png')} alt="" />
					</Col>
					<Col md={6}>
						<img className="Azienda" src={require('../../images/Image_5.png')} alt="" />
					</Col>
					<Col md={6}>
						<img className="Azienda" src={require('../../images/Image_6.png')} alt="" />
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default Aziende
