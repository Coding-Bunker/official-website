import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import style from './style.module.scss'
import GrowingNumber from '../GrowingNumber/GrowingNumber'

const HallOfFameSection = ({ img, title, description, contributors, progetti, utenti }) => (
	<div className={style.container}>
		<Row>
			<Col md>
				<img className={style.img} src={img} alt="Logo" />
			</Col>
			<Col md>
				<div className={style.TitlesContainer}>
					<div className={style.Seperators} />
					<span className={style.ComponentTitle}>{title}</span>
					<div className={style.Seperators} />
				</div>
				<div className={style.description}>{description}</div>
			</Col>
		</Row>

		<Container className="Contenitore-Numeri">
			<Row>
				<Col xs={12} md lg className="Contenitore-Numero">
					<span className="Decorazione-Numeri">
						<GrowingNumber number={contributors} />
					</span>
					<div className="Decorazione-Sottotitoli">Contributors</div>
				</Col>
				<Col xs={12} md lg className="Contenitore-Numero">
					<span className="Decorazione-Numeri">
						<GrowingNumber number={progetti} />
					</span>
					<div className="Decorazione-Sottotitoli">Progetti</div>
				</Col>
				<Col xs={12} md lg className="Contenitore-Numero">
					<span className="Decorazione-Numeri">
						<GrowingNumber number={utenti} />
					</span>
					<div className="Decorazione-Sottotitoli">Utenti</div>
				</Col>
			</Row>
		</Container>
	</div>
)

export default HallOfFameSection
