import React from 'react'
import { Nav, Navbar as BtNavbar } from 'react-bootstrap'
import { faLinkedin, faDiscord, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import LinkButton from '../LinkButton'

import './style.scss'

const Navbar = () => {
	const data = useStaticQuery(
		graphql`
			query NavbarQuery {
				datoCmsNavbar {
					logo {
						fixed(height: 70, width: 70) {
							...GatsbyDatoCmsFixed
						}
					}
				}
			}
		`,
	)
	console.log(data);
	return (
		<BtNavbar expand="lg" bg="primary" variant="dark">
			
			<BtNavbar.Brand to="/" as={Link}>
				<Img style={{ verticalAlign: "middle" }} imgStyle={{ marginBottom: 0 }} fixed={data.datoCmsNavbar.logo.fixed} />
			</BtNavbar.Brand>
			<BtNavbar.Toggle />
			<div className="nav-container w-100">
				<BtNavbar.Collapse>
					<Nav className="links mr-auto">
						<Nav.Link to="/chi-siamo" as={Link}>Chi siamo</Nav.Link>
						<Nav.Link to="entra-ora" as={Link}>Entra ora</Nav.Link>
						<Nav.Link to="hall-of-fame" as={Link}>Hall of fame</Nav.Link>
						<Nav.Link to="/blog" as={Link}>Blog</Nav.Link>
						<Nav.Link to="/sostienici" as={Link}>Sostienici</Nav.Link>
					</Nav>
					<Nav className="link-buttons">
						<LinkButton link={'/test'} icon={faInstagram} />
						<LinkButton link={'/test'} icon={faGithub} />
						<LinkButton link={'/test'} icon={faDiscord} />
						<LinkButton link={'/test'} icon={faLinkedin} />
					</Nav>
				</BtNavbar.Collapse>
			</div>
		</BtNavbar>
	)
}

export default Navbar
