import React from 'react'
import projectCardStyles from './ProjectCard.module.scss'

const ProjectCard = ({ img, title, description, className, className2, className3 }) => (
	<div className={`${projectCardStyles.containerCard} ${className}`}>
		<div className={projectCardStyles.imgContainer}>
			<img className={projectCardStyles.img} src={img} alt={title} />
		</div>
		<div className={projectCardStyles.descriptionContainer}>
			<div className={`${projectCardStyles.title} ${className3}`}>{title}</div>
			<div className={`${projectCardStyles.description} ${className2}`}>{description}</div>
		</div>
	</div>
)

export default ProjectCard
