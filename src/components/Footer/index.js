import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { faLinkedin, faDiscord, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import LinkButton from '../LinkButton'

import './style.scss'

const Footer = () => {
	const { register, handleSubmit } = useForm()

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
					newsletterDescription
					riferimentoLinkLegali {
						nome
						link
					}
					logo {
						fixed(height: 60, width: 60) {
							...GatsbyDatoCmsFixed
						}
					}
				}
			}
		`,
	)

	const onSubmitForm = async data => {
		console.log(data)

		const res = await axios.post('http://94.38.129.41:8080/newsletters', {
			data,
		})

		console.log(res.data)
	}

	console.log(data)

	return (
		<footer className="footer">
			<Container fluid className="text-center">
				<Row>
					<Col md="8" className="bg-primary no-gutters footer__links p-4">
						<div className="d-flex flex-row justify-content-center align-items-center">
							<LinkButton link={'/test'} icon={faInstagram} />
							<LinkButton link={'/test'} icon={faGithub} />
							<LinkButton link={'/test'} icon={faDiscord} />
							<LinkButton link={'/test'} icon={faLinkedin} />
						</div>
						<Row>
							<Col>
								<h6>Coding Bunker</h6>
								<ul className="list-unstyled">
									{data.datoCmsFooter.riferimentoCodingBunker.map((route, index) => (
										<li key={index}>
											<Link to={route.link}>{route.nome}</Link>
										</li>
									))}
								</ul>
							</Col>
							<Col>
								<h6>Resta aggiornato</h6>
								<ul className="list-unstyled">
									{data.datoCmsFooter.riferimentoSostienici.map((route, index) => (
										<li key={index}>
											<Link to={route.link}>{route.nome}</Link>
										</li>
									))}
								</ul>
							</Col>
							<Col>
								<h6>Sostienici</h6>
								<ul className="list-unstyled">
									{data.datoCmsFooter.riferimentoSostienici.map((route, index) => (
										<li key={index}>
											<Link to={route.link}>{route.nome}</Link>
										</li>
									))}
								</ul>
							</Col>
						</Row>
					</Col>
					<Col md="4" className="bg-secondary no-gutters footer__newsletter p-4">
						<Container className="mt-2 mb-2">
							<h6>Newsletter</h6>
							<p>{data.datoCmsFooter.newsletterDescription}</p>
							<Form onSubmit={handleSubmit(onSubmitForm)}>
								<Form.Group controlId="formGroupName">
									<Form.Control name="name" ref={register} type="text" placeholder="Nome" />
								</Form.Group>
								<Form.Group controlId="formGroupCognome">
									<Form.Control name="surname" ref={register} type="text" placeholder="Cognome" />
								</Form.Group>
								<Form.Group controlId="formGroupEmail">
									<Form.Control name="email" ref={register} type="text" placeholder="Email" />
								</Form.Group>

								<Button variant="primary" type="submit">
									Registrami
								</Button>
							</Form>
						</Container>
					</Col>
				</Row>
				<Row>
					<Col className="footer__copyright">
						<Container fluid>
							<div class="footer__copyright__left">Coding Bunker © 2020</div>
							<div class="footer__copyright__rigth">
								{data.datoCmsFooter.riferimentoLinkLegali.map((route, index) => (
									<Link key={index} to={route.link}>
										{route.nome}
									</Link>
								))}
							</div>
						</Container>
					</Col>
					<div class="footer__logo">
						<Img imgStyle={{ marginBottom: 0 }} fixed={data.datoCmsFooter.logo.fixed} />
					</div>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
