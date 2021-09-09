import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import aziendeStyle from './Aziende.module.scss'
import Heading from '../Heading/Heading.js'

interface Partner {
	img: string
	link: string
}

interface Props {
	title: string
	description: string
	partners: Array<Partner>
}

const Aziende: React.FC<Props> = ({ title, description, partners }) => {
	return (
		<div className={aziendeStyle.Azienda}>
			<Heading title={title} subtitle={description} />

			<Container>
				<Row className={aziendeStyle.imgContainer}>
					{partners.map((partner, i) => (
						<Col sm={6} key={i} className={aziendeStyle.column}>
							<a href={partner.link}>
								<img src={partner.img} alt="" />
							</a>
						</Col>
					))}
				</Row>
			</Container>

			{/* We actually can't insert this button, because we won't develop and publish the become partner page for the first
            release
            <div className={aziendeStyle.button}>
				<Button className={aziendeStyle.diventaPartner}>Diventa Partner</Button>
			</div>
            */}
		</div>
	)
}

export default Aziende
