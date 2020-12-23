import React from 'react'
import staffCardStyles from './StaffCard.module.scss'

const StaffCard = ({ className, profilePic, name, description }) => {
	return (
		<div className={staffCardStyles.component + (className ? ` ${className}` : '')}>
			<div className={staffCardStyles.profilePicContainer}>
				<img className={staffCardStyles.profilePic} src={profilePic} alt="" />
			</div>
			<div className={staffCardStyles.containerCard}>
				<div className={staffCardStyles.imgBackground} />
				<div className={staffCardStyles.descriptionContainer}>
					<div className={staffCardStyles.name}>{name}</div>
					<div className={staffCardStyles.description}>{description}</div>
				</div>
			</div>
		</div>
	)
}

export default StaffCard
