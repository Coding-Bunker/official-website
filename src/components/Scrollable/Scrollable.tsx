import React from "react";
import "./Scrollable.scss"

import EventCard from "../EventCard/EventCard";

interface Card {
    date: string,
    img: any,
    title: string,
    description: string
}

interface Props {
    title: string,
    description: string,
    cards: Array<Card>
}

const Scrollable = (props: Props) => {
    const cardsRes: Array<EventCard> = []

    props.cards.forEach((card: Card) => {
        cardsRes.push(<EventCard date={card.date} img={card.img} title={card.title} description={card.description} />)
    })

    return(
        <div className="scrollable">
            <div className="intestazione">
                <div className="linea"/>
                <span className="titolo">{props.title}</span>
                <div className="linea"/>
            </div>
            
            <div className="sottotitolo">{props.description}</div>
            
            <section className="card-list">{cardsRes}</section>
        </div>
    )
}

export default Scrollable;
