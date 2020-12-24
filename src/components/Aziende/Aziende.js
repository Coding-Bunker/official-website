import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Aziende.scss'

import Collab1 from '../../images/collab_1.png'
import Collab2 from '../../images/collab_2.png'
import Collab3 from '../../images/collab_3.png'
import Collab4 from '../../images/collab_4.png'

const Aziende = () => {
	return (
		<div className="Aziende">
			<div className="intestazione">
				<div className="linea" />
				<span className="titolo">I nostri partner</span>
				<div className="linea" />
			</div>
			<div className="sottotitolo">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div className="button">
				<Button className="diventa-partner">Diventa Partner</Button>
			</div>

			<Container>
				<Row className="align-center">
					<Col md={6}>
						<img className="Azienda" src={Collab1} alt="" />
					</Col>
					<Col md={6}>
						<img className="Azienda" src={Collab2} alt="" />
					</Col>
					<Col md={6}>
						<img className="Azienda" src={Collab3} alt="" />
					</Col>
					<Col md={6}>
						<img className="Azienda" src={Collab4} alt="" />
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default Aziende
