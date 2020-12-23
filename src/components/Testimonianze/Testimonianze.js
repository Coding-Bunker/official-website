import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import testimonianzeStyle from './Testimonianze.module.scss'
import QuoteSvg from '../../images/quote.svg'
import FotoTestimoneImg from '../../images/foto-testimone.png'

const Testimonianze = () => {
	return (
		<div className={testimonianzeStyle.container_component}>
			<div className={testimonianzeStyle.contenitore_quoto_sx}>
				<img className={testimonianzeStyle.quoto_sx} src={QuoteSvg} alt="quoto" />
			</div>

			<Container>
				<Row className={testimonianzeStyle.justify_content_start}>
					<Col md="auto">
						<img className={testimonianzeStyle.testimone} src={FotoTestimoneImg} alt="testimone" />
					</Col>
					<Col md="auto">
						<span className={testimonianzeStyle.BigBoi}>Ludovico Besana</span>
						<span className={testimonianzeStyle.OwO}>Coding Bunker - Staff</span>
					</Col>
				</Row>
				<Row className={testimonianzeStyle.justify_content_start}>
					<Col md="auto">
						<span className={testimonianzeStyle.testiomonianza}>
							Coding Bunker è una community di programmatori e appassionati di codice. Il suo
							obiettivo è dare a tutti la possibilità di ricevere un aiuto
						</span>
					</Col>
				</Row>
			</Container>

			<div className={testimonianzeStyle.contenitore_quoto_dx}>
				<img className={testimonianzeStyle.quoto_dx} src={QuoteSvg} alt="quoto" />
			</div>
		</div>
	)
}
export default Testimonianze
