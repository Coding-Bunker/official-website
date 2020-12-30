import React from 'react'
import { Button } from 'react-bootstrap'
import './CookieBar.scss'
import CookieBarImage from '../../images/cookie-bite-solid.png'

function Cookie() {
	const CookieDiv = document.querySelector('.CookieBar')
	const CookieButton = document.querySelector('.AcceptDiv')

	CookieButton?.addEventListener('click', () => {
		CookieDiv?.classList.remove('active')
		localStorage.setItem('CookieBannerDisplayed', 'true')
	})

	setTimeout(() => {
		if (!localStorage.getItem('CookieBannerDisplayed')) CookieDiv?.classList.add('active')
	}, 2000)
}

const CookieBar: React.FC = () => {
	return (
		<div onLoad={Cookie} className="CookieBar" id="Main">
			<div className="MainDiv">
				<div className="CookieContainer">
					<img className="CookieIcon" src={CookieBarImage} alt="" />
				</div>
				<div className="TextDiv">
					<span className="CookieText">
						Usiamo i cookie per darti un eseprienza migliore sul nostro sito. Per maggiori
						informazioni
					</span>
					<a href="/" className="ClickableLink">
						clicca qui.
					</a>
				</div>
				<div className="AcceptDiv">
					<Button id="Accept" className="AcceptButton">
						Accetto
					</Button>
				</div>
			</div>
		</div>
	)
}
export default CookieBar
