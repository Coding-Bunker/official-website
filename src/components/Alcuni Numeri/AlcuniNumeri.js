import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GrowingNumber from '../GrowingNumber/GrowingNumber'

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
					<Col xs={12} md lg className="Contenitore-Numero">
						<span className="Decorazione-Numeri">
							<GrowingNumber number={2136} />
						</span>
						<div className="Decorazione-Sottotitoli">Membri</div>
					</Col>
					<Col xs={12} md lg className="Contenitore-Numero">
						<span className="Decorazione-Numeri">
							<GrowingNumber number={3} />
						</span>
						<div className="Decorazione-Sottotitoli Indent">Eventi</div>
						<div className="Decorazione-Sottotitoli">organizzati</div>
					</Col>
					<Col xs={12} md lg className="Contenitore-Numero">
						<span className="Decorazione-Numeri">
							<GrowingNumber number={5} />
						</span>
						<div className="Decorazione-Sottotitoli Indent">Aziende</div>
						<div className="Decorazione-Sottotitoli">partner</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default AlcuniNumeri
