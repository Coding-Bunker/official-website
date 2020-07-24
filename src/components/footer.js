import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Row, Col, Container, Form } from "react-bootstrap"

const Footer = () => {

	const data = useStaticQuery(
		graphql`
		query FooterData {
			datoCmsFooter {
				riferimentoCodingBunker {
					nome
					link
				}
				riferimentoSostienici {
					nome
					link
				}
				riferimentoRestaAggiornato {
					nome
					link
				}
				riferimentoLinkLegali {
					nome
					link
				}
				links {
					linkTelegram
					linkDiscord
					linkInstagram
					linkGithub
				}
				newsletterDescription
			}
		}
	`
	);

	console.log(data);

	return (
		<footer className="footer ">
			<Container fluid className="text-center">
				<Row>
					<Col md="8" className="bg-primary no-gutters footer__links p-4">
						<div className="d-flex flex-row justify-content-center align-items-center">

						</div>
						<Row>
							<Col>
								<h6>Coding Bunker</h6>
								<ul className="list-unstyled">
									{
										data.datoCmsFooter.riferimentoCodingBunker.map(
											(link, index) => (
												<li key={index}>
													<Link to={link.link}>
														{link.nome}
													</Link>
												</li>
											)
										)
									}
								</ul>
							</Col>
							<Col>
								<h6>Resta aggiornato</h6>
								<ul className="list-unstyled">
									{
										data.datoCmsFooter.riferimentoSostienici.map(
											(link, index) => (
												<li key={index}>
													<Link to={link.link}>
														{link.nome}
													</Link>
												</li>
											)
										)
									}
								</ul>
							</Col>
							<Col>
								<h6>Sostienici</h6>
								<ul className="list-unstyled">
									{
										data.datoCmsFooter.riferimentoSostienici.map(
											(link, index) => (
												<li key={index}>
													<Link to={link.link}>
														{link.nome}
													</Link>
												</li>
											)
										)
									}
								</ul>
							</Col>
						</Row>
					</Col>
					<Col md="4" className="bg-secondary no-gutters footer__newsletter p-4">
						<Container className="mt-2 mb-2">
							<h6>Newsletter</h6>
							<p>{data.datoCmsFooter.newsletterDescription}</p>
							<Form>
								<Form.Group controlId="formGroupName">
									<Form.Control type="text" placeholder="Nome" />
								</Form.Group>
								<Form.Group controlId="formGroupCognome">
									<Form.Control type="text" placeholder="Cognome" />
								</Form.Group>
								<Form.Group controlId="formGroupEmail">
									<Form.Control type="text" placeholder="Email" />
								</Form.Group>

							</Form>
						</Container>
					</Col>
				</Row>
				<Row>
					<Col class="footer__copyright">
						<Container>
							<div>
								Coding Bunker © 2020
							</div>
							<div>
								ello
							</div>
						</Container>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}



export default Footer;