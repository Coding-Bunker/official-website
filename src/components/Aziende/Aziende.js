import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Aziende.scss'

const Aziende = (props) => {
	const partners = []
	
	props.partners.forEach(e => {
		partners.push(<Col md={6}><a href={e.link}><img className="Azienda" src={e.img} alt="" /></a></Col>)
	});


	return (
		<div className="Aziende">
			{/* Titolo della sezione "Dicono di noi" */}
			<div className="intestazione">
				<div className="linea" />
					<span className="titolo">{props.title}</span>
				<div className="linea" />
			</div>
			{/* Sottotitolo della sezione */}
			<div class="sottotitolo">{props.description}</div>
			<Container>
				<Row className="align-center">
					{partners}
				</Row>
			</Container>
		</div>
	)
}
export default Aziende
