import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
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
			<div className="button">
				<Button className="diventa-partner">Diventa Partner</Button>
			</div>

			<Container>
				<Row className="align-center">
					<Col md={6}>
						<img className="Azienda" src={require('../../images/collab_1.png')} alt="" />
					</Col>
					<Col md={6}>
						<img className="Azienda" src={require('../../images/collab_2.png')} alt="" />
					</Col>
					<Col md={6}>
						<img className="Azienda" src={require('../../images/collab_3.png')} alt="" />
					</Col>
					<Col md={6}>
						<img className="Azienda" src={require('../../images/collab_4.png')} alt="" />
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default Aziende

