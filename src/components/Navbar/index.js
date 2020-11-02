import React from 'react'
import { Nav, Navbar as BtNavbar, Button, Container } from 'react-bootstrap'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import './style.scss'

const Navbar = () => {
	const data = useStaticQuery(
		graphql`
			query NavbarQuery {
				datoCmsNavbar {
					logo {
						fixed(height: 100, width: 100) {
							...GatsbyDatoCmsFixed
						}
					}
				}
			}
		`,
	)
	console.log(data)
	return (
		<BtNavbar variant="dark" expand="lg">
			<Container>
				<BtNavbar.Brand to="/" as={Link}>
					<Img
						style={{ verticalAlign: 'middle' }}
						imgStyle={{ marginBottom: 0 }}
						fixed={data.datoCmsNavbar.logo.fixed}
					/>
				</BtNavbar.Brand>
				<BtNavbar.Toggle />
				<div className="nav-container w-100">
					<BtNavbar.Collapse>
						<Nav className="links mr-auto">
							<Nav.Link to="/chi-siamo" as={Link}>
								Chi siamo
							</Nav.Link>
							<Nav.Link to="/eventi" as={Link}>
								Gli eventi
							</Nav.Link>
							<Nav.Link to="/partner" as={Link}>
								I partner
							</Nav.Link>
							<Nav.Link to="/hall-of-fame" as={Link}>
								Hall of Fame
							</Nav.Link>
							<Nav.Link to="/sostienici" as={Link}>
								Sostienici
							</Nav.Link>
							<Nav.Link to="/blog" as={Link}>
								Blog
							</Nav.Link>
						</Nav>
						<Button id="entra-nel-bunker">Entra nel bunker</Button>
					</BtNavbar.Collapse>
				</div>
			</Container>
		</BtNavbar>
	)
}

export default Navbar
