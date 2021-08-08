import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './index.scss'

import annunci1 from '../../images/job positions.png'
import annunci2 from '../../images/progetti open source.png'
import annunci3 from '../../images/tutoring & corsi.png'

const Annunci = () => {
	return (
		<div className="Annunci">
			<div className="intestazione">
				<div className="linea" />
				<span className="titolo">Annunci</span>
				<div className="linea" />
			</div>

			<div className="sottotitolo">Ecco cosa promuoviamo all&rsquo;interno della community</div>

			<Container>
				<Row>
					<Col md={4}>
						<img src={annunci1} alt="" />
						<h3 className="titolo-descrizione">Job positions</h3>
						<p className="testo-descrizione">
							Cerchi qualcuno da assumere nella tua azienda? Dentro Coding Bunker trovi un sacco di
							programmatori di tutte le età e con competenze di tutti i tipi.
						</p>
					</Col>

					<Col md={4}>
						<img src={annunci2} alt="" />
						<h3 className="titolo-descrizione">Progetti open-source</h3>
						<p className="testo-descrizione">
							Avviamo progetti open source con i membri, formando un team vero e proprio e lavoriamo
							secondo i principi della metodologia Agile, con lo scopo di imparare, fare pratica e
							digitalizzare le no profit.
						</p>
					</Col>

					<Col md={4}>
						<img src={annunci3} alt="" />
						<h3 className="titolo-descrizione">Tutoring & corsi</h3>
						<p className="testo-descrizione">
							Offri corsi o servizi di tutoring? Dentro Coding Bunker ci sono tantissimi ragazzi
							interessati ad imparare tutti i linguaggi e le tecnologie del mondo informatico.
						</p>
					</Col>
				</Row>
			</Container>

			<div className="button my-5">
				<Button className="diventa-partner">Diventa Partner</Button>
			</div>
		</div>
	)
}

export default Annunci
