import React from 'react'
import staffCardStyles from './StaffCard.module.scss'

const StaffCard = ({
	className,
	className2,
	className3,
	className4,
	profilePic,
	name,
	description,
}) => {
	return (
		<div className={`${staffCardStyles.component} ${className4}`}>
			<div className={`${staffCardStyles.profilePicContainer} ${className}`}>
				<img className={staffCardStyles.profilePic} src={profilePic} alt="" />
			</div>
			<div className={`${staffCardStyles.containerCard} ${className}`}>
				<div className={staffCardStyles.imgBackground} />
				<div className={staffCardStyles.descriptionContainer}>
					<div className={`${staffCardStyles.name} ${className2}`}>{name}</div>
					<div className={`${staffCardStyles.description} ${className3}`}>{description}</div>
				</div>
			</div>
		</div>
	)
}
// {`${staffCardStyles.component} ${className}`}

export default StaffCard
