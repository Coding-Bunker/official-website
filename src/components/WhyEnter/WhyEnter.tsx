import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './WhyEnter.scss'

interface Props {
	title: string
	description: string
	img: string
}

const WhyEnter: React.FC<Props> = ({ title, description, img }) => {
	return (
		<div className="container-WhyEnter">
			<Container fluid>
				<Row>
					<Col sm md>
						<div className="container-text">
							<span className="title">{title}</span>
							<p className="description">{description}</p>
						</div>
					</Col>
					<Col sm={12} md={12} lg={12} xl={6}>
						<div className="container-image">
							<img className="skater" src={img} alt="" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default WhyEnter
