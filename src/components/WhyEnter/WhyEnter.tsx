import React from 'react'
import { Row, Col } from 'react-bootstrap'
import whyEnterStyles from './WhyEnter.module.scss'

interface Props {
	title: string
	description: string
	img: string
}

const WhyEnter: React.FC<Props> = ({ title, description, img }) => {
	return (
		<section className={whyEnterStyles.WhyEnterHomeSection}>
			<Row>
				<Col className={whyEnterStyles.textContainer} lg={6}>
					<div className={whyEnterStyles.title}>{title}</div>
					<div className={whyEnterStyles.description}>{description}</div>
				</Col>
				<Col className={whyEnterStyles.imgContainer} lg={6}>
					<img
						className={whyEnterStyles.img}
						src={img}
						alt="Perché entrare dentro Coding Bunker - Why enter in Coding Bunker"
					/>
				</Col>
			</Row>
		</section>
	)
}
export default WhyEnter
