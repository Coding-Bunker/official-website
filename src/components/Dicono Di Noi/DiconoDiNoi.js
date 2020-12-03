import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './DiconoDiNoi.scss'

const DiconoDiNoi = () => {
	return (
		<div className="dicono-di-noi">
			<div className="intestazione">
				<div className="linea" />
				<span className="titolo">Dicono di noi</span>
				<div className="linea" />
			</div>
			<div className="sottotitolo">Lorem ipsum dolor sit amet</div>

			<Container className="quote-container">
				<Row>
					<Col>
						<div className="quote-card">
							<blockquote>
								Lorem ipsum dolor sit amet,
								<br />
								consetetur sadipscing elitr, sed diam
								<br />
								nonumy eirmod tempor.
							</blockquote>
							<cite>Gino Padellino</cite>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="quote-card">
							<blockquote>
								Lorem ipsum dolor sit amet,
								<br />
								consetetur sadipscing elitr, sed diam
								<br />
								nonumy eirmod tempor.
							</blockquote>
							<cite>Gino Padellino</cite>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="quote-card">
							<blockquote>
								Lorem ipsum dolor sit amet,
								<br />
								consetetur sadipscing elitr, sed diam
								<br />
								nonumy eirmod tempor.
							</blockquote>
							<cite>Gino Padellino</cite>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default DiconoDiNoi
