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
						<p className="descrizioneCB">
							{description} <br /> <br />
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi beatae
							blanditiis commodi dolor ea eligendi eveniet, libero, molestiae numquam praesentium
							quod reiciendis rerum sequi, similique sit suscipit veniam.
						</p>
					</div>
				</Container>
			</div>
		</div>
	)
}
export default CoseCB
