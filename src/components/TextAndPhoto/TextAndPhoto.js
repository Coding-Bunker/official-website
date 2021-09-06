import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import textAndPhotoStyles from './TextAndPhoto.module.scss'

const TextAndPhoto = ({ title, description, linkTo, linkText, img }) => (
	<section className={textAndPhotoStyles.TextAndPhotoHomeSection}>
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
			<Col className={textAndPhotoStyles.imgContainer}>
				<img className={textAndPhotoStyles.img} alt="background" src={img} />
			</Col>
		</Row>
	</section>
)

export default TextAndPhoto
