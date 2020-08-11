import React from "react"
import staffCardStyles from "./StaffCard.module.scss"


export default props => {
    return (
        <div className={staffCardStyles.component + (props.className? ` ${props.className}` : "")}>
            <div className={staffCardStyles.profilePicContainer}><img className={staffCardStyles.profilePic} src={props.profilePic} alt=""/></div>
            <div className={staffCardStyles.containerCard}>
                <div className={staffCardStyles.imgBackground}></div>
                <div className={staffCardStyles.descriptionContainer}>
                    <div className={staffCardStyles.name}>{props.name}</div>
                    <div className={staffCardStyles.description}>{props.description}</div>
                </div>
            </div>      
        </div>
    )
}