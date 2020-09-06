import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './EntraOraPage.module.scss'

const EntraOraPage = () => {
	return (
		<section>
			<Container fluid className="entra-ora">
				<div class="logo-discord">
					<img src={require('../../images/discord.png')} alt="" class="icona" />
				</div>
				<div class="cta">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio consequuntur libero
						similique commodi? Qui amet doloremque ab libero numquam dicta, explicabo quo commodi
						voluptatibus, error, earum hic minima architecto nesciunt?
					</p>
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
export default EntraOraPage
