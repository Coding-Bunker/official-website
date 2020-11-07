import React from 'react'
import GrowingNumber from '../GrowingNumber/GrowingNumber'
import { Container, Row, Col } from 'react-bootstrap'

import './AlcuniNumeri.scss'

const AlcuniNumeri = () => {
	return (
		<div className="alcuni-numeri">
			<div className="Contenitore-Titoli">
				<div className="Divisore" />
				<span className="Titolo-Staff">Alcuni numeri</span>
				<div className="Divisore" />
			</div>

			<Container className="Contenitore-Numeri">
				<Row>
					<Col>
						<span className="Decorazione-Numeri">
							<GrowingNumber number={2136} />
						</span>
					</Col>
					<Col>
						<span className="Decorazione-Numeri">
							<GrowingNumber number={3} />
						</span>
					</Col>
					<Col>
						<span className="Decorazione-Numeri">
							<GrowingNumber number={5} />
						</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<span className="Decorazione-Sottotitoli">Membri</span>
					</Col>
					<Col>
						<span className="Decorazione-Sottotitoli Indent">Eventi</span>
						<span className="Decorazione-Sottotitoli">organizzati</span>
					</Col>
					<Col>
						<span className="Decorazione-Sottotitoli Indent">Aziende</span>
						<span className="Decorazione-Sottotitoli">partner</span>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default AlcuniNumeri
