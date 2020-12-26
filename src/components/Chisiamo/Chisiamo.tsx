import React from 'react'
import { Container } from 'react-bootstrap'
import './Chisiamo.scss'

interface Props {
	title: string
	description: string
	img: string
}

const Chisiamo: React.FC<Props> = ({ title, description, img }) => {
	return (
		<section className="chi-siamo">
			<div>
				<img className="background-section" alt="background" src={img} />
			</div>
			<Container fluid className="contenitore-testo">
				<h1>{title}</h1>
				<p>{description}</p>
			</Container>
		</section>
	)
}
export default Chisiamo
