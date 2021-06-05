import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import './index.scss'

import ContributorCard from '../ContributorCard/ContributorCard'

const Contributors = () => {
	return (
		<div className="Contributors">
			<div className="intestazione">
				<div className="linea" />
				<span className="titolo">Contributors</span>
				<div className="linea" />
			</div>
			<Container>
				<div className="sottotitolo">
					Alcune persone stanno aderendo alle attività della community in maniera considerevole.
					Dalle attività di amministrazione, alla gestione dei social e creazione dei contenuti,
					fino allo sviluppo dei progetti open source, queste persone dedicano il loro tempo e le
					loro energie alla community, perché credono nei nostri valori.
					<br />
					Sono i Contributors e sono i ragazzi elencati qui sotto.
				</div>
				<br />
				<br />
				<br />
				<Row>
					<Col xs={12} md lg>
						{/* Baraff */}
						<ContributorCard />
					</Col>
					<Col xs={12} md lg>
						{/* Federico */}
						<ContributorCard />
					</Col>
					<Col xs={12} md lg>
						{/* Pietro */}
						<ContributorCard />
					</Col>
				</Row>
				<Row>
					<Col xs={12} md lg>
						{/* Simone */}
						<ContributorCard />
					</Col>
					<Col xs={12} md lg>
						{/* Giuseppe Carlo Monteleone */}
						<ContributorCard />
					</Col>
					<Col xs={12} md lg>
						{/* Matteleva */}
						<ContributorCard />
					</Col>
				</Row>
				<Row>
					<Col xs={12} md lg>
						{/* Michele */}
						<ContributorCard />
					</Col>
					<Col xs={12} md lg>
						{/* Andrea A. */}
						<ContributorCard />
					</Col>
					<Col xs={12} md lg>
						{/* annalamboglia */}
						<ContributorCard />
					</Col>
				</Row>
				<Row>
					<Col xs={12} md lg>
						{/* Antonino R. */}
						<ContributorCard />
					</Col>
					<Col xs={12} md lg>
						{/* edo */}
						<ContributorCard />
					</Col>
					<Col xs={12} md lg>
						{/* 3flies4 */}
						<ContributorCard />
					</Col>
				</Row>
				<Row>
					<Col xs={12} md lg>
						{/* Nicola Preda */}
						<ContributorCard />
					</Col>
					<Col xs={12} md lg>
						{/* Riccardo Lupinu */}
						<ContributorCard />
					</Col>
					<Col xs={12} md lg>
						{/* vincenzo.scalcione */}
						<ContributorCard />
					</Col>
				</Row>
				<Row>
					<Col xs={12} md lg>
						{/* samuele794 TBS */}
						<ContributorCard />
					</Col>
					<Col xs={12} md lg>
						{/* samuele794 TBS */}
						<ContributorCard />
					</Col>
					<Col xs={12} md lg>
						{/* Danie7e */}
						<ContributorCard />
					</Col>
				</Row>
				<br />
				<br />
				<div className="button">
					<Button className="vedi-altri">Vedi altri</Button>
				</div>
			</Container>
		</div>
	)
}

export default Contributors
