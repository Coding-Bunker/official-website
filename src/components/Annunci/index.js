import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './index.scss'

import annunci1 from '../../images/job positions.png'
import annunci2 from '../../images/progetti open source.png'
import annunci3 from '../../images/tutoring & corsi.png'

const Annunci = () => {
	return (
		<div className="Annunci">
			{/* Titolo della sezione "Dicono di noi" */}
			<div className="intestazione">
				<div className="linea" />
				<span className="titolo">Annunci</span>
				<div className="linea" />
			</div>
			{/* Sottotitolo della sezione */}
			<div className="sottotitolo">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<Container>
				<Row>
					<Col md={4}>
						<img src={annunci1} alt="" />
						<h3>Job positions</h3>
					</Col>
					<Col md={4}>
						<img src={annunci2} alt="" />
						<h3>Progetti open-source</h3>
					</Col>
					<Col md={4}>
						<img src={annunci3} alt="" />
						<h3>Tutoring & corsi</h3>
					</Col>
				</Row>
				<br />
				<br />
				<br />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit sodales nulla id
					consectetur. Mauris quis eleifend ex. Nullam justo nisl, pharetra id fermentum in, pretium
					sit amet
				</p>
			</Container>

			<div className="button">
				<Button className="diventa-partner">Diventa Partner</Button>
			</div>
		</div>
	)
}

export default Annunci
