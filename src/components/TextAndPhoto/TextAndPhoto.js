import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import textAndPhotoStyles from './TextAndPhoto.module.scss'

const TextAndPhoto = ({ title, description, linkTo, linkText, img }) => (
	<div className={textAndPhotoStyles.containerSection}>
		<Row>
			<Col className={textAndPhotoStyles.textContainer}>
				<div className={textAndPhotoStyles.title}>{title}</div>
				<div className={textAndPhotoStyles.description}>{description}</div>
				<div className={textAndPhotoStyles.linkContainer}>
					<div className={textAndPhotoStyles.link}>
						<Link to={linkTo}>{linkText}</Link>
					</div>
				</div>
			</Col>
			<Col style={{ padding: 0 }}>
				<div className={textAndPhotoStyles.imgContainer}>
					<img className={textAndPhotoStyles.img} alt="Component" src={img} />
				</div>
			</Col>
		</Row>
		<Container>sdifioedf</Container>
	</div>
)

export default TextAndPhoto
