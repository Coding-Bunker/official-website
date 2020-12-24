import React from 'react'
import { Button } from 'react-bootstrap'
import './CookieBar.scss'
import CookieBarImage from '../../images/cookie-bite-solid.png'

const CookieBar: React.FC = () => {
	return (
		<div className="CookieBar">
			<div className="MainDiv">
				<img className="CookieIcon" src={CookieBarImage} alt="" />
				<div className="TextDiv">
					<span className="CookieText">
						Usiamo i cookie per darti un eseprienza migliore sul nostro sito. Per maggiori
						informazioni
					</span>
					<a href="/" className="ClickableLink">
						clicca qui.
					</a>
				</div>
				<Button className="AcceptButton">Accetto</Button>
			</div>
		</div>
	)
}

export default CookieBar
