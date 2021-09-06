import React from 'react'
import headingStyles from './Heading.module.scss'

const Heading = ({ title, subtitle }) => (
	<div className={headingStyles.Heading}>
		<div className={headingStyles.title}>
			<div className={headingStyles.line} />
			<span className={headingStyles.text}>{title}</span>
			<div className={headingStyles.line} />
		</div>
		<div className={headingStyles.subtitle}>{subtitle}</div>
	</div>
)

export default Heading
