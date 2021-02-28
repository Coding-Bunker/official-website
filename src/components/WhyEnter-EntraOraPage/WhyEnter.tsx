import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WhyEnterEntraOraStyle from './WhyEnter.module.scss'

interface Props {
	title: string
	description: string
	img: string
}

const WhyEnter: React.FC<Props> = ({ title, description, img }) => {
	return (
		<div className={WhyEnterEntraOraStyle.WhyEnterContainer}>
			<Container fluid>
				<Row>
					<Col sm md>
						<div className={WhyEnterEntraOraStyle.TextContainer}>
							<span className={WhyEnterEntraOraStyle.Title}>{title}</span>
							<p className={WhyEnterEntraOraStyle.Description}>{description}</p>
						</div>
					</Col>
					<Col sm={12} md={12} lg={12} xl={8}>
						<div className={WhyEnterEntraOraStyle.ImageContainer}>
							<img className={WhyEnterEntraOraStyle.Skater} src={img} alt="" />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default WhyEnter
