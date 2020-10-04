import React from 'react'
import './Scrollbar.scss'

const Scrollbar = props => {
	return (
		<div className="scrollbar" id="style">
			<div className="force-overflow">{props.children}</div>
		</div>
	)
}

export default Scrollbar
