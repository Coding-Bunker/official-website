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
					<Col>
						<div className="container-text">
							<span className="title">{title}</span>
							<p className="description">{description}</p>
						</div>
					</Col>
					<Col>
						<div>
							<img src={img} alt="" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default WhyEnter
