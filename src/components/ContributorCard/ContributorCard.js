import React from "react"
import contributorCard from "./ContributorCard.module.scss"

export default props => {
    let user = props.user
    let bgcolor = ""

    // Associamo il tipo di utente al colore corrispondente
    switch(user) {
        case "Admin":
            bgcolor = "rgb(157, 124, 255)"
            break
        case "Moderator":
            bgcolor = "rgb(224, 173, 248)"
            break
        case "Mentor":
            bgcolor = "rgb(250, 51, 24)"
            break
        case "Senior member":
            bgcolor = "rgb(226, 129, 6)"
            break
        case "Member":
            bgcolor = "rgb(130, 196, 250)"
            break
        case "Junior member":
            bgcolor = "rgb(122, 203, 219)"
            break
    }

    return(
        <div className={contributorCard.containerCard}>
            <div className={contributorCard.name}>{props.name}</div>
            <div className={contributorCard.expert}>{props.expert}</div>
            <div className={contributorCard.discordContainer} style={{ backgroundColor: bgcolor }}>
                <div className={contributorCard.discordTitle}>{props.user}</div>
                <div className={contributorCard.discordDescription}>{props.description}</div>
            </div>
        </div>
    )
}