import React from "react"
import eventCardStyles from "./ProjectCard.module.scss"


export default props => (
    <div className={eventCardStyles.containerCard}>
        <div className={eventCardStyles.imgContainer}>
            <img className={eventCardStyles.img} src={props.img} alt={props.title}/>
        </div>
        <div className={eventCardStyles.descriptionContainer}>
            <div className={eventCardStyles.title}>{props.title}</div>
            <div className={eventCardStyles.description}>{props.description}</div>
        </div>
    </div>
)
