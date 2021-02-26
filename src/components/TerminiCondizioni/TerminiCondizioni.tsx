import React from 'react'
import './TerminiCondizioni.scss'
import { Row, Col, Container } from 'react-bootstrap'

interface Props {
	title: string
	description1: string
	description2: string
	indexTitle: string
	sections: Array<Section>
	indexes: Array<LinkIndex>
}

interface Section {
	dataTitle: string
	dataDesc: string
}

interface LinkIndex {
	titoloIndice: string
	linkIndice: string
}

// title = Titolo Sezione
// description1 = Sezione testo sotto titolo
// description2 = Sezione testo sotto titolo
// indexTitle = Titolo sezione rosa INDICE
// sections = Sezioni scritte sotto i titoli in grassetto
// indexes = i link nel riquadro dell'indice

const TerminiCondizioni: React.FC<Props> = ({
	title,
	description1,
	description2,
	indexTitle,
	sections,
	indexes,
}) => {
	return (
		<div className="Termini-Condizioni">
			<Container className="SectionContainer">
				<Row>
					<div className="contenitore-Testo-Titolo">
						<div className="contenitore-Titolo">
							<div className="titoloTermini">{title}</div>
						</div>
					</div>
					<Col xs={{ order: 12 }} sm={{ order: 2 }} md={6} lg={7} xl={6}>
						<div className="contenitore-Testo">
							<div className="contenitore-Descrizione">
								<div className="descrizioneTermini">{description1}</div>
							</div>
							<div className="contenitore-Descrizione2">
								<div className="descrizioneTermini2">{description2}</div>
							</div>
							<div className="Dati">
								{sections.map((section, i) => (
									<div className="contenitore-Dati" key={i}>
										<h3 className="sottotitoliTermini">{section.dataTitle}</h3>
										<div className="descrizioneSottotitoli">{section.dataDesc}</div>
									</div>
								))}
							</div>
						</div>
					</Col>
					<Col xs={{ order: 2 }} sm={{ order: 12 }} md={6} lg={5} xl={6} className="ColonnaIndice">
						<div className="sezioneIndice">
							<div className="titoloIndice">{indexTitle}</div>
							{indexes.map((index, k) => (
								<div className="elementiIndice" key={k}>
									<div className="dataIndice">{index.linkIndice}</div>
								</div>
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default TerminiCondizioni
