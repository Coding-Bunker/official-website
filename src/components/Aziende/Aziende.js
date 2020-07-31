import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Aziende.scss"

const Aziende = () =>{
    return(
        <div>
            <Container>
                <Row className="justify-content-center h-100">
                    <Col md="auto" my="auto">
                        <img src={require("../../images/Image_3.png")} alt=""/>
                    </Col>
                    <Col md="auto" my="auto">
                        <img src={require("../../images/Image_4.png")} alt=""/>
                    </Col>
                    <Col md="auto" my="auto">
                        <img src={require("../../images/Image_5.png")} alt=""/>
                    </Col>
                    <Col md="auto" my="auto">
                        <img src={require("../../images/Image_6.png")} alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Aziende