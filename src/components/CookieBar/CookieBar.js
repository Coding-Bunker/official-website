import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './CookieBar.scss'

const CookieBar = () => {
	return (
		<div>
			<div className="MainDiv">
				<img className="CookieIcon" src={require('../../images/cookie-bite-solid.png')} alt="" />
				<div className="TextDiv">
					<span className="CookieText">
						Usiamo i cookie per darti un'eseprienza migliore sul nostro sito. Per maggiori
						informazioni{' '}
					</span>
					<a href="#" className="ClickableLink">
						clicca qui.
					</a>
				</div>
				<Button className="AcceptButton">Accetto</Button>
			</div>
		</div>
	)
}

export default CookieBar
