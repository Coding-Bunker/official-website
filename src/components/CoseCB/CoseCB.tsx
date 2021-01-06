import React from 'react'
import './CoseCB.scss'
import { Container } from 'react-bootstrap'

interface Props {
	title: string
	description: string
}

const CoseCB: React.FC<Props> = ({ title, description }) => {
	return (
		<div className="CoseCB">
			<div className="Contenitore-Nero">
				<Container fluid className="Contenitore-Testo">
					<div className="Contenitore-Titolo">
						<h1 className="titoloCB">{title}</h1>
					</div>
					<div className="Contenitore-Descrizione">
						<p className="descrizioneCB">{description}</p>
					</div>
				</Container>
			</div>
		</div>
	)
}
export default CoseCB
