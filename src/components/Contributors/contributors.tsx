import React from 'react'
import { Container, Button } from 'react-bootstrap'
import contributors_style from './contributors.module.scss'

import ContributorCard from '../ContributorCard/ContributorCard.js'

interface Props {
	title: string
	undertitle: string
}

const Contributors: React.FC<Props> = ({ title, undertitle }) => {
	return (
		<div>
			<div className={contributors_style.intestazione}>
				<div className={contributors_style.linea} />
				<span className={contributors_style.titolo}>{title}</span>
				<div className={contributors_style.linea} />
			</div>
			<Container>
				<div className={contributors_style.sottotitolo}>{undertitle}</div>
				{ContributorCard}
				<div className={contributors_style.button}>
					<Button className={contributors_style.vediAltri}>Vedi altri</Button>
				</div>
			</Container>
		</div>
	)
}

export default Contributors
