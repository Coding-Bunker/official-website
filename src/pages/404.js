/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../styles/404.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'

import QrImg from '../images/qr.png'

const NotFoundPage = () => (
	<div className="fourofour">
		<Container>
			<div className="sad">:(</div>
			<div className="fourofour__title">
				Il computer ha riscontrato un problema e deve essere riavviato.
				<br />
				Riavvio Automatico.
			</div>
			<Row className="fourofour__description">
				<div>
					<img className="fourofour__img" src={QrImg} alt="qr" />
				</div>
				<div className="fourofour__description-text">
					<Row>
						<Col>
							Per risolvere questo problema vai{' '}
							<a className="fourofour__link" href="javascript:history.back()">
								Indietro
							</a>{' '}
							o{' '}
							<Link className="fourofour__link" to="/">
								Torna alla Homepage.
							</Link>
							<br />
							http://codingbunker.it/stopcode
						</Col>
					</Row>
					<Row style={{ marginTop: '1rem' }}>
						<Col>
							Se contatti lo staff di supporto, fornisci queste informazioni
							<br />
							Codice di interruzione:{' '}
							<span style={{ fontWeight: 'bold' }}>404_PAGE_NOT_FOUND_FOLLOW_US</span>
						</Col>
					</Row>
				</div>
			</Row>
		</Container>
	</div>
)

export default NotFoundPage
