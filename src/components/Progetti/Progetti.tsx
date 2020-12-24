import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import progettiStyle from "./Progetti.module.scss"
import ProjectCard from "../ProjectCard/ProjectCard";

interface Card {
    img: string,
    title: string,
    description: string
}

interface Props {
    title: string,
    projects: Array<Card>,
    link: string
}

const Progetti = (props: Props) =>{
    const cardRes: Array<ProjectCard> = []

    props.projects.forEach((card: Card) => {
        cardRes.push(<Col md="auto"><ProjectCard img={card.img} title={card.title} description={card.description} /></Col>)
    })

    return(
        <div className={progettiStyle.main_container}>

            <Container className={progettiStyle.Container_titolo}>
                <span className={progettiStyle.titolo_progetti}>{props.title}</span>
            </Container>

            <Container fluid>
                <Row className="justify-content-around">
                    {cardRes}
                </Row>
            </Container>
            <div className={progettiStyle.altri_progetti}>
                <a href={props.link} className={progettiStyle.scopri_progetti}>Scopri tutti i progetti</a>
            </div>
        </div>
    )
}
export default Progetti