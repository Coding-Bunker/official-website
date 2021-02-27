import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import aziende_style from './Aziende.module.scss'

interface Props {
	title: string
	undertitle: string
	collab0: string
	collab1: string
	collab2: string
	collab3: string
}

const Aziende: React.FC<Props> = ({ title, undertitle, collab0, collab1, collab2, collab3 }) => {
	return (
		<div>
			<div className={aziende_style.intestazione}>
				<div className={aziende_style.linea} />
				<span className={aziende_style.titolo}>{title}</span>
				<div className={aziende_style.linea} />
			</div>
			<div className={aziende_style.sottotitolo}>{undertitle}</div>
			<div className={aziende_style.button}>
				<Button className={aziende_style.diventaPartner}>Diventa Partner</Button>
			</div>

			<Container>
				<Row className={aziende_style.alignCenter}>
					<Col md={6}>
						<img className={aziende_style.Azienda} src={collab0} alt="" />
					</Col>
					<Col md={6}>
						<img className={aziende_style.Azienda} src={collab1} alt="" />
					</Col>
					<Col md={6}>
						<img className={aziende_style.Azienda} src={collab2} alt="" />
					</Col>
					<Col md={6}>
						<img className={aziende_style.Azienda} src={collab3} alt="" />
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default Aziende
