import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import './style.scss'

const Backtotop = () => {
	return (
		<div className="back-to-top-wrapper">
			<a href="#top" className="back-to-top-link" aria-label="Scroll to Top">
				<FontAwesomeIcon icon={faArrowUp} id="ArrowUp" />
			</a>
		</div>
	)
}

export default Backtotop
