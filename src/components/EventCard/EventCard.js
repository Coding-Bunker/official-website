import React from "react"
import eventCardStyles from "./EventCard.module.scss"


export default props => {

    // Prendo la data e la scompongo in giorno, mese, anno
    let date = props.date
    let [day, month, year] = date.split("/")

    // Converto il mese da numero a lettere
    switch(parseInt(month)) {
        case 1:
            month = "GEN"
            break
        case 2:
            month = "FEB"
            break
        case 3:
            month = "MAR"
            break
        case 4:
            month = "APR"
            break
        case 5:
            month = "MAG"
            break
        case 6:
            month = "GIU"
            break
        case 7:
            month = "LUG"
            break
        case 8:
            month = "AGO"
            break
        case 9:
            month = "SET"
            break
        case 10:
            month = "OTT"
            break
        case 11:
            month = "NOV"
            break
        case 12:
            month = "DEC"
            break
    }

    return (
        <div className={eventCardStyles.containerCard}>
            <div className={eventCardStyles.imgContainer}>
                <img className={eventCardStyles.img} src={props.img} alt={props.title}/>
            </div>
            <div className={eventCardStyles.calendarContainer}>
                <div className={eventCardStyles.month}>{month}</div>
                <div className={eventCardStyles.day}>{day}</div>
            </div>
            <div className={eventCardStyles.descriptionContainer}>
                <div className={eventCardStyles.title}>{props.title}</div>
                <div className={eventCardStyles.description}>{props.description}</div>
            </div>
        </div>
    )
}