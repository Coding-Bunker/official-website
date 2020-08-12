import React from 'react'
import projectCardStyles from './ProjectCard.module.scss'

export default props => (
	<div className={projectCardStyles.containerCard}>
		<div className={projectCardStyles.imgContainer}>
			<img className={projectCardStyles.img} src={props.img} alt={props.title} />
		</div>
		<div className={projectCardStyles.descriptionContainer}>
			<div className={projectCardStyles.title}>{props.title}</div>
			<div className={projectCardStyles.description}>{props.description}</div>
		</div>
	</div>
)
