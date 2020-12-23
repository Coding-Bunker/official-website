import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WhyEnter.scss"

interface Props {
    title: string,
    description: string,
    img: string
}


const WhyEnter = (props: Props) => {
    return(
        <div className="container-WhyEnter">
            <Container fluid>
                <Row>
                    <Col>
                        <div className="container-text">
                            <span className="title" >{props.title}</span>
                            <p className="description">{props.description}</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src={props.img} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default WhyEnter