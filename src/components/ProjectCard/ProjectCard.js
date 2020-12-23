import React from 'react'
import projectCardStyles from './ProjectCard.module.scss'

const ProjectCard = ({ img, title, description }) => (
	<div className={projectCardStyles.containerCard}>
		<div className={projectCardStyles.imgContainer}>
			<img className={projectCardStyles.img} src={img} alt={title} />
		</div>
		<div className={projectCardStyles.descriptionContainer}>
			<div className={projectCardStyles.title}>{title}</div>
			<div className={projectCardStyles.description}>{description}</div>
		</div>
	</div>
)

export default ProjectCard
