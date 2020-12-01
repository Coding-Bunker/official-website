import React from 'react'
import { Container } from 'react-bootstrap'
import './Chisiamo.scss'

interface Props{
	title:string,
	description:string,
}

const Chisiamo = (props: Props) => {
	return (
		<section className="chi-siamo">
			<div>
				<img className="background-section" src={require('../../images/banner.png')} />
			</div>
			<Container fluid className="contenitore-testo">
				<h1>{props.title}</h1>
				<p>{props.description}</p>
			</Container>
		</section>
	)
}
export default Chisiamo
