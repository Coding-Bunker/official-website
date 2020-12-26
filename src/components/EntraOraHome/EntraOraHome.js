import React from 'react'
import { Container, Button } from 'react-bootstrap'

import './EntraOraHome.scss'
import IconaDiscord from '../../images/icona-discord.png'
import EntraOra2 from '../../images/Entra_ora_senza_logo_discord.png'

const EntraOraHome = () => {
	return (
		<section className="entra-ora-component">
			<div className="Icona-Discord">
				<img src={IconaDiscord} alt="discord" />
			</div>
			<Container
				fluid
				className="entra-ora"
				style={{
					backgroundImage: `url(${EntraOra2})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					overflow: 'hidden',
				}}
			>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio consequuntur YEET YEET YEET
					libero similique commodi? Qui amet doloremque ab libero numquam dicta, explicabo quo
					commodi voluptatibus, error, earum hic minima architecto nesciunt?
				</p>

				<div className="centrare">
					<Button variant="light" className="entra-ora-btn px-5 py3">
						<h1>
							<strong>Entra ora</strong>
						</h1>
					</Button>
				</div>
			</Container>
		</section>
	)
}
export default EntraOraHome
