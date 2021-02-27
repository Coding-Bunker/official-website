import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import './back_to_top.scss'

const handleClick = () => {
	window.scrollTo({ top: 0, behavior: `smooth` })
}

const Backtotop = () => {
	return (
		<div className="back-to-top-wrapper">
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a
				onClick={handleClick}
				onKeyDown={handleClick}
				role="button"
				tabIndex={-1}
				className="back-to-top-link"
				aria-label="Scroll to Top"
			>
				<FontAwesomeIcon icon={faArrowUp} id="ArrowUp" />
			</a>
		</div>
	)
}

export default Backtotop
