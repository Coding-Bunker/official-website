import React from 'react'
import { Container } from 'react-bootstrap'
import './Chisiamo.scss'
import BG from '../../images/banner.png'

interface Props {
	title: string
	description: string
}

const Chisiamo: React.FC<Props> = ({ title, description }) => {
	return (
		<section className="chi-siamo">
			<div>
				<img className="background-section" src={BG} alt={title} />
			</div>
			<Container fluid className="contenitore-testo">
				<h1>{title}</h1>
				<p>{description}</p>
			</Container>
		</section>
	)
}
export default Chisiamo
