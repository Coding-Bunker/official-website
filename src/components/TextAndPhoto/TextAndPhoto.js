import React from 'react'
import { Link } from 'gatsby'
import textAndPhotoStyles from './TextAndPhoto.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

export default props => (
	<div className={textAndPhotoStyles.containerSection}>
		<Container fluid className={textAndPhotoStyles.containerText}>
			<Row>
				<Col>
					<div className={textAndPhotoStyles.title}>{props.title}</div>
					<div className={textAndPhotoStyles.description}>{props.description}</div>
					<div className={textAndPhotoStyles.linkContainer}>
						<div className={textAndPhotoStyles.link}>
							<Link to={props.linkTo}>
								{props.linkText} <span style={{ fontWeight: 'normal' }}></span>
							</Link>
						</div>
					</div>
				</Col>
				<div className={textAndPhotoStyles.imgContainer}>
					<img className={textAndPhotoStyles.img} alt="relative to the text" src={props.img} />
				</div>
			</Row>
		</Container>
	</div>
)
