import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './CoseCB.scss'

const CoseCB = () => {
	return (
		<section className="cose-CB">
			<div className="MainContainer">
				<h1 className="Titolo">Cos'è Coding Bunker</h1>
				<span>(cosa facciamo)</span>
				<Container className="Container-Inferiore" fluid>
					<Row>
						<Col>
							<div className="Container-Descrizione">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus alias
									consectetur deleniti exercitationem explicabo facere illo incidunt labore libero,
									magni molestias nisi officiis pariatur praesentium quae quisquam temporibus
									voluptatum. Ab accusamus alias consectetur deleniti exercitationem explicabo
									facere. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
									alias consectetur
								</p>
							</div>
						</Col>
						<Col>
							<div className="LogoCB">
								<img alt="Logo coding bunker" src={require('../../images/LogoCB2.png')} />
							</div>
						</Col>
					</Row>
				</Container>

				<div className="Contanier-Scopri">
					<a href="/about-us" className="Scopri">
						Scopri di più
					</a>
				</div>
			</div>
		</section>
	)
}
export default CoseCB
