/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../styles/stopcode.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

const StopCodePage = () => (
	<div className="stopcode__container">
		<div className="stopcode__window">
			<div className="stopcode__topbar">
				Easter egg - stopcode
				<div className="stopcode__topbar-close">
					<FontAwesomeIcon icon={faTimes} />
				</div>
			</div>
			<div className="stopcode__description">
				<div className="stopcode__description-left">
					<div className="stopcode__description-left-icon">
						<FontAwesomeIcon icon={faTimes} />
					</div>
				</div>
				<div className="stopcode__description-right">
					Cosa pensavi di fare qui?
					<br />
					Torna a programmare :)
				</div>
			</div>
			<div className="stopcode__buttons">
				<div className="stopcode__button-back">
					<a style={{ color: 'white' }} href="javascript:history.back()">
						Indietro
					</a>
				</div>
				<div className="stopcode__button-home">
					<Link style={{ color: 'white' }} to="/">
						Home
					</Link>
				</div>
			</div>
		</div>
	</div>
)

export default StopCodePage
